import React from "react";

const liveScor = () => {
  return (
    <div className="h-screen w-screen bg-[#F5F5F5] justify-center flex items-center">
      <div className="flex items-center flex-col max-w-[700px]  w-full h-full bg-white">
      <div className="h-[60px] sm:h-[50px] w-full bg-white shadow-sm text-black flex items-center justify-center font-bold text-lg">
          <p>Live Scores</p>
        </div>
        <div className="px-8 pt-8 font-semibold text-black flex flex-col justify-center items-center w-full sm:w-[550px]">
          <p>Indian Premier League 2023</p>
          {/* Scores */}
          <div className="flex justify-between w-full pt-7">
            <div className="flex flex-col items-center ">
              <p className="text-black text-lg font-normal hover:underline hover:cursor-pointer">
                Rajasthan Royals
              </p>
              <p className="text-black text-xl font-normal">187/5</p>
              <p className="text-black text-[10px] font-normal">(19.4)</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-black text-xl font-normal hover:underline hover:cursor-pointer">
                Rajasthan Royals
              </p>
              <p className="text-black text-lg font-semibold">187/5</p>
              <p className="text-black text-[13px] font-medium">(19.4)</p>
            </div>
          </div>

          {/* Match status */}
          <div className="flex items-center flex-col w-full pt-8">
            <p className="text-black text-base font-normal hover:underline hover:cursor-pointer">
              Rajasthan Royals won by 3 runs
            </p>
            <p className="text-gray-500 text-[12px] font-light hover:underline hover:cursor-pointer">
              T20 17th Match
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default liveScor;