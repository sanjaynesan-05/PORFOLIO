/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import "./MetallicPaint.css";

// Default shader parameters
const defaultParams = {
  patternScale: 2,
  refraction: 0.015,
  edge: 1,
  patternBlur: 0.005,
  liquid: 0.07,
  speed: 0.3,
};

// MetallicPaint component
export default function MetallicPaint({ imageData, params = defaultParams }) {
  const canvasRef = useRef(null);
  const [gl, setGl] = useState(null);
  const [uniforms, setUniforms] = useState({});
  const totalAnimationTime = useRef(0);
  const lastRenderTime = useRef(0);

  const vertexShaderSource = `#version 300 es
  in vec2 a_position;
  out vec2 vUv;
  void main() {
    vUv = 0.5 * (a_position + 1.0);
    gl_Position = vec4(a_position, 0.0, 1.0);
  }`;

  const fragmentShaderSource = `#version 300 es
  precision mediump float;
  in vec2 vUv;
  out vec4 fragColor;
  uniform sampler2D u_image_texture;
  uniform float u_time;
  uniform float u_ratio;
  uniform float u_img_ratio;
  uniform float u_patternScale;
  uniform float u_refraction;
  uniform float u_edge;
  uniform float u_patternBlur;
  uniform float u_liquid;

  void main() {
    vec2 uv = vUv;
    uv.y = 1.0 - uv.y;
    float brightness = sin(u_time * 0.001 + uv.x * 10.0) * 0.5 + 0.5;
    vec4 texColor = texture(u_image_texture, uv);
    float mask = texColor.r;
    float metallic = smoothstep(0.3, 0.8, mask);
    vec3 color = mix(vec3(0.1), vec3(1.0, 1.0, 1.0), brightness * metallic);
    fragColor = vec4(color, metallic);
  }`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("webgl2");
    if (!canvas || !context) return;

    const createShader = (gl, source, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(context, vertexShaderSource, context.VERTEX_SHADER);
    const fragmentShader = createShader(context, fragmentShaderSource, context.FRAGMENT_SHADER);
    const program = context.createProgram();
    context.attachShader(program, vertexShader);
    context.attachShader(program, fragmentShader);
    context.linkProgram(program);

    const uniforms = {
      u_time: context.getUniformLocation(program, "u_time"),
      u_image_texture: context.getUniformLocation(program, "u_image_texture"),
      u_ratio: context.getUniformLocation(program, "u_ratio"),
      u_img_ratio: context.getUniformLocation(program, "u_img_ratio"),
      u_patternScale: context.getUniformLocation(program, "u_patternScale"),
      u_refraction: context.getUniformLocation(program, "u_refraction"),
      u_edge: context.getUniformLocation(program, "u_edge"),
      u_patternBlur: context.getUniformLocation(program, "u_patternBlur"),
      u_liquid: context.getUniformLocation(program, "u_liquid"),
    };

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = context.createBuffer();
    context.bindBuffer(context.ARRAY_BUFFER, buffer);
    context.bufferData(context.ARRAY_BUFFER, vertices, context.STATIC_DRAW);

    const a_position = context.getAttribLocation(program, "a_position");
    context.vertexAttribPointer(a_position, 2, context.FLOAT, false, 0, 0);
    context.enableVertexAttribArray(a_position);

    context.useProgram(program);
    setGl(context);
    setUniforms(uniforms);
  }, []);

  useEffect(() => {
    if (!gl || !imageData || !uniforms) return;

    const canvas = canvasRef.current;
    canvas.width = 1000;
    canvas.height = 1000;
    gl.viewport(0, 0, canvas.width, canvas.height);

    const texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      imageData.width,
      imageData.height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      imageData.data
    );

    gl.uniform1i(uniforms.u_image_texture, 0);
    gl.uniform1f(uniforms.u_img_ratio, imageData.width / imageData.height);
    gl.uniform1f(uniforms.u_ratio, 1.0);

    const animate = (time) => {
      gl.uniform1f(uniforms.u_time, time);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [gl, imageData, uniforms]);

  return <canvas ref={canvasRef} className="paint-container" />;
}

// --- Utility to parse image to imageData ---
export async function parseLogoImage(file) {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(bitmap, 0, 0);
  const imageData = ctx.getImageData(0, 0, bitmap.width, bitmap.height);
  return { imageData };
}
