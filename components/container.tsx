"use client";

import { motion, useReducedMotion } from "motion/react";
import type React from "react";

type ContainerType = {
  gridOne: React.ReactNode;
  gridTwo: React.ReactNode;
};

export const Container = ({ gridOne, gridTwo }: ContainerType) => {
  const shouldReducedMotion = useReducedMotion();

  if (shouldReducedMotion) {
    return (
      <div className="relative grid grid-cols-1 xl:grid-cols-2">
        <section className="p-6 xl:sticky xl:h-fit xl:top-0">{gridOne}</section>
        <section className="p-6 overflow-y-auto max-h-full no-scrollbar">
          <div className="space-y-6">{gridTwo}</div>
        </section>
      </div>
    );
  }

  return (
    <motion.div
      className="relative grid grid-cols-1 xl:grid-cols-2"
      initial={{ opacity: 0, filter: "blur(4px)", translateY: -8 }}
      transition={{ delay: 0.1, duration: 0.25 }}
      viewport={{ once: true }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
    >
      <motion.section className="p-6 xl:sticky xl:h-fit xl:top-0">
        {gridOne}
      </motion.section>
      <motion.section className="p-6 overflow-y-auto max-h-full no-scrollbar">
        <div className="space-y-6">{gridTwo}</div>
      </motion.section>
    </motion.div>
  );
};
