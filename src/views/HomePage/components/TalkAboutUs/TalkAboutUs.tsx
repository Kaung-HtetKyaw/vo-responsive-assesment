import { cn } from 'utils'
import HeroConversation from '../Hero/HeroConversation'
import { Button } from 'components/Button'
import SlideInLeft from 'components/SlideInLeft'
import SlideInRight from 'components/SlideInRight'

const TalkAboutUs = () => {
  return (
    <div className="py-[56px] font-sf flex flex-col gap-[32px] ">
      <div className="w-full flex justify-center">
        <HeroConversation
          className="w-[fit-content] py-[40px] px-[88px] "
          title="They talk About Us"
          color="bg-secondary"
        />
      </div>
      <div className="w-full grid grid-cols-2 gap-[16px] ">
        <SlideInLeft className="bg-white col-span-2 lg:col-span-1 p-[24px] rounded-[24px]">
          <>
            <div className=" grid grid-cols-12  ">
              <div className="col-span-0 md:col-span-2"></div>
              <div className=" col-span-12 md:col-span-10  ">
                <div
                  className={cn(
                    'rounded-t-[48px] bg-[#F7F7F5] rounded-tl-[48px] rounded-bl-[48px] p-[16px] md:p-[2vw]  '
                  )}
                >
                  <p
                    className={cn('text-body-2 font-sf font-[400] text-black')}
                  >
                    As a recent graduate of this English language school, I can
                    confidently say that it has exceeded my expectations. The
                    teachers are not only knowledgeable and passionate about
                    teaching but also go above and beyond to ensure that each
                    student receives personalized attention.
                  </p>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-12 mt-[16px]  ">
              <div className=" col-span-12 md:col-span-10  ">
                <div
                  className={cn(
                    'rounded-t-[48px] bg-[#F7F7F5] rounded-tl-[48px] rounded-bl-[48px] p-[16px] md:p-[2vw]  '
                  )}
                >
                  <p
                    className={cn('text-body-2 font-sf font-[400] text-black')}
                  >
                    As a recent graduate of this English language school, I can
                    confidently say that it has exceeded my expectations. The
                    teachers are not only knowledgeable and passionate about
                    teaching but also go above and beyond to ensure that each
                    student receives personalized attention.
                  </p>
                </div>
              </div>
              <div className="col-span-0 md:col-span-2"></div>
            </div>
            <div className="w-full flex items-center justify-center mt-[32px]">
              <Button className="w-[80%]" type="filled">
                View all Reviews
              </Button>
            </div>
          </>
        </SlideInLeft>
        <SlideInRight className="bg-white col-span-2 lg:col-span-1 px-[40px] rounded-[24px] flex flex-col justify-center items-start gap-[16px] py-[32px] lg:py-[0px] ">
          {' '}
          <>
            <p className="flex flex-col">
              {' '}
              <span
                style={{ lineHeight: 'normal' }}
                className="bigHeading font-sf text-primary font-[600] "
              >
                200K+
              </span>
              <span
                style={{ lineHeight: 'normal' }}
                className="heading1 font-sf text-black font-[500] "
              >
                Reviews
              </span>
            </p>
            <p className="text-body-2 font-sf font-[400] ">
              The English language school has received overwhelmingly{' '}
              <span className="text-primary font-[600]">positive reviews</span>{' '}
              from its students. Many have praised the school's experienced and
              knowledgeable teachers, who are able to cater to{' '}
              <span className="text-primary font-[600]">
                the individual needs of each student.
              </span>{' '}
            </p>
          </>
        </SlideInRight>
      </div>
    </div>
  )
}

export default TalkAboutUs
