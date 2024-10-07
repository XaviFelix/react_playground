import React from 'react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center -mt-20 text-lg relative">
      {/* Main content div */}
      <div className="flex-1 flex flex-col gap-5 items-start justify-center pl-40">
        {/* Rounded Border */}
        <div className="rounded-full border border-blue-400 bg-gray-800 p-3">
          <p>#1 Cutting Edge Health & Fitness Solution</p>
        </div>
        <h1 className="uppercase font-bold text-5xl sm:text-xl">
          New way to track your <span>progression</span>
        </h1>
        <p className="text-sm">
          Track your workouts, monitor your progress, and stay motivated<br />
          with our easy-to-use health and fitness mobile app.
        </p>

        {/* Download and Learn More buttons */}
        <div className="flex flex-row space-x-4">
          <button className="flex items-center justify-center px-3 py-4 rounded-md border-2 bg-slate-950 border-blue-400">
            <p>Download Now and Get Fit</p>
          </button>
          <button className="flex items-center justify-center px-3 py-4 rounded-md border-2 bg-gray-800 border-blue-400">
            <p>Learn More</p>
          </button>
        </div>
      </div>

      {/* Image div */}
      <div className="flex-1 flex items-center justify-center relative">
        <img
          src="src/assets/dd.jpg"
          alt="Fitness App Preview"
          className="relative z-10 w-full max-w-sm rounded-md"
        />
      </div>
    </div>
  );
}
