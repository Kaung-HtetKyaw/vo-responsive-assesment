import { cn } from 'utils'

export type ButtonProps = {
  children: React.ReactNode
  type?: 'outlined' | 'filled'
  className?: string
}

const Button = (props: ButtonProps) => {
  const { type = 'outlined', children, className = '' } = props
  return (
    <button
      className={cn(
        className,
        type === 'outlined' &&
          'text-primary bg-white broder-primary border-[1.5px]  ',
        type === 'filled' && 'text-white bg-primary',
        'font-sf rounded-[100px] text-base px-[32px] py-[12px] '
      )}
    >
      {children}
    </button>
  )
}

export default Button
