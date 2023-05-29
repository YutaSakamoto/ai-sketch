"use client";
import { useState, useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

import { FaUndo, FaTrash } from "react-icons/fa";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const canvasRef = useRef(null);

  const handleUndo = () => {
    canvasRef.current.undo();
  };

  const handleClear = () => {
    canvasRef.current.clearCanvas();
  };

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      {/* Header Section */}
      <section className="flex items-center justify-center mb-10">
        <h1 className="font-semibold text-transparent text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block bg-clip-text">
          AIお絵描き
        </h1>
      </section>

      {/* Sketch Canvas Section */}
      <section className="w-[400px] h-[400px] mx-auto mb-16 mt-6">
        <div className="w-full aspect-square border-none">
          <ReactSketchCanvas
            ref={canvasRef}
            width="100%"
            height="100%"
            strokeWidth={4}
            strokeColor="#000000"
          />
        </div>

        <div className="flex items-center justify-between mt-2">
          <button
            onClick={handleUndo}
            className=" text-gray-300 text-md flex items-center hover:scale-110 duration-300 hover:text-yellow-500">
            <FaUndo className="mr-2" /> 戻る
          </button>

          <button 
            onClick={handleClear}
            className=" text-gray-300 text-md flex items-center hover:scale-110 duration-300 hover:text-red-500">
            <FaTrash className="mr-2" /> 消去
          </button>
        </div>
      </section>

      {/* Prompt Section */}
      <section className="w-[400px] flex items-center mx-auto">
          <input
            type="text"
            name="prompt"
            value={prompt}
            onChange={(e)=> setPrompt(e.target.value)}
            className="rounded-l-lg py-3 px-4 w-full focus:outline-none text-black"
            placeholder="Enter your prompt here"
          />

          <button className="rounded-r-lg py-3.5 px-4 ml-1 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium text-sm text-center">
            作る
          </button>
      </section>

      {/* Output Image Section */}
      <section className="w-[400px] h-[400px] flex items-center justify-center mx-auto mt-12"></section>
    </div>
  );
}