"use client";

import { motion } from "motion/react";
import React from "react";

type ContainerType = {
  gridOne: React.ReactNode;
  gridTwo: React.ReactNode;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
} as const;

export const Container = ({ gridOne, gridTwo }: ContainerType) => {
  return (
    <motion.div
      className="relative grid grid-cols-1 xl:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        className="p-6 xl:sticky xl:h-fit xl:top-0"
        variants={itemVariants}
      >
        {gridOne}
      </motion.section>
      <motion.section
        className="p-6 overflow-y-auto max-h-full"
        variants={itemVariants}
      >
        <div className="space-y-6">{gridTwo}</div>
      </motion.section>
    </motion.div>
  );
};
