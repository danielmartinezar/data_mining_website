/* eslint-disable react/no-unescaped-entities */
import React from "react";
export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-[#0050ff] mb-4 text-4xl sm:text-7xl lg:text-9xl font-extrabold">
            Hi{"👋"}
            <br />
            There!
          </h1>
          <p className="text-[#001657] font-semibold text-base sm:text-lg mb-6 lg:text-2xl">
            We are students of Systems Engineering at the Universidad Del Norte,
            and this project represents our culmination in the Data Mining
            course. As part of our academic journey, we have applied our
            knowledge and skills to develop this final project, showcasing our
            understanding of data mining concepts and techniques.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit lg:text-2xl rounded-full mr-4 mb-2 bg-[#0050ff] text-[#e4f6ff] hover:bg-[#0048e4]">
              More Info
            </button>
            <button className="px-6 py-3 w-full sm:w-fit lg:text-2xl rounded-full bg-transparent  hover:bg-[#74c0ff] border border-[#1363ff] text-[#001657]">
              Github
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 lg:ml-20 sm:ml-8">
          <div className=" w-[250px] h-[250px] lg:w-[580px] lg:h-[580px] md:w-[320px] md:h-[320px] lg:ml-32 relative">
            <img
              className="rounded-full h-full"
              src={"./images/dataMining.png"}
              alt="home"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
