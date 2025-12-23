
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header
        className="w-full flex items-center justify-between px-8 py-3 border-b"
        style={{
          background: "var(--header-bg)",
          borderColor: "var(--header-border)",
        }}
      >
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Basics Referee School Logo" width={48} height={48} className="rounded" />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg tracking-tight">BASICS</span>
            <span className="text-xs" style={{ color: "var(--hero-desc)" }}>Referee School</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" className="px-5 py-2 text-sm font-medium" style={{ background: "var(--button-ghost-bg)", color: "var(--button-bg)" }}>Login</Button>
          <Button className="px-5 py-2 text-sm font-medium" style={{ background: "var(--button-bg)", color: "var(--button-text)" }}>Register</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16" style={{ background: "var(--background)" }}>
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 leading-tight animate-fade-in" style={{ color: "var(--hero-title)" }}>Basics Referee School</h1>
          <p className="text-lg mb-6 animate-fade-in delay-100" style={{ color: "var(--hero-desc)" }}>
            Basics is a premier basketball officiating training program founded and directed by Violet Palmer—
            the first woman to officiate in the NBA. The program is staffed by experienced NCAA Division I
            women’s basketball officials and is designed to develop, mentor, and prepare officials for the
            highest levels of the game.
          </p>
          <div className="flex gap-3 animate-fade-in delay-200">
            <Button className="px-4 py-2 shadow hover:scale-105 transition-transform" style={{ background: "var(--button-bg)", color: "var(--button-text)", borderRadius: "var(--card-radius)" }}>Register For Camp</Button>
            <Button variant="outline" className="px-4 py-2 transition-colors" style={{ background: "var(--button-outline-bg)", color: "var(--button-bg)", border: `1px solid var(--button-outline-border)`, borderRadius: "var(--card-radius)" }}>Sign In</Button>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:ml-12 animate-fade-in delay-300">
          <Image src="/violet-palmer.jpg" alt="Violet Palmer" width={260} height={320} className="object-cover" style={{ borderRadius: "var(--image-radius)", boxShadow: "var(--card-shadow)" }} />
        </div>
      </section>

      {/* Learn from the Best Section */}
      <section className="py-16 px-4 md:px-0 animate-fade-in delay-400" style={{ background: "var(--section-dark-bg)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: "var(--section-dark-title)" }}>Learn from the Best</h2>
          <p className="mb-8 text-lg" style={{ color: "var(--section-dark-desc)" }}>Learn from experienced officials who understand what it takes to succeed and are dedicated to preparing you for the next level.</p>
          <div className="flex items-center p-6 max-w-2xl mx-auto" style={{ background: "var(--card-bg)", borderRadius: "var(--card-radius)", boxShadow: "var(--card-shadow)" }}>
            <Image src="/camp-group.jpg" alt="Camp Group" width={120} height={80} className="object-cover mr-6" style={{ borderRadius: "var(--image-radius)" }} />
            <div className="text-left">
              <div className="font-bold text-lg">Violet Palmer</div>
              <div className="text-blue-700 font-medium text-sm mb-1">Program Director</div>
              <div className="text-sm" style={{ color: "var(--foreground)" }}>
                Violet Palmer currently serves as the Supervisor of Women’s Basketball Officials for the Big Sky, Big West, Mountain West, West Coast, and Western Athletic Conferences. She brings more than 20 years of NBA officiating experience to Basics, offering unmatched leadership, insight, and professional development to the next generation of officials.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
