"use client"

import Image from "next/image"

import importanceIllustration from "./importance-illustration.png"

export function ImportanceSection() {
  return (
    <section className="bg-[#FFFFFF] px-5 py-10 sm:px-5 sm:py-10">
      <div className="mx-auto min-w-0 max-w-[720px]">
        <h2 className="mb-2 text-[20px] font-bold leading-[1.4] text-foreground">
          순환계 질환은
          <br />
          생각보다 흔하게 발생합니다
        </h2>

        <p className="mb-3 text-[15px] leading-relaxed text-muted-foreground">
          그리고 문제는 <span className="font-medium text-foreground">치료비</span>입니다
        </p>

        <div className="relative h-40 w-full overflow-hidden rounded-xl">
          <Image
            src={importanceIllustration}
            alt="두통으로 고통스러워하는 여성"
            fill
            className="object-cover"
            sizes="(max-width: 720px) 100vw, 720px"
          />
        </div>
      </div>
    </section>
  )
}
