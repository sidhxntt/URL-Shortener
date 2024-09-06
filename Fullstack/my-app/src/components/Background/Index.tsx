"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "./Background";
import { PlaceholdersAndVanishInputDemo } from "../Input/Index";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import DoneAllTwoToneIcon from "@mui/icons-material/DoneAllTwoTone";
import { useRecoilState } from "recoil";
import { Result } from "@/recoil/atom";
import Link from "next/link";

export function BackgroundBeamsDemo() {
  const [isURL, setIsURL] = useRecoilState(Result);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      console.log("Text copied to clipboard");
      setTimeout(() => setIsCopied(false), 5000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <>
      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4 relative z-20">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Minify
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            <span className="font-extrabold">Minify</span> is a digital URL
            shortener that simplifies long web addresses into concise, shareable
            links, making it ideal for businesses and individuals seeking to
            streamline their digital marketing efforts.{" "}
          </p>
          {isURL && (
            <div className="flex justify-center p-4 relative z-20">
              <div className="flex gap-3">
                <Link className="hover:underline" href={isURL} target="_blank" rel="noopener noreferrer">
                  {isURL}
                </Link>
                <button
                  className="cursor-pointer"
                  onClick={() => handleCopyToClipboard(isURL)}
                >
                  {isCopied ? (
                    <Tooltip title="Copied">
                      <DoneAllTwoToneIcon fontSize="small" />
                    </Tooltip>
                  ) : (
                    <Tooltip title="Copy">
                      <ContentCopyIcon fontSize="small" />
                    </Tooltip>
                  )}
                </button>
              </div>
            </div>
          )}
          <PlaceholdersAndVanishInputDemo />
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
