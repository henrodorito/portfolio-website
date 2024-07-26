"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am currently pursuing a joint degree in{" "}
        <span className="font-medium">CS and Statistics</span> and a candidate
        for a <span className="font-medium">Masters in Comptuer Science</span>{" "}
        at Harvard University, where I have developed a strong foundation in
        machine learning, data analysis, and software engineering. As a{" "}
        <span className="font-medium">
          two-time Software Engineer Intern at Amazon
        </span>
        , I worked on deploying machine learning models and optimizing data
        pipelines to support large-scale projects. My research experience at{" "}
        <span className="font-medium">Harvard VisionLabs</span> and{" "}
        <span className="font-medium">Stony Brook HCI Lab</span> has a focus on
        computer vision, where I have investigated{" "}
        <span className="italic">texture-bias</span> in CNNs and created an{" "}
        <span className="italic">eye-gaze and voice based text correction</span>{" "}
        application for mobile devices. I am a quick learner with a genuine
        curiosity for exploring diverse perspectives, and I am passionate about
        leveraging technology to solve complex problems.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        singing in the Harvard Glee Club (aye!) with its acapella subset,
        Harvard Glee Club Lite, playing Ultimate Frisbee on the Harvard Bred
        Team, learning about religion and philosophy, and playing poker.
      </p>
    </motion.section>
  );
}
