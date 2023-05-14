"use client";

import { logos } from "@/app/assets/logo";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/context";
import { CorrectAnswer, IncorrectAnswer } from "@/components/Modal";
import Link from "next/link";

const page = () => {
  const [guess, setGuess] = useState<string>("");

  const { setIncorrectModalOpen, setCorrectModalOpen, softTrigger } =
    useAppContext();

  const [ranLogo, setRanLogo] = useState<string[]>([""]);
  useEffect(() => {
    setRanLogo(logos[Math.floor(Math.random() * logos.length)]);
  }, [softTrigger]);

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let formattedGuess: string = guess
      .toLowerCase()
      .replace(" ", "")
      .replace("'", "");

    if (formattedGuess === ranLogo[1]) {
      console.log("correct");
      setCorrectModalOpen(true);
    } else {
      console.log("wrong");
      setIncorrectModalOpen(true);
    }
    setGuess("");
  };

  const handleChange = (event: any) => {
    setGuess(event.target.value);
  };

  return (
    <div className="w-screen h-screen grid place-content-center place-items-center prose-xl text-white font-[karla]">
      <Link className="fixed top-5 left-5" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      </Link>
      <h1 className="text-center">Guess this logo!</h1>
      <div className="flex flex-col items-center justify-items-center content-center justify-center w-96 h-96 border-zinc-600 rounded-xl rounded-bl-none rounded-br-none bg-white border p-[2rem]">
        <img
          src={ranLogo[0]}
          alt="logo"
          width={"30%"}
          className="m-0 p-0 w-max h-max "
        />
      </div>
      <div>
        <div className="relative mb-4 mt-2 w-96">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
            value={guess}
          />
        </div>
      </div>
      <button
        className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-300 dark:bg-slate-700 dark:text-slate-200 dark:ring-offset-slate-900 dark:border-transparent text-center"
        onClick={handleClick}
      >
        Check Guess
      </button>
      <CorrectAnswer />
      <IncorrectAnswer correctAnswer={ranLogo[1]} />
    </div>
  );
};

export default page;
