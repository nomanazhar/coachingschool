import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F8F8F8] min-h-screen w-full font-sans no-scrollbar overflow-x-hidden">
      <Navbar />
      {/* First Section */}
      <section className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 px-3 sm:px-6 md:px-[63px] py-6 sm:py-10 md:py-[100px]">
        <div className="flex-1 flex flex-col justify-center md:pl-4 w-full">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-[36px] font-bold leading-tight text-black mb-2 xs:mb-3 sm:mb-4 md:mb-6">Basics Referee School</h1>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-zinc-700 mb-2 xs:mb-4 sm:mb-6 md:mb-8 max-w-full md:max-w-[600px]">
            Basics is a premier basketball officiating training program founded and directed by Violet Palmer—the first woman to officiate in the NBA. The program is staffed by experienced NCAA Division I women’s basketball officials and is designed to develop, mentor, and prepare officials for the highest levels of the game.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full max-w-xs md:max-w-none">
            <Button className="px-3 xs:px-4 sm:px-6 py-2 text-xs xs:text-sm sm:text-base font-medium w-full sm:w-auto">Register For Camp</Button>
            <Button variant="outline" className="px-3 xs:px-4 sm:px-6 py-2 text-xs xs:text-sm sm:text-base font-medium bg-[#1C5174] !text-white w-full sm:w-auto">Sign In</Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end items-center w-full md:pr-8">
          <Image src="/firstdivimg.png" alt="Program Director" width={320} height={350} className="rounded-lg object-contain w-[120px] h-[90px] xs:w-[150px] xs:h-[120px] sm:w-[220px] sm:h-[180px] md:w-[320px] md:h-[250px] lg:w-[377px] lg:h-[320px]" />
        </div>
      </section>
      {/* Second Section */}
      <section className="w-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center gap-3 sm:gap-4 bg-[#757575] px-2 xs:px-3 sm:px-4 md:px-0">
        <div className="w-full max-w-4xl rounded-xl flex flex-col items-center justify-center px-2 xs:px-3 sm:px-4 py-3 xs:py-4 sm:py-6 mx-auto" style={{background:'rgba(0,0,0,0)', boxSizing:'border-box'}}>
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-white text-center mb-1 xs:mb-2 sm:mb-2">Learn from the Best</h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white text-center mb-1 xs:mb-2 sm:mb-4">
            Learn from experienced officials who understand what it takes to succeed and are dedicated to preparing you for the next level.
          </p>
          <div className="bg-white rounded-xl flex flex-col xs:flex-row items-center gap-1 xs:gap-2 sm:gap-4 md:gap-6 p-1 xs:p-2 sm:p-3 md:p-4 w-full max-w-3xl shadow-md">
            <Image src="/seconddivimg2.png" alt="Camp Group" width={160} height={100} className="rounded-lg object-contain w-[60px] h-[40px] xs:w-[80px] xs:h-[60px] sm:w-[120px] sm:h-[90px] md:w-[160px] md:h-[150px]" />
            <div className="w-full xs:w-auto">
              <h3 className="text-xs xs:text-base sm:text-lg md:text-xl font-bold text-black">Violet Palmer</h3>
              <a href="#" className="text-[#2196F3] text-xs sm:text-sm font-medium">Program Director</a>
              <p className="text-zinc-700 mt-2 text-xs xs:text-sm sm:text-sm md:text-base max-w-full sm:max-w-[600px]">
                Violet Palmer currently serves as the Supervisor of Women's Basketball Officials for the Big Sky, Big West, Mountain West, West Coast, and Western Athletic Conferences. She brings more than 20 years of NBA officiating experience to Basics, offering unmatched leadership, insight, and professional development to the next generation of officials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}