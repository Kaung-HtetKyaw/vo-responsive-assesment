import { ArrowIcon } from 'components/Icons'
import HeroConversation from './HeroConversation'
import { useEffect, useRef, useState } from 'react'
import { cn } from 'utils'
import { Button } from 'components/Button'
import { motion } from 'framer-motion'
import SlideInLeft from 'components/SlideInLeft'
import SlideInRight from 'components/SlideInRight'
import FadeIn from 'components/FadeIn'

const Hero = () => {
  const thirdConvoRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | null>(null)

  useEffect(() => {
    if (thirdConvoRef?.current) {
      setHeight(thirdConvoRef?.current?.clientHeight)
    }
    document.addEventListener('resize', () => {
      setHeight((prev) => thirdConvoRef?.current?.clientHeight ?? prev)
    })
  }, [])

  return (
    <div className=" py-[0px] lg:py-[56px] flex flex-col gap-[32px] ">
      <div className="grid grid-cols-12 gap-[1.6vw] 6xl:gap-[32px] items-center ">
        <div className="w-full col-span-12 md:col-span-8">
          <SlideInLeft>
            {' '}
            <HeroConversation
              title="Improve your English level"
              color="bg-appyellow"
              className="hidden md:block"
            />
          </SlideInLeft>
          <SlideInRight>
            <HeroConversation
              title="Improve your English level"
              color="bg-appyellow"
              className="block md:hidden"
              index={0}
            />
          </SlideInRight>
        </div>
        <p className=" hidden md:block col-span-4 text-body-2 font-sf ">
          We have published more than{' '}
          <span className="text-primary">650 episodes</span> of educational
          materials, every day more than{' '}
          <span className="text-primary">
            1.2k teachers work on our materials
          </span>
        </p>
      </div>
      <div className="grid grid-cols-12 gap-[1.6vw]  items-center ">
        <div className="col-span-4"></div>
        <div className="w-full col-span-12 md:col-span-8">
          <SlideInRight delay={0.5}>
            {' '}
            <HeroConversation
              title="Train with Native speakers"
              color="bg-apporange"
              className="hidden md:block"
            />
          </SlideInRight>
          <SlideInLeft delay={0.5}>
            {' '}
            <HeroConversation
              title="Train with Native speakers"
              color="bg-apporange"
              className="block md:hidden"
              index={1}
            />
          </SlideInLeft>
        </div>
      </div>
      <FadeIn delay={0.8}>
        {' '}
        <div className="grid grid-cols-12 gap-[1.6vw] 6xl:gap-[32px] items-end  lg:translate-y-[-32px] ">
          <div className="col-span-3 hidden lg:flex text-[#4208B3] font-sf rounded-[32px] p-[16px] w-full  flex-row gap-[5px] bg-secondary  ">
            <div className="w-[50%] max-h-[150px]">
              {' '}
              <img
                src="/hero-blog-cover.png"
                className="w-full max-h-[150px] aspect-[106/141] rounded-[48px] object-cover "
              />
            </div>
            <div className="w-[50%] flex flex-col justify-between">
              <div>
                <h5 className="font-[600] text-body-2 ">Blog</h5>
                <p className="text-sm font-sf  ">
                  More than 500 articles on educational topics
                </p>
              </div>

              <button className="w-full  flex flex-row items-center justify-between text-left ">
                <span className="text-body-2 whitespace-nowrap  ">
                  View All
                </span>
                <div className="bg-primary w-[32px] h-[32px] flex items-center justify-center p-[8px] rounded-full">
                  {' '}
                  <ArrowIcon />
                </div>
              </button>
            </div>
          </div>

          <div ref={thirdConvoRef} className="w-full col-span-12 md:col-span-7">
            <HeroConversation
              title="Get a license and teach"
              color="bg-appblue"
              textColor="text-white"
              className="hidden md:block"
            />

            <SlideInRight delay={0.8}>
              <HeroConversation
                title="Get a license and teach"
                color="bg-appblue"
                index={2}
                textColor="text-white"
                className="block md:hidden"
              />
            </SlideInRight>
          </div>

          <div className="col-span-12 mt-[32px] grid grid-cols-12 gap-[12px] sm:gap-[32px]  md:hidden">
            <div
              className={cn(
                'gap-[16px] col-span-6 md:col-span-5 lg:col-span-2 bg-secondary  justify-center items-center px-[10px] sm:px-[16px] py-[10px]  rounded-[48px] '
              )}
            >
              <div className="flex flex-row justify-between lg:justify-center gap-[10px] lg:gap-[5px] items-center  ">
                <p className="text-body-2 font-sf whitespace-nowrap font-[600] ">
                  Let's Go
                </p>
                <div className="bg-primary p-[8px] rounded-full">
                  {' '}
                  <ArrowIcon />
                </div>
              </div>
            </div>
            <div
              className={cn(
                'gap-[16px] col-span-6 md:col-span-5 lg:col-span-2 bg-secondary  justify-center items-center px-[10px] sm:px-[16px] py-[10px]  rounded-[48px] '
              )}
            >
              <div className="flex flex-row justify-between lg:justify-center gap-[10px] lg:gap-[5px] items-center  ">
                <p className="text-body-2 font-sf whitespace-nowrap font-[600] ">
                  View Blog
                </p>
                <div className="bg-primary p-[8px] rounded-full">
                  {' '}
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ height: height ? `${height}px` : '' }}
            className={cn(
              '  hidden md:flex gap-[16px] col-span-12 md:col-span-5 lg:col-span-2 bg-secondary  justify-center items-center  rounded-[48px] '
            )}
          >
            <div className="flex flex-row justify-between lg:justify-center gap-[10px] lg:gap-[5px] items-center  ">
              <p className="text-body-2 font-sf whitespace-nowrap font-[600] ">
                Let's Go
              </p>
              <div className="bg-primary p-[8px] rounded-full">
                {' '}
                <ArrowIcon />
              </div>
            </div>
          </div>

          <div className=" hidden md:flex col-span-12  items-center justify-center cursor-pointer">
            <div className="w-[50%] flex lg:hidden text-[#4208B3] font-sf rounded-[32px] p-[16px]  flex-row gap-[5px] bg-secondary  ">
              <div className="w-[50%] max-h-[150px]">
                {' '}
                <img
                  src="/hero-blog-cover.png"
                  className="w-full max-h-[150px] aspect-[106/141] rounded-[48px] object-cover "
                />
              </div>
              <div className="w-[50%] flex flex-col justify-between">
                <div>
                  <h5 className="font-[600] text-body-2 ">Blog</h5>
                  <p className="text-sm font-sf  ">
                    More than 500 articles on educational topics
                  </p>
                </div>

                <button className="w-full  flex flex-row items-center justify-between text-left ">
                  <span className="text-body-2 whitespace-nowrap  ">
                    View All
                  </span>
                  <div className="bg-primary w-[32px] h-[32px] flex items-center justify-center p-[8px] rounded-full">
                    {' '}
                    <ArrowIcon />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="w-full flex flex-col items-center gap-[32px] ">
        <p className=" w-full text-center md:w-[39vw] font-sf text-body-2 font-[400] ">
          Experience top-notch English language education with passionate
          teachers, interactive lessons, and modern facilities at our school.
          Empower your English skills for personal and professional success.
        </p>
        <div className="bg-white flex  rounded-[100px] py-[8px] px-[16px] ">
          <input
            className="rounded-[100px] placeholder:font-sf heading5 font-fs outline-none focus:outline-none focus-visible:outline-none "
            type="text"
            placeholder="Your Email"
          />
          <div className="hidden md:block">
            <Button type="filled">
              <span className=" whitespace-nowrap ">Get Started</span>
            </Button>
          </div>
          <div className="block md:hidden">
            <button className="w-full  flex flex-row items-center justify-between text-left ">
              <div className="bg-primary w-[32px] h-[32px] flex items-center justify-center p-[8px] rounded-full">
                {' '}
                <ArrowIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
