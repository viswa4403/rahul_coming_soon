"use client";
import React from "react";
import Image from "next/image"; // ✅ Better for performance with Next.js

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4 overflow-hidden">
      {/* 🏞️ Top Animated Illustration */}
      <div className="relative mt-36">
        <Image
          src="/images/Frame 52757.png"
          alt="Walking Illustration"
          width={400}
          height={400}
          className="absolute top-[-120px] z-10 animate-skate"
        />
        <Image
          src="/images/Frame 1000000879.png"
          alt="Background Frame"
          width={800}
          height={500}
          className="w-full h-auto"
        />
      </div>

      {/* 📰 Coming Soon Text */}
      <div className="text-center mt-12 rounded-md p-2">
        <h2 className="text-3xl sm:text-6xl md:text-6xl lg:text-[75px] font-bold text-[#9B7B2D] mb-5">
          COMING SOON!!
        </h2>
        <p
          className="font-[Poppins] text-black font-medium text-center max-w-2xl"
          style={{
            fontSize: "19.25px",
            lineHeight: "100%",
            letterSpacing: "1%",
          }}
        >
          We're working hard to finish the website and we'll be ready to launch
          very soon!
        </p>
      </div>

      {/* 🎞️ Scrolling Image Gallery */}
      <div className="mt-10 overflow-hidden relative w-full">
        <div className="flex animate-scroll gap-0">
          <Image src="/images/Comingsoonimg3.png" alt="Gallery 1" width={400} height={300} />
          <Image src="/images/Comingsoonimg3.png" alt="Gallery 2" width={400} height={300} />
          <Image src="/images/Comingsoonimg3.png" alt="Gallery 3" width={400} height={300} />
          <Image src="/images/Comingsoonimg4.png" alt="Gallery 4" width={400} height={300} />

          {/* Repeat for seamless scroll */}
          <Image src="/images/Comingsoonimg3.png" alt="Gallery 5" width={400} height={300} />
          <Image src="/images/Comingsoonimg3.png" alt="Gallery 6" width={400} height={300} />
          <Image src="/images/Comingsoonimg3.png" alt="Gallery 7" width={400} height={300} />
          <Image src="/images/Comingsoonimg4.png" alt="Gallery 8" width={400} height={300} />
        </div>
      </div>
    </main>
  );
};

export default Home;
