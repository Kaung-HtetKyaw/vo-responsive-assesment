import { Button } from 'components/Button'
import FadeIn from 'components/FadeIn'
import {
  FacebookIcon,
  InstaIcon,
  LinkedInIcon,
  TelegramIcon
} from 'components/Icons'

const Footer = () => {
  return (
    <FadeIn>
      <div
        className="p-[40px] items-center font-sf flex flex-col bg-white rounded-[24px]
  "
      >
        <h2 className="midheading2 text-center font-sf font-[500] ">
          Open the door to a{' '}
          <span className="text-primary font-[600]">new world</span>
          <span className="block">by learning English</span>
        </h2>

        <Button type="filled" className="w-[fit-content] my-[40px]">
          Get Started
        </Button>

        <div className="grid grid-cols-12 gap-[40px]  ">
          <div className="col-span-12 md:col-span-4 text-center flex flex-col gap-[16px]">
            <a className=" cursor-pointer hover:underline text-base font-[500]">
              Support
            </a>
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Help center
            </a>
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Chat
            </a>
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Report a Bug
            </a>
          </div>
          <div className="col-span-12 md:col-span-4  text-center flex flex-col gap-[16px]">
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Product
            </a>
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Features
            </a>
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Work
            </a>
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Career
            </a>
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Money
            </a>
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Benefits
            </a>
          </div>
          <div className=" col-span-12 md:col-span-4  text-center flex flex-col gap-[16px]">
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Get in Touch
            </a>
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Contact
            </a>
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Sales
            </a>
            <a className="cursor-pointer hover:underline text-base font-[500]">
              Prices
            </a>
          </div>
        </div>

        <div className="w-full h-[2px] bg-[#E9E9E9] my-[40px] "></div>

        <div className="grid grid-cols-12 w-full">
          <div className=" order-2 mb-[16px] md:mb-[0px] lg:order-1 col-span-12 md:col-span-6 lg:col-span-4">
            <div className="flex gap-[8px] items-center justify-center md:justify-start ">
              <span className="text-[#A4A4A4] text-base ">@</span>
              <span className="text-[#A4A4A4] text-base ">Copywriting</span>
              <span className="text-[#A4A4A4] text-base ">|</span>
              <span className="text-[#A4A4A4] text-base block md:hidden ">
                Reserved
              </span>
              <span className="text-[#A4A4A4] text-base hidden md:block ">
                All Rights Reserved
              </span>
            </div>
          </div>
          <div className="order-1 mb-[16px] lg:mb-[0px] lg:order-2 col-span-12 md:col-span-12 lg:col-span-4">
            <div className="w-full flex gap-[16px] items-center justify-center">
              <InstaIcon />
              <FacebookIcon />
              <LinkedInIcon />
              <TelegramIcon />
            </div>
          </div>
          <div className=" order-3 col-span-12 md:col-span-6 lg:col-span-4">
            <div className="w-full flex justify-center items-center md:justify-end">
              <div className="flex gap-[8px] items-center ">
                <span className="text-[#A4A4A4] text-base ">Terms of Use</span>
                <span className="text-[#A4A4A4] text-base ">|</span>
                <span className="text-[#A4A4A4] text-base ">Privacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default Footer
