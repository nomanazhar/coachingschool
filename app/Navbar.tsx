import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full h-[71px] flex items-center justify-between bg-white shadow z-50 px-[55px] py-[10px]">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Basics Referee School Logo" className="h-8 w-auto" />
        <div className="flex flex-col">
          <span className="font-bold text-lg leading-none">BASICS</span>
          <span className="text-xs leading-none">Referee School</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" className="font-medium">Login</Button>
        <Button className="font-medium">Register</Button>
      </div>
    </nav>
  );
}
