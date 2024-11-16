import { ArrowIcon } from 'components/Icons'
import HeroConversation from '../Hero/HeroConversation'
import SlideInLeft from 'components/SlideInLeft'
import SlideInRight from 'components/SlideInRight'

const Prices = () => {
  return (
    <div className="py-[56px] font-sf flex flex-col gap-[32px] ">
      <div className="w-full flex justify-center">
        <HeroConversation
          className="w-[fit-content] py-[40px] px-[88px] "
          title="Prices"
          color="bg-secondary"
        />
      </div>

      <SlideInLeft>
        <div className="grid grid-cols-12 gap-[16px]">
          <div className="order-2 md:order-1 col-span-12 md:col-span-8 bg-white flex flex-col gap-[8px]  py-[40px] px-[48px] rounded-[24px] ">
            <div className="flex flex-row items-start justify-between">
              <h2 className="midheading2">
                <span className="block">
                  Get a <span className="text-primary font-[600]">License</span>{' '}
                  and
                </span>
                <span className="block">become a teacher</span>
              </h2>
              <div className="bg-primary  cursor-pointer  flex items-center justify-center p-[10px] rounded-full">
                {' '}
                <ArrowIcon />
              </div>
            </div>

            <p className="text-body-2 font-sf">
              The cost of obtaining an English teacher license can vary
              depending on the program and location. Some programs may require
              fees for application, examinations, and materials, while others
              may offer more affordable options.{' '}
            </p>
          </div>
          <div className="order-1 md:order-2 col-span-12 md:col-span-4 grid  grid-cols-2 gap-[16px] ">
            <img
              src="/price-person1.png"
              className="rounded-[12px] w-full max-w-full h-full object-cover "
            />
            <img
              src="/price-person2.png"
              className="rounded-[12px] w-full max-w-full h-full object-cover "
            />
            <img
              src="/price-person3.png"
              className="rounded-[12px] w-full max-w-full h-full object-cover "
            />
            <img
              src="/price-person4.png"
              className="rounded-[12px] w-full max-w-full h-full object-cover "
            />
          </div>
        </div>
      </SlideInLeft>

      <SlideInRight>
        <div className="grid grid-cols-12 gap-[16px]">
          <div className=" col-span-12 md:col-span-4 grid grid-cols-2 gap-[16px] ">
            <img
              src="/price-person5.png"
              className="rounded-[12px] w-full max-w-full h-full object-cover "
            />
            <img
              src="/price-person6.png"
              className="rounded-[12px] w-full max-w-full h-full object-cover "
            />
            <img
              src="/price-person7.png"
              className="rounded-[12px] w-full max-w-full h-full object-cover "
            />
            <img
              src="/price-person8.png"
              className="rounded-[12px] w-full max-w-full h-full object-cover "
            />
          </div>
          <div className=" col-span-12 md:col-span-8 bg-white flex flex-col gap-[8px]  py-[40px] px-[48px] rounded-[24px] ">
            <div className="flex flex-row items-start justify-between">
              <h2 className="midheading2">
                <span className="block">Learn English and Pass and</span>
                <span className="block text-primary font-[600]">
                  international exams
                </span>
              </h2>
              <div className="bg-primary  cursor-pointer  flex items-center justify-center p-[10px] rounded-full">
                {' '}
                <ArrowIcon />
              </div>
            </div>

            <p className="text-body-2 font-sf">
              The cost of obtaining an English teacher license can vary
              depending on the program and location. Some programs may require
              fees for application, examinations, and materials, while others
              may offer more affordable options.{' '}
            </p>
          </div>
        </div>
      </SlideInRight>
    </div>
  )
}

export default Prices
