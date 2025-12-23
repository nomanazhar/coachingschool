import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full h-[60px] flex flex-col sm:flex-row items-center justify-between bg-white shadow z-50 px-4 sm:px-[55px] py-2 sm:py-[10px]">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Basics Referee School Logo" className="h-7 sm:h-8 w-auto" />
        <div className="flex flex-col">
          <span className="font-bold text-base sm:text-lg leading-none">BASICS</span>
          <span className="text-xs leading-none">Referee School</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto mt-2 sm:mt-0">
        <Button variant="ghost" className="font-medium w-full sm:w-auto">Login</Button>
        <Button className="font-medium w-full sm:w-auto">Register</Button>
      </div>
    </nav>
  );
}
