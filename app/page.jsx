'use client'

import { Hero } from '@/components/layout/Hero'
import { CardFeature } from '@/components/layout/CardFeatures'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import Image from 'next/image'



export default function Page() {
  return (
    <>
      <Hero />
      <div className='bg-[#072359]'>
        <div className='mx-auto w-full grid grid-cols-3 grid-rows-1 gap-4 items-center p-12 md:flex-row lg:w-4/5'>
          <div className="flex flex-col gap-6"><div className="w-fit items-center gap-2 rounded-lg bg-brand-light-grey-wash p-2 text-brand-neutrals-300 dark:bg-brand-light-black lg:p-2.5 hidden lg:flex"><p className="[&amp;_b]:md:font-semibold [&amp;_strong]:md:font-semibold font-mono text-sm/[1rem] font-semibold uppercase tracking-4 md:text-base/[1.125rem]">Blog</p></div><h2 className="text-2xl/[1.6875rem] font-semibold -tracking-4 md:text-4xl/[2.625rem] text-balance">Iterating with Shadow Workspaces</h2><p className="[&amp;_b]:md:font-semibold [&amp;_strong]:md:font-semibold font-mono text-base/[1.125rem] md:text-lg/[1.5rem] !text-pretty !leading-normal text-brand-gray-600">Hidden windows and kernel-level folder proxies to let AIs iterate on code without affecting the user.</p><a className="relative inline-flex items-center justify-center whitespace-nowrap uppercase disabled:pointer-events-none disabled:opacity-50 overflow-hidden transition-[color,background-color,border-color,opacity] before:absolute before:-inset-0 after:absolute after:inset-0 motion-reduce:transition-none style_secondary__r9SkX bg-brand-white text-brand-black border border-brand-neutrals-100 dark:border-brand-neutrals-800 hover:!border-brand-gray-400 after:transition-colors after:duration-300 font-mono font-semibold text-sm/[1rem] md:text-base/[1.125rem] tracking-2 mt-1 w-fit rounded-md p-2 md:px-3 md:py-2.5" role="button" href="/blog/shadow-workspace"><span className="relative z-10 flex">Keep Reading</span></a></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="rounded-lg h-[60vh] col-span-2 my-6"
          >
            <source src="/video/preview-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5'>
        <CardFeature />
      </div>
      <div className='bg-[#072359]'>
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Suits for <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Any Tech Fields
                </span>
              </h1>
            </>
          }>
          <Image
            src={`/img/landing.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false} />
        </ContainerScroll>
      </div>
    </>
  )
}
