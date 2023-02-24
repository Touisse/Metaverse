"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  NewFeatures,
  TypingText,
  ExploreCard,
  TitleText,
  StartSteps,
} from "../components";
import { newFeatures } from "../constants";

import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className={`flex-[0.75]  flex flex-col justify-center`}
      >
        <TypingText title="| What's New" />
        <TitleText title={<>What's new about Metaversus</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={` flex-1 ${styles.flexCenter} `}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
