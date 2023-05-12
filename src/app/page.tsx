"use client";

import { Steps } from "antd";
import { useEffect, useRef, useState } from "react";
import { Dummies } from "../../components/Dummies";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const description = "This is a fuackin' dummy txt!";

  //Detect if the sh* is scrolling 😻  NDARENZE NDQ

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = (event: any) => {
      if (event.target === div1Ref.current) {
        console.log("div 1 scrolls");
        setCurrent(0);
      } else if (event.target === div2Ref.current) {
        console.log("div 2 scrolls");
        setCurrent(1);
      } else if (event.target === div3Ref.current) {
        console.log("div 3 scrolls");
        setCurrent(2);
      }
    };

    div1Ref.current.addEventListener("scroll", handleScroll);
    div2Ref.current.addEventListener("scroll", handleScroll);
    div3Ref.current.addEventListener("scroll", handleScroll);

    return () => {
      div1Ref.current.removeEventListener("scroll", handleScroll);
      div2Ref.current.removeEventListener("scroll", handleScroll);
      div3Ref.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-between gap-4">
      <div className="min-w-fit sticky top-0 h-full">
        <Steps
          current={current}
          direction="vertical"
          items={[
            {
              title: "Step 1",
              description,
            },
            {
              title: "Step 2",
              description,
            },
            {
              title: "Step 3",
              description,
            },
          ]}
        />
      </div>
      3
      <div
        className="bg-red-500"
        ref={div1Ref}
        style={{ height: "500px", overflow: "scroll" }}
      >
        {Dummies[0]?.content}
      </div>
      <div
        className="bg-green-500"
        ref={div2Ref}
        style={{ height: "500px", overflow: "scroll" }}
      >
        {Dummies[1]?.content}
      </div>
      <div
        className="bg-yellow-400"
        ref={div3Ref}
        style={{ height: "500px", overflow: "scroll" }}
      >
        {Dummies[2]?.content}
      </div>
    </div>
  );
}
