"use client";

import { Anchor } from "antd";
import { Dummies } from "../../components/Dummies";

export default function Home() {
  return (
    <div className="bg-gray-400 flex justify-between gap-4 ">
      <div>
        <Anchor
          items={[
            {
              key: "part-1",
              href: "#part-1",
              title: "Step ya 1",
            },
            {
              key: "part-2",
              href: "#part-2",
              title: "Step ya 2",
            },
            {
              key: "part-3",
              href: "#part-3",
              title: "Step ya 3",
            },
          ]}
        />
      </div>

      <div className="h-full">
        <div id="part-1" className="bg-orange-200">
          {Dummies[0]?.content}
        </div>
        <div id="part-2" className="bg-green-200">
          {Dummies[1]?.content}
        </div>
        <div id="part-3" className="bg-blue-300">
          {Dummies[2]?.content}
        </div>
      </div>
    </div>
  );
}
