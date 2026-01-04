"use client";

import Link from "next/link";
import Image from "next/image";
import { BiSolidOffer } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { RiCompass3Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { LuCircleUserRound } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const pathName = usePathname();
  const isLoggedIn = useAuth().checkAuthStatus();

  const navItems = [
    { name: "Explore", href: "/", icon: GoSearch },
    { name: "Offers", href: "/offers", icon: BiSolidOffer },
    { name: "Bookings", href: "/bookings", icon: RiCompass3Line },
    { name: "Wishlist", href: "/wishlist", icon: CiHeart },
    isLoggedIn
      ? { name: "Profile", href: "/profile", icon: LuCircleUserRound }
      : { name: "Sign In", href: "/signin", icon: LuCircleUserRound },
  ];

  return (
    <>
      {/* Desktop Navbar (top) - hidden on mobile */}
      <nav className="fixed top-0 left-0 right-0 bg-background text-primary-3 z-50 shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">
              <Image
                src="/assets/logo.svg"
                height={25}
                width={114}
                alt="spacez"
              />
            </div>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="md:hidden text-xl hover:cursor-pointer">
              <IoMdMenu />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navbar (bottom) - visible only on mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background z-50 border-t border-t-gray-200">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors hover:bg-gray-100 hover:rounded`}
            >
              <item.icon
                className={`w-6 h-6 ${pathName === item.href ? "text-primary-3" : "text-secondary-1"}`}
              />
              <span
                className={`text-xs mt-1 ${pathName === item.href ? "font-bold text-primary-2" : "text-secondary-1"}`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
