"use client";

import { Steps } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Dummies } from "../../components/Dummies";
import { StepItems } from "../../components/StepItems";

const ExperienceSection = () => {
  const [active, setActive] = useState(0);
  const parentRef = useRef(null);
  const [child1Ref, child1InView] = useInView();
  const [child2Ref, child2InView] = useInView();
  const [child3Ref, child3InView] = useInView();

  useEffect(() => {
    if (child1InView) {
      setActive(0);
    } else if (child2InView) {
      setActive(1);
    } else if (child3InView) {
      setActive(2);
    } else {
      setActive(0);
    }
  }, [child1InView, child2InView, child3InView]);

  return (
    <div>
      <div className="flex justify-between gap-5">
        {/* Hano remember the hieght of the div must be 100vh - the top size (ex: the header size). Murakoze : 😃  */}
        <div className="min-w-fit sticky top-0 h-full">
          <Steps direction="vertical" current={active} items={StepItems} />
        </div>
        <div className="flex flex-col parent-div" ref={parentRef}>
          <div className="bg-red-100 h-screen child-div" ref={child1Ref}>
            {Dummies[0]?.content}
          </div>
          <div className="bg-green-100 h-screen child-div" ref={child2Ref}>
            {Dummies[1]?.content}
          </div>
          <div className="bg-yellow-100 h-screen child-div" ref={child3Ref}>
            {Dummies[2]?.content}
          </div>
        </div>
      </div>

      <div className="bg-green-950">
        <span> {Dummies[3]?.content}</span>
      </div>
    </div>
  );
};

export default ExperienceSection;
