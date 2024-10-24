"use client";

import supabase from "@/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import { FaBell, FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";


function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleClickLogOut = () => supabase.auth.signOut();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  // const handleClickProfile = () => {
  // 	return (
  // 		<div>
  // 			<button onClick={handleClickLogOut}>로그아웃</button>
  // 		</div>
  // 	);
  // };



  return (
    <header className="px-[calc((100%-1500px)/2)] h-20 border-b flex flex-row items-center bg-[#433E49] text-white">
      <div className="ml-5 font-bold text-5xl text-center leading-4">
        <Link href="/">ZING</Link>
      </div>

      <div className="ml-auto flex flex-row items-center gap-x-5 font-medium text-md ">
        <div className="w-64 h-8 bg-[#e0dde4]/75 rounded-full flex flex-row items-center justify-around">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              name="search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-48 bg-transparent outline-none text-black"
            />
          </form>

          <Link href={`/search?q=${encodeURIComponent(searchTerm.trim())}`}>
            <FaSearch />
          </Link>

        </div>

        <Link href={"/inbox"}>
          <FaBell className="text-3xl" />
        </Link>

        {isLoggedIn ? (
          <Link
            href={"/my-profile"}
            className="w-10 h-10 bg-white rounded-full"
          >
            <img src="" alt="" />
          </Link>
        ) : (
          <div>
            <Link
              href={"/sign-up"}
              className="font-medium text-base rounded-[15px] border border-white py-1.5 px-2.5"
            >
              로그인/회원가입
            </Link>
          </div>
        )}

        <button onClick={handleClickLogOut}>
          <TiThMenu className="text-4xl" />
        </button>
      </div>
    </header>
  );
}

export default Header;
