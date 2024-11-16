import { cn } from 'utils'

const circles = [0, 1, 2, 3]

const TopicItem = ({
  noOfPodcasts,
  title,
  index
}: {
  noOfPodcasts: number
  title: string
  index: number
}) => {
  return (
    <div className=" relative w-full group border-b-[2px] border-[#A4A4A4] flex flex-col sm:flex-row sm:items-center sm:justify-between pt-[24px] pb-[40px] ">
      <div className=" group-hover:translate-x-[40px] transition-all duration-300 flex flex-row items-center gap-[24px]">
        <div className="border-primary border-[1.5px] font-sf heading5 font-[600] w-[fit-content] px-[20px] py-[18px] rounded-[100px] ">
          <span className="text-primary">0{index + 1}/</span>
        </div>
        <h4 className="text-[#A4A4A4] group-hover:text-primary transition-all duration-300 heading1 font-[500] ">
          {title}
        </h4>
      </div>
      <div className="flex justify-end md:justify-start items-center gap-[14px]">
        <span className="text-[##A4A4A4] font-[500] heading5 ">
          {noOfPodcasts} Podcasts
        </span>
        <div>
          <div className="flex ">
            {circles.slice(0, 2).map((el) => (
              <div
                key={el}
                className={cn(
                  index === el ? 'bg-secondary' : 'bg-primary',
                  ' w-[16px] h-[16px] rounded-full  '
                )}
              ></div>
            ))}
          </div>
          <div className="flex ">
            {circles.slice(2).map((el) => (
              <div
                key={el}
                className={cn(
                  index === el ? 'bg-secondary' : 'bg-primary',
                  ' w-[16px] h-[16px] rounded-full  '
                )}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <img
        src="/wellness-tilted.png"
        className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
      />
    </div>
  )
}

export default TopicItem
