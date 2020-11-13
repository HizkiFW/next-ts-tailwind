import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-2 w-full flex flex-row justify-center pt-8 md:pt-32">
        <div className="w-full max-w-lg p-4">
          <h1 className="text-4xl font-bold tracking-tight leading-10">
            Welcome to <span className="text-blue-500">Next.js</span>
          </h1>
          <p className="leading-normal mt-4">
            This preset comes with Typescript and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
