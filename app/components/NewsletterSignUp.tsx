"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { GridWrapper } from "./GridWrapper";
import { createContact } from "@/app/db/actions";

interface NewsletterSignUpProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

interface FormState {
  email: string;
  message: string;
  isSuccess: boolean;
  isLoading: boolean;
}

export function NewsletterSignUp({
  title = "Subscribe to my newsletter",
  description = "A periodic update about my life, recent projects, how-tos, and discoveries.",
  buttonText = "Subscribe",
}: NewsletterSignUpProps) {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    message: "",
    isSuccess: false,
    isLoading: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState((prev) => ({
      ...prev,
      message: "",
      isSuccess: false,
      isLoading: true,
    }));

    if (!formState.email) {
      setFormState((prev) => ({
        ...prev,
        message: "Please provide an email address.",
        isLoading: false,
      }));
      return;
    }

    try {
      const result = await createContact(formState.email);

      if (result.success) {
        setFormState((prev) => ({
          ...prev,
          message: "You're signed up!",
          isSuccess: true,
          email: "",
        }));
      } else {
        setFormState((prev) => ({
          ...prev,
          message: "Something went wrong. :(",
          isSuccess: false,
        }));
      }
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        message: "Something went wrong. :(",
        isSuccess: false,
      }));
      console.error(error);
    } finally {
      setFormState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <div className="relative pb-16">
      <GridWrapper>
        <div className="relative overflow-x-clip">
          <div className="drama-shadow rounded-2xl bg-dark-primary p-14 md:p-[100px]">
            {/* Lines */}
            <div className="absolute left-0 right-0 top-[34px] z-10 h-px w-full bg-zinc-600 md:top-[48px]"></div>
            <div className="absolute bottom-0 right-[34px] top-0 z-10 h-full w-px bg-zinc-600 md:right-[48px]"></div>
            <div className="absolute bottom-[34px] left-0 right-0 z-10 h-px w-full bg-zinc-600 md:bottom-[48px]"></div>
            <div className="absolute bottom-0 left-[34px] top-0 z-10 h-full w-px bg-zinc-600 md:left-[48px]"></div>

            {/* Top Right Cross */}
            <div className="absolute right-[44.5px] top-[48px] z-20 hidden h-px w-2 bg-zinc-300 md:block"></div>
            <div className="absolute right-[48px] top-[44.5px] z-20 hidden h-2 w-px bg-zinc-300 md:block"></div>
            {/* Top Left Cross */}
            <div className="absolute left-[44.5px] right-0 top-[48px] z-20 hidden h-px w-2 bg-zinc-300 md:block"></div>
            <div className="absolute left-[48px] right-0 top-[44.5px] z-20 hidden h-2 w-px bg-zinc-300 md:block"></div>
            {/* Bottom Left Cross */}
            <div className="absolute bottom-[48px] left-[44.5px] right-0 z-20 hidden h-px w-2 bg-zinc-300 md:block"></div>
            <div className="absolute bottom-[44.5px] left-[48px] right-0 z-20 hidden h-2 w-px bg-zinc-300 md:block"></div>
            {/* Bottom Right Cross */}
            <div className="absolute bottom-[48px] right-[44.5px] z-20 hidden h-px w-2 bg-zinc-300 md:block"></div>
            <div className="absolute bottom-[44.5px] right-[48px] z-20 hidden h-2 w-px bg-zinc-300 md:block"></div>

            <h2 className="mb-4 text-3xl font-medium text-slate-50">{title}</h2>
            <p className="z-50 mb-8 max-w-[336px] text-base leading-8 text-gray-300 md:mb-12">
              {description}
            </p>
            <div className="z-50 mb-4 space-y-4">
              <form
                onSubmit={handleSubmit}
                className="relative md:inline-block"
              >
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="bobloblaw@gmail.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full rounded-full border border-gray-400 bg-transparent px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-2 focus:ring-offset-dark-primary md:w-[425px]"
                  disabled={formState.isLoading}
                />
                <button
                  type="submit"
                  className="group absolute right-1 top-1 isolate inline-flex h-[42px] items-center justify-center overflow-hidden rounded-full bg-slate-100 px-4 py-2.5 text-left text-sm font-medium text-slate-900 shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] ring-1 ring-white transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:opacity-50 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-full after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay hover:before:opacity-100"
                  disabled={formState.isLoading}
                >
                  {formState.isLoading ? "Loading..." : buttonText}
                </button>
              </form>
              {/* Set minimum height to prevent layout shift */}
              <div className="min-h-[15px] md:min-h-[30px]">
                {formState.message && (
                  <p
                    className={`text-sm ${
                      formState.isSuccess ? "text-indigo-300" : "text-rose-400"
                    }`}
                  >
                    {formState.message}
                  </p>
                )}
              </div>
            </div>
            <p className="text-base text-gray-300">
              <span className="font-bold text-white">NO SPAM.</span> I never
              send spam. You can unsubscribe at any time!
            </p>
            <svg
              className="absolute -top-8 right-0 z-10 hidden lg:block"
              width="170"
              height="142"
              viewBox="0 0 170 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dddd_3_63)">
                <rect
                  width="144"
                  height="96"
                  rx="8"
                  transform="matrix(1 0 0 -1 13 99)"
                  fill="url(#paint0_linear_3_63)"
                />
                <rect
                  x="-0.5"
                  y="0.5"
                  width="145"
                  height="97"
                  rx="8.5"
                  transform="matrix(1 0 0 -1 13 100)"
                  stroke="url(#paint1_linear_3_63)"
                />
              </g>
              <mask
                id="mask0_3_63"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="13"
                y="3"
                width="144"
                height="96"
              >
                <rect
                  x="13"
                  y="3"
                  width="144"
                  height="96"
                  rx="8"
                  fill="black"
                />
              </mask>
              <g mask="url(#mask0_3_63)">
                <g opacity="0.4">
                  <g filter="url(#filter1_f_3_63)">
                    <path
                      d="M16 99L154 99L93.5551 44.6872C90.5309 41.9698 89.0187 40.611 87.3091 40.0956C85.8032 39.6416 84.1968 39.6416 82.6909 40.0956C80.9813 40.611 79.4691 41.9698 76.4449 44.6872L16 99Z"
                      fill="#334155"
                      fill-opacity="0.4"
                    />
                  </g>
                  <g filter="url(#filter2_f_3_63)">
                    <path
                      d="M24 99L146 99L94.5281 41.6215C91.2296 37.9444 89.5803 36.1059 87.6365 35.4274C85.9294 34.8315 84.0706 34.8315 82.3635 35.4274C80.4197 36.1059 78.7704 37.9444 75.4719 41.6215L24 99Z"
                      fill="#334155"
                      fill-opacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter3_f_3_63)">
                    <path
                      d="M16 99L154 99L94.3617 35.0401C91.1077 31.5502 89.4806 29.8053 87.5783 29.1576C85.9065 28.5885 84.0935 28.5885 82.4217 29.1576C80.5194 29.8053 78.8924 31.5502 75.6383 35.0401L16 99Z"
                      fill="#334155"
                      fill-opacity="0.1"
                    />
                  </g>
                </g>
                <g filter="url(#filter4_i_3_63)">
                  <path
                    d="M13 99.0002L157 99.0002L93.3523 44.1923C90.389 41.6405 88.9073 40.3647 87.2444 39.8786C85.7788 39.4502 84.2212 39.4502 82.7556 39.8786C81.0927 40.3647 79.611 41.6405 76.6477 44.1923L13 99.0002Z"
                    fill="url(#paint2_linear_3_63)"
                  />
                </g>
                <path
                  d="M14.5 97L76.6546 43.6617C79.616 41.1203 81.0967 39.8496 82.7575 39.3661C84.2211 38.9399 85.7761 38.9408 87.2393 39.3686C88.8994 39.8541 90.3787 41.1264 93.3373 43.6712L156.5 98"
                  stroke="#475569"
                  stroke-opacity="0.06"
                />
                <g style={{ mixBlendMode: "multiply" }} opacity="0.7">
                  <g filter="url(#filter5_f_3_63)">
                    <path
                      d="M16 3L154 3L93.5551 57.3128C90.5309 60.0302 89.0187 61.389 87.3091 61.9044C85.8032 62.3584 84.1968 62.3584 82.6909 61.9044C80.9813 61.389 79.4691 60.0302 76.4449 57.3128L16 3Z"
                      fill="#334155"
                      fill-opacity="0.4"
                    />
                  </g>
                  <g filter="url(#filter6_f_3_63)">
                    <path
                      d="M24 3L146 3L94.5281 60.3785C91.2296 64.0556 89.5803 65.8941 87.6365 66.5726C85.9294 67.1685 84.0706 67.1685 82.3635 66.5726C80.4197 65.8941 78.7704 64.0556 75.4719 60.3785L24 3Z"
                      fill="#334155"
                      fill-opacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter7_f_3_63)">
                    <path
                      d="M16 3L154 3L94.3617 66.9599C91.1077 70.4498 89.4806 72.1947 87.5783 72.8424C85.9065 73.4115 84.0935 73.4115 82.4217 72.8424C80.5194 72.1947 78.8924 70.4498 75.6383 66.9599L16 3Z"
                      fill="#334155"
                      fill-opacity="0.1"
                    />
                  </g>
                  <g filter="url(#filter8_f_3_63)">
                    <path
                      d="M21 3L149 3L89.4282 68.1567C87.0493 70.7585 82.9507 70.7585 80.5718 68.1567L21 3Z"
                      fill="#334155"
                      fill-opacity="0.05"
                    />
                  </g>
                  <g filter="url(#filter9_f_3_63)">
                    <path
                      d="M15 2L155 2L89.0827 63.2089C86.7806 65.3466 83.2194 65.3466 80.9173 63.2089L15 2Z"
                      fill="#334155"
                      fill-opacity="0.1"
                    />
                  </g>
                </g>
                <path
                  d="M14.5 5L76.6546 58.3383C79.616 60.8797 81.0967 62.1504 82.7575 62.6339C84.2211 63.0601 85.7761 63.0592 87.2393 62.6314C88.8994 62.1459 90.3787 60.8736 93.3373 58.3288L156.5 4"
                  stroke="#475569"
                  stroke-opacity="0.06"
                />
                <g filter="url(#filter10_i_3_63)">
                  <path
                    d="M13 3L157 3L93.3523 57.8078C90.389 60.3595 88.9073 61.6354 87.2444 62.1214C85.7788 62.5498 84.2212 62.5498 82.7556 62.1214C81.0927 61.6354 79.611 60.3595 76.6477 57.8077L13 3Z"
                    fill="url(#paint3_linear_3_63)"
                  />
                </g>
                <g filter="url(#filter11_f_3_63)">
                  <rect
                    x="13"
                    y="3"
                    width="144"
                    height="96"
                    stroke="url(#paint4_linear_3_63)"
                    stroke-width="16"
                  />
                </g>
                <rect
                  x="13.5"
                  y="3.5"
                  width="143"
                  height="95"
                  rx="7.5"
                  stroke="white"
                  stroke-opacity="0.4"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dddd_3_63"
                  x="0"
                  y="0"
                  width="170"
                  height="142"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.117647 0 0 0 0 0.160784 0 0 0 0 0.231373 0 0 0 0.08 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3_63"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="4" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.117647 0 0 0 0 0.160784 0 0 0 0 0.231373 0 0 0 0.07 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_3_63"
                    result="effect2_dropShadow_3_63"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="17" />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.117647 0 0 0 0 0.160784 0 0 0 0 0.231373 0 0 0 0.04 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_3_63"
                    result="effect3_dropShadow_3_63"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="30" />
                  <feGaussianBlur stdDeviation="6" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.117647 0 0 0 0 0.160784 0 0 0 0 0.231373 0 0 0 0.01 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect3_dropShadow_3_63"
                    result="effect4_dropShadow_3_63"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect4_dropShadow_3_63"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_f_3_63"
                  x="12"
                  y="35.7551"
                  width="146"
                  height="67.2449"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_3_63"
                  />
                </filter>
                <filter
                  id="filter2_f_3_63"
                  x="12"
                  y="22.9805"
                  width="146"
                  height="88.0195"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="6"
                    result="effect1_foregroundBlur_3_63"
                  />
                </filter>
                <filter
                  id="filter3_f_3_63"
                  x="-8"
                  y="4.73079"
                  width="186"
                  height="118.269"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="12"
                    result="effect1_foregroundBlur_3_63"
                  />
                </filter>
                <filter
                  id="filter4_i_3_63"
                  x="13"
                  y="39.5573"
                  width="144"
                  height="59.4429"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_3_63"
                  />
                </filter>
                <filter
                  id="filter5_f_3_63"
                  x="12"
                  y="-1"
                  width="146"
                  height="67.2449"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_3_63"
                  />
                </filter>
                <filter
                  id="filter6_f_3_63"
                  x="12"
                  y="-9"
                  width="146"
                  height="88.0195"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="6"
                    result="effect1_foregroundBlur_3_63"
                  />
                </filter>
                <filter
                  id="filter7_f_3_63"
                  x="-8"
                  y="-21"
                  width="186"
                  height="118.269"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="12"
                    result="effect1_foregroundBlur_3_63"
                  />
                </filter>
                <filter
                  id="filter8_f_3_63"
                  x="11"
                  y="-7"
                  width="148"
                  height="87.1081"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="5"
                    result="effect1_foregroundBlur_3_63"
                  />
                </filter>
                <filter
                  id="filter9_f_3_63"
                  x="11"
                  y="-2"
                  width="148"
                  height="70.8122"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_3_63"
                  />
                </filter>
                <filter
                  id="filter10_i_3_63"
                  x="13"
                  y="3"
                  width="144"
                  height="59.4427"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_3_63"
                  />
                </filter>
                <filter
                  id="filter11_f_3_63"
                  x="-3"
                  y="-13"
                  width="176"
                  height="128"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="4"
                    result="effect1_foregroundBlur_3_63"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_3_63"
                  x1="72"
                  y1="0"
                  x2="72"
                  y2="96"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.130208" stop-color="#EEF0F1" />
                  <stop offset="0.848958" stop-color="#F9FAFA" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3_63"
                  x1="72"
                  y1="0"
                  x2="72"
                  y2="96"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#475569" stop-opacity="0.06" />
                  <stop offset="1" stop-color="#475569" stop-opacity="0.04" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_3_63"
                  x1="85"
                  y1="37"
                  x2="85"
                  y2="99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.524194" stop-color="#F4F5F6" />
                  <stop offset="1" stop-color="#EEF0F1" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_3_63"
                  x1="85"
                  y1="3"
                  x2="85"
                  y2="65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.25" stop-color="#FAFAFB" />
                  <stop offset="1" stop-color="#F4F5F6" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_3_63"
                  x1="85"
                  y1="3.89719"
                  x2="85"
                  y2="99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F9FAFA" />
                  <stop offset="0.693396" stop-color="#EEF0F1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </GridWrapper>
      <span className="absolute bottom-6 left-8">
        <svg
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.24"
            d="M0.827592 6.88352V6.01349C1.39104 6.01349 1.7838 5.89915 2.00586 5.67045C2.23124 5.43845 2.34393 5.06226 2.34393 4.5419V3.27415C2.34393 2.71401 2.41353 2.25497 2.55273 1.89702C2.69525 1.53906 2.9024 1.26065 3.17418 1.06179C3.44596 0.862926 3.7774 0.725378 4.1685 0.649147C4.5596 0.569602 5.00373 0.52983 5.50089 0.52983V1.91193C5.10979 1.91193 4.80984 1.96662 4.60103 2.07599C4.39222 2.18205 4.24805 2.34612 4.1685 2.56818C4.09227 2.79025 4.05415 3.07363 4.05415 3.41832V5.04901C4.05415 5.30421 4.01107 5.54285 3.92489 5.76491C3.83872 5.98698 3.68129 6.18253 3.45259 6.35156C3.2239 6.51728 2.89743 6.6482 2.47319 6.74432C2.05226 6.83712 1.50373 6.88352 0.827592 6.88352ZM5.50089 13.1626C5.00373 13.1626 4.5596 13.1229 4.1685 13.0433C3.7774 12.9671 3.44596 12.8295 3.17418 12.6307C2.9024 12.4318 2.69525 12.1534 2.55273 11.7955C2.41353 11.4375 2.34393 10.9785 2.34393 10.4183V9.15554C2.34393 8.63518 2.23124 8.26065 2.00586 8.03196C1.7838 7.79995 1.39104 7.68395 0.827592 7.68395V6.81392C1.50373 6.81392 2.05226 6.86198 2.47319 6.9581C2.89743 7.0509 3.2239 7.18182 3.45259 7.35085C3.68129 7.51657 3.83872 7.71046 3.92489 7.93253C4.01107 8.15459 4.05415 8.39157 4.05415 8.64347V10.2741C4.05415 10.6188 4.09227 10.9022 4.1685 11.1243C4.24805 11.3464 4.39222 11.5121 4.60103 11.6214C4.80984 11.7308 5.10979 11.7855 5.50089 11.7855V13.1626ZM0.827592 7.68395V6.01349H2.40359V7.68395H0.827592ZM14.4286 0.340908L11.1474 12.5312H9.57138L12.8526 0.340908H14.4286ZM23.1712 6.81392V7.68395C22.6077 7.68395 22.2133 7.79995 21.9879 8.03196C21.7659 8.26065 21.6548 8.63518 21.6548 9.15554V10.4183C21.6548 10.9785 21.5836 11.4375 21.4411 11.7955C21.3018 12.1534 21.0964 12.4318 20.8246 12.6307C20.5528 12.8295 20.2214 12.9671 19.8303 13.0433C19.4392 13.1229 18.995 13.1626 18.4979 13.1626V11.7855C18.889 11.7855 19.1889 11.7308 19.3977 11.6214C19.6065 11.5121 19.7491 11.3464 19.8253 11.1243C19.9048 10.9022 19.9446 10.6188 19.9446 10.2741V8.64347C19.9446 8.39157 19.9877 8.15459 20.0739 7.93253C20.16 7.71046 20.3175 7.51657 20.5462 7.35085C20.7749 7.18182 21.0997 7.0509 21.5206 6.9581C21.9448 6.86198 22.495 6.81392 23.1712 6.81392ZM18.4979 0.52983C18.995 0.52983 19.4392 0.569602 19.8303 0.649147C20.2214 0.725378 20.5528 0.862926 20.8246 1.06179C21.0964 1.26065 21.3018 1.53906 21.4411 1.89702C21.5836 2.25497 21.6548 2.71401 21.6548 3.27415V4.5419C21.6548 5.06226 21.7659 5.43845 21.9879 5.67045C22.2133 5.89915 22.6077 6.01349 23.1712 6.01349V6.88352C22.495 6.88352 21.9448 6.83712 21.5206 6.74432C21.0997 6.6482 20.7749 6.51728 20.5462 6.35156C20.3175 6.18253 20.16 5.98698 20.0739 5.76491C19.9877 5.54285 19.9446 5.30421 19.9446 5.04901V3.41832C19.9446 3.07363 19.9048 2.79025 19.8253 2.56818C19.7491 2.34612 19.6065 2.18205 19.3977 2.07599C19.1889 1.96662 18.889 1.91193 18.4979 1.91193V0.52983ZM23.1712 6.01349V7.68395H21.5952V6.01349H23.1712Z"
            fill="#A5AEB8"
          />
        </svg>
      </span>
      <span className="absolute bottom-6 right-8">
        <svg
          width="24"
          height="8"
          viewBox="0 0 24 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_185_3210)">
            <rect width="24" height="8" rx="1" fill="#EDEEF2" />
          </g>
          <defs>
            <filter
              id="filter0_i_185_3210"
              x="0"
              y="0"
              width="24"
              height="9.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="0.75" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_185_3210"
              />
            </filter>
          </defs>
        </svg>
      </span>
    </div>
  );
}
