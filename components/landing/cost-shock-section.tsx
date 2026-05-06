"use client"

import Image from "next/image"
import treatmentImage from "@/치료비.png"

export function CostShockSection() {
  return (
    <section className="overflow-x-hidden bg-[#F7F7F7] px-4 pb-1.5 pt-4 sm:px-5 sm:pb-3 sm:pt-8">
      <div className="mx-auto min-w-0 max-w-[720px]">
        <p className="mb-2.5 text-center text-[20px] font-bold leading-[1.32] text-foreground sm:mb-5 sm:text-[22px]">
          실제 치료 과정에서는
          <br />
          <span className="text-[15px] font-normal leading-[1.45] text-[#525252] sm:text-[17px]">
            생각보다 큰 치료비와
            <br />
            반복 치료 상황이 이어질 수 있습니다
          </span>
        </p>
        <Image
          src={treatmentImage}
          alt="치료비 안내 이미지"
          className="my-3 block h-auto w-full max-w-full rounded-[24px] object-contain sm:my-6"
          sizes="(max-width: 720px) calc(100vw - 2rem), 720px"
          priority={false}
        />

        <p className="mt-1.5 text-center text-[18px] font-bold leading-[1.32] text-foreground sm:mt-2 sm:text-[21px]">
          이런 치료 상황이 걱정된다면
          <span className="mt-1.5 block text-[15px] font-normal leading-[1.38] text-[#525252] sm:text-[16px] sm:leading-[1.45]">
            내 보험 구조도
            <br />
            한 번 점검해보세요
          </span>
        </p>

        <p className="mt-1 text-center text-[13px] font-medium leading-[1.34] text-[#525252] sm:mt-1.5 sm:text-[15px]">
          1분이면 충분합니다
        </p>
      </div>
    </section>
  )
}
