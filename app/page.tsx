import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F8F8F8] min-h-screen w-full font-sans no-scrollbar">
      <Navbar />
      {/* First Section */}
      <section className="w-full max-w-screen-2xl mx-auto flex items-center justify-between gap-10 px-[63px] py-[100px]" style={{height:332}}>
        <div className="flex-1 flex flex-col justify-center pl-4">
          <h1 className="text-[36px] font-bold leading-tight text-black mb-6">Basics Referee School</h1>
          <p className="text-lg text-zinc-700 mb-8 max-w-[600px]">
            Basics is a premier basketball officiating training program founded and directed by Violet Palmer—the first woman to officiate in the NBA. The program is staffed by experienced NCAA Division I women’s basketball officials and is designed to develop, mentor, and prepare officials for the highest levels of the game.
          </p>
          <div className="flex gap-4">
            <Button className="px-6 py-2 text-base font-medium">Register For Camp</Button>
            <Button variant="outline" className="px-6 py-2 text-base font-medium bg-[#1C5174] !text-white">Sign In</Button>
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center pr-8 ">
          <Image src="/firstdivimg.png" alt="Program Director" width={320} height={350} className="rounded-lg object-contain w-[377px] h-[320px] " />
        </div>
      </section>
      {/* Second Section */}
      <section className="w-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center gap-6 bg-[#757575]" style={{height:320}}>
        <div className="w-full max-w-4xl  rounded-xl flex flex-col items-center justify-center px-4 py-6 mx-auto" style={{background:'rgba(0,0,0,0)', boxSizing:'border-box'}}>
          <h2 className="text-2xl font-semibold text-white text-center mb-2">Learn from the Best</h2>
          <p className="text-lg text-white text-center mb-4">
            Learn from experienced officials who understand what it takes to succeed and are dedicated to preparing you for the next level.
          </p>
          <div className="bg-white rounded-xl flex items-center gap-6 p-4 w-full max-w-3xl shadow-md">
            <Image src="/seconddivimg2.png" alt="Camp Group" width={160} height={100} className="rounded-lg object-contain w-[160px] h-[150px]" />
            <div>
              <h3 className="text-xl font-bold text-black">Violet Palmer</h3>
              <a href="#" className="text-[#2196F3] text-sm font-medium">Program Director</a>
              <p className="text-zinc-700 mt-2 text-sm max-w-[600px]">
                Violet Palmer currently serves as the Supervisor of Women's Basketball Officials for the Big Sky, Big West, Mountain West, West Coast, and Western Athletic Conferences. She brings more than 20 years of NBA officiating experience to Basics, offering unmatched leadership, insight, and professional development to the next generation of officials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}