"use client";
import { BackgroundBeamsDemo } from "@/components/Background/Index";
import { RecoilRoot } from "recoil";

const page = () => {
  return (
    <>
      <RecoilRoot>
        <BackgroundBeamsDemo />
      </RecoilRoot>
    </>
  )
}

export default page;
