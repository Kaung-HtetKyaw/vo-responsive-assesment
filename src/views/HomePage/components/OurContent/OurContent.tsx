import { ArrowIcon, DownArrowIcon } from 'components/Icons'
import HeroConversation from '../Hero/HeroConversation'
import { Button } from 'components/Button'
import { motion, useAnimation, useInView } from 'framer-motion'
import { sectionVariants } from 'views/HomePage/HomePage'
import { useEffect, useRef } from 'react'
import FadeIn from 'components/FadeIn'
import SlideInLeft from 'components/SlideInLeft'
import SlideInRight from 'components/SlideInRight'

const OurContent = () => {
  return (
    <FadeIn>
      <div className="py-[56px] font-sf flex flex-col gap-[32px] ">
        <div className="w-full flex justify-center">
          <HeroConversation
            className="w-[fit-content] py-[40px] px-[88px] "
            title="Our Content"
            color="bg-secondary"
          />
        </div>

        <div className="w-full p-[16px] bg-white rounded-[32px] grid grid-cols-12 gap-[16px] sm:gap-[0px]">
          <div className=" order-2 sm:order-1 col-span-12 sm:col-span-4 flex gap-[8px] justify-center sm:justify-start items-center">
            <h5 className="border-primary w-full sm:w-auto border-[1.5px] rounded-full flex items-center justify-center px-[32px] py-[12px] ">
              Popular
            </h5>
            <div className="bg-primary  cursor-pointer  flex items-center justify-center p-[8px] rounded-full">
              {' '}
              <DownArrowIcon />
            </div>
          </div>
          <div className=" order-1 sm:order-2 flex flex-col justify-center items-center col-span-12  sm:col-span-4">
            <h5>Podcasts</h5>
            <div className="flex gap-[8px] items-center">
              <div className=" cursor-pointer w-[16px] h-[16px] rounded-full bg-primary "></div>
              <div className=" cursor-pointer w-[16px] h-[16px] rounded-full bg-secondary "></div>
            </div>
          </div>
          <div className="w-full order-3 sm:order-3 col-span-12  sm:col-span-4 flex justify-center sm:justify-end">
            <div className="w-full sm:w-auto  flex gap-[8px] items-center">
              <div className="bg-primary  cursor-pointer  flex items-center justify-center p-[8px] rounded-full">
                {' '}
                <ArrowIcon />
              </div>
              <h5 className="border-primary w-full sm:w-auto  border-[1.5px] rounded-full flex items-center justify-center px-[32px] py-[12px] ">
                Popular
              </h5>
            </div>
          </div>
        </div>

        <div className=" w-full bg-white p-[40px] flex flex-col gap-[16px]  rounded-[24px]">
          <div className="grid grid-cols-12 gap-[40px] ">
            <div className=" col-span-12 lg:col-span-9 ">
              <div className="flex">
                <h2 className="col-span-10 heading2 font-[600] ">
                  Get Started your day with us
                </h2>
              </div>
              <div className="flex items-center gap-[8px] justify-end">
                <span className="heading5 text-primary font-[600]">01</span>
                <h2 className="col-span-10 heading2 font-[600] ">
                  Podcasts on any topic
                </h2>
              </div>
            </div>
            <div className=" col-span-12  lg:col-span-3 text-center lg:text-left flex items-center">
              <p className="text-base">
                <span className="text-primary">The school's mission</span> is to
                empower students with the language skills they need for personal
                and <span className="text-primary">professional success.</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[16px]">
            <SlideInLeft
              delay={0.5}
              className=" col-span-12 sm:col-span-6 lg:col-span-4 h-full  bg-[#F7F7F5] flex flex-col justify-between gap-[16px] p-[16px] rounded-[20px]  "
            >
              <>
                <div>
                  <div
                    style={{ backgroundImage: 'url("/podcast1.png")' }}
                    className="w-full rounded-[20px] aspect-[83/62] bg-cover bg-no-repeat bg-center "
                  ></div>
                  <div className="flex mt-[16px] flex-col gap-[16px] font-sf ">
                    <h3 className="heading5 font-[600]">Habit of Speaking</h3>
                    <p className="text-base font-[400]">
                      The habitual use of descriptive language while speaking is
                      commonly referred to as "descriptive speech." This
                      communication style involves using vivid and detailed
                      words to convey ideas,
                    </p>
                  </div>
                </div>
                <Button className="w-full">Go to Podcast</Button>
              </>
            </SlideInLeft>

            <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col justify-between bg-secondary rounded-[20px] p-[16px]  ">
              <div className="">
                <h2 className="pl-[8px] heading4 w-[50%] flex flex-col  font-[600] ">
                  <span className="whitespace-nowrap">Start your day </span>{' '}
                  <span className="text-primary">With Us</span>
                </h2>

                <div className="w-full flex justify-center mt-[24px] mb-[40px] ">
                  <div className="bg-white flex items-center gap-[8px] p-[8px] rounded-[32px] w-[90%] 2xl:w-[58.24%] ">
                    <img
                      src="/person4.jpeg"
                      className="w-[48px] h-[48px] object-cover rounded-full "
                    />
                    <div className="flex flex-col">
                      <span className="text-[#D4D4D4] text-base ">
                        Author - Neil Olson
                      </span>
                      <span className="text-body-2">Run in English</span>
                    </div>
                  </div>
                </div>

                <img src="/headphones.svg" className="w-full max-w-full" />

                <div className="mt-[16px]">
                  <div className="flex items-center justify-between">
                    <h2 className="heading5  font-[600]">Run and Talk</h2>
                    <span className="text-base">Audio Podcast</span>
                  </div>
                </div>

                <p className="text-base my-[16px]">
                  Running and talking simultaneously can be challenging, but
                  with practice, it's possible to do both effectively. Here are
                  some tips to help you run and talk at the same time:
                </p>
              </div>
              <Button className="w-full !bg-transparent ">Go to Podcast</Button>
            </div>

            <SlideInRight
              delay={1.1}
              className="col-span-12 sm:col-span-12 lg:col-span-4  flex flex-col justify-between "
            >
              <>
                <div className="bg-[#F7F7F5] p-[24px] rounded-[16px] ">
                  <h2 className="pl-[8px] heading4 w-[50%] flex flex-col  font-[600] ">
                    <span className=" whitespace-nowrap ">The LightHouse </span>{' '}
                    <span className="text-primary">Conversation</span>
                  </h2>

                  <div className="my-[24px]">
                    <p className="text-base font-[400] my-[24px]">
                      The group approached{' '}
                      <span className="text-primary font-[400]">
                        the lighthouse
                      </span>
                      , marveling at its beauty and history. As they climbed the
                      winding staircase,{' '}
                      <span className="text-primary font-[400] ">
                        they couldn't help
                      </span>{' '}
                      but feel a sense of awe and reverence.
                    </p>

                    <div className="w-full flex justify-between">
                      <span className="heading5 font-[600] text-primary ">
                        Read More
                      </span>
                      <div className="bg-primary  cursor-pointer  flex items-center justify-center p-[10px] rounded-full">
                        {' '}
                        <ArrowIcon />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F7F7F5] p-[24px] rounded-[16px] mt-[16px] ">
                  <div className="my-[24px]">
                    <div className="w-full flex justify-between">
                      <div className="border-primary border-[1.5px] rounded-full p-[10px]">
                        <img
                          src="/single-headphone.svg"
                          className="w-[24px] h-[24px] "
                        />
                      </div>
                      <div className="bg-primary  cursor-pointer  flex items-center justify-center p-[10px] rounded-full">
                        <ArrowIcon />
                      </div>
                    </div>

                    <p className="text-base font-[400] my-[24px]">
                      Our podcasts can inspire you not only to{' '}
                      <span className="text-primary font-[600] ">
                        speak English
                      </span>{' '}
                      every day but{' '}
                      <span className="text-primary font-[600]">
                        also to think
                      </span>{' '}
                      in it.
                    </p>
                  </div>
                </div>
              </>
            </SlideInRight>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default OurContent
