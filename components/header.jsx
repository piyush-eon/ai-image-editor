"use client";

import React from "react";
import { LayoutDashboard, Sparkles } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import { Authenticated, Unauthenticated } from "convex/react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { isLoading } = useStoreUser();
  const path = usePathname();

  if (path.includes("/editor")) {
    return null; // Hide header on editor page
  }

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap">
      {/* Center - Glass Navigation Container */}

      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-10 md:mr-20">
          <Sparkles className="h-6 w-6 text-white" />
          <div className="text-lg font-bold text-white ">AI Editor</div>
        </Link>

        {path === "/" && (
          <div className="hidden md:flex space-x-6">
            <Link
              href="#features"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        )}

        {/* Auth Actions */}
        <div className="flex items-center gap-3 ml-10 md:ml-20">
          <Authenticated>
            <Link href="/dashboard">
              <div className="md:inline-flex items-center gap-2 backdrop-blur-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium text-sm">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:flex">Dashboard</span>
              </div>
            </Link>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 rounded-lg border border-white/20",
                  userButtonPopoverCard:
                    "shadow-xl backdrop-blur-md bg-slate-900/90 border border-white/20",
                  userPreviewMainIdentifier: "font-semibold text-white",
                },
              }}
              afterSignOutUrl="/"
            />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <div className="backdrop-blur-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium text-sm">
                Sign In
              </div>
            </SignInButton>

            <SignUpButton>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent hover:shadow-lg hover:shadow-blue-500/25 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium text-sm">
                Get Started
              </div>
            </SignUpButton>
          </Unauthenticated>
        </div>
        {isLoading && (
          <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
            <BarLoader width={"95%"} color="#06b6d4" />
          </div>
        )}
      </div>
    </header>
  );
}
