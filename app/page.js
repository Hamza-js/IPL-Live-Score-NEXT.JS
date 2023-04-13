import Header from "@<components>/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#F5F5F5] justify-center flex items-center">
      <div className="flex justify-start items-center  flex-col max-w-[400px] border-[1px] border-gray-100 w-full h-full bg-white">
        <div className="h-[60px] sm:h-[50px] w-full bg-purple-600 shadow-sm text-white flex items-center justify-center font-bold text-lg">
          <p>Indian Premier League 2023</p>
        </div>
        <div className="px-8 mt-10 flex justify-start items-center w-full flex-col">
          <Link
            href="/liveScor"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 sm:py-3 py-5 w-full mx-5 sm:max-w-[300px] text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <p>Live Score</p>
          </Link>
          <Link
            href="/pointTable"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 sm:py-3 py-5 w-full mx-5 sm:max-w-[300px] text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <p>Point Table</p>
          </Link>

          <Link
            href="/teams"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 sm:py-3 py-5 w-full mx-5 sm:max-w-[300px] text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <p>IPL Teams</p>
          </Link>

          <Link
            href="/schedule"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 sm:py-3 py-5 w-full mx-5 sm:max-w-[300px] text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <p>Schedule</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
