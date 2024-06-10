'use client'
import Image from "next/image"
import { CATEGORY_TAGS, WEB } from "@/lib/tags";
import clsx from "clsx";
import BrowserFrame from "./BrowserFrame";
import { Suspense } from "react";
import { useRouter } from "next/navigation";

// function hasSymbol(obj, symbol) {
//   return !!Object.getOwnPropertySymbols(obj).find((item) => item === symbol)
// }

export default function Card ({ data: { name, image, date, tags, orientation, href }, children, className, scale = 1 }) {
  const router = useRouter()
  const imageSize = Math.round((orientation === 'landscape' ? 400 : 250) * scale);
  
  return (
    <div className={clsx("relative w-full text-sm text-muted-foreground bg-secondary rounded-sm [&:hover_.links]:opacity-100 [&:hover_.links]:pointer-events-auto", className)}>
      <div className="flex justify-between px-3 pt-2">
        <div className="">{name}</div>
        <div className="">{date}</div>
      </div>
      <div className={clsx("flex p-2 transition", {
        // 'cursor-pointer': href,
        'hover:scale-95 will-change-transform cursor-pointer': href,
      })} onClick={e => href && router.push(href)}>
        <Suspense>
          {tags && tags.includes(WEB) 
            ? (
                <BrowserFrame className="m-auto" blur={<Image src={image} sizes="50px" alt="" />}>
                  <div className={`relative rounded overflow-hidden`} style={{ maxWidth: imageSize + 'px' }}>
                    <Image src={image} sizes={imageSize + "px"} className="w-screen" alt="" />
                  </div>
                </BrowserFrame>
              ) 
            : (
                <div className={`relative rounded-[6px] overflow-hidden m-auto`} style={{ maxWidth: imageSize + 'px' }}>
                  <div className="absolute w-full h-full rounded-[6px] shadow-[inset_0_0_0_1px_hsl(var(--border))] z-10 mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
                  <Image src={image} sizes={imageSize + 'px'} className="w-screen" alt="" />
                </div>
              )
          }
        </Suspense>
      </div>
      <div className="will-change-auto">{children}</div>
    </div>
  )
}