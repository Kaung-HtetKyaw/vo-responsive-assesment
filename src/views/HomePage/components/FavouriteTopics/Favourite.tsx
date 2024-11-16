import SlideInLeft from 'components/SlideInLeft'
import HeroConversation from '../Hero/HeroConversation'
import TopicItem from './TopicItem'

const Favourite = () => {
  return (
    <div className="py-[56px] font-sf flex flex-col gap-[32px] ">
      <div className="w-full flex justify-center">
        <HeroConversation
          className="w-[fit-content] py-[40px] px-[88px] "
          title="Our Favourite Topics"
          color="bg-secondary"
        />
      </div>

      <div className="flex flex-col">
        <SlideInLeft>
          {' '}
          <TopicItem index={0} title="Entrepreneurship" noOfPodcasts={123} />
        </SlideInLeft>
        <SlideInLeft delay={0.5}>
          {' '}
          <TopicItem index={1} title="Wellness" noOfPodcasts={23} />
        </SlideInLeft>
        <SlideInLeft delay={0.8}>
          {' '}
          <TopicItem index={2} title="Food & Beverage" noOfPodcasts={85} />
        </SlideInLeft>
        <SlideInLeft delay={1.1}>
          {' '}
          <TopicItem index={3} title="Sustainability" noOfPodcasts={75} />
        </SlideInLeft>
      </div>
    </div>
  )
}

export default Favourite
