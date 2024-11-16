import { useMemo } from 'react'
import { cn } from 'utils'

export type HeroConversationProps = {
  title: string
  color: string
  textColor?: string
  index?: number
  className?: string
}

const HeroConversation = (props: HeroConversationProps) => {
  const { title, color, textColor, index = 0, className = '' } = props

  const direction = useMemo(() => (index % 2 === 0 ? 'right' : 'left'), [index])

  return (
    <div
      className={cn(
        className,
        direction === 'right'
          ? ' rounded-t-[48px] rounded-tl-[48px] rounded-bl-[48px] '
          : ' rounded-t-[48px] rounded-tr-[48px] rounded-br-[48px] ',
        `${color}`,
        ' p-[16px] md:p-[2vw]  '
      )}
    >
      <p
        className={cn(
          textColor ?? 'text-black',
          'heading1 font-sf font-[700] '
        )}
      >
        {title}
      </p>
    </div>
  )
}

export default HeroConversation
