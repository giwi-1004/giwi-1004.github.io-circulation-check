"use client"

import Image from "next/image"

import importanceIllustration from "./importance-illustration.png"

export function ImportanceSection() {
  return (
    <section className="px-4 py-10 sm:px-5 sm:py-12">
      <div className="mx-auto min-w-0 max-w-[720px]">
        <h2 className="text-[20px] font-bold text-foreground mb-2 leading-[1.4]">
          순환계 질환은
          <br />
          생각보다 흔하게 발생합니다
        </h2>
        
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">
          그리고 문제는 <span className="text-foreground font-medium">치료비</span>입니다
        </p>

        <div className="relative w-full h-40 rounded-xl overflow-hidden">
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
