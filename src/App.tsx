import React from "react";
import Quiz from "./components/Quiz.tsx";

function App() {
  return (
    <main className="min-h-screen bg-pink-50 md:bg-cover bg-[25%_95%] text-gray-900" style={{ backgroundImage: "url('/color_coded_bg.png')" }}>
      <h1 className="max-w-xl mx-auto p-5 md:pt-10 text-center text-2xl sm:text-3xl md:text-4xl font-bold md:font-semibold">Are You Mentally Stable or Just Good at Color-Coding Your Calendar?</h1>
      
      <Quiz />
    </main>
  );
}

export default App;
