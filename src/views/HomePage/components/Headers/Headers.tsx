import { Button } from 'components/Button'
import { HamburderIcon, Logo, SearchIcon } from '../../../../components/Icons'
import { Nav } from '../Nav'
import { useCycle } from 'framer-motion'
import { MenuToggle } from '../Nav/MenuToggle'

const Headers = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const onToggleOpen = () => {
    const body = document.querySelector('body')
    body?.classList.toggle('overflow-y-hidden')
    toggleOpen()
  }

  return (
    <div className=" py-[56px] w-full grid grid-cols-12 lg:flex flex-row items-center justify-between">
      <div className="flex items-center col-span-10 xs:col-span-3  gap-[16px]">
        <Logo />
        <div className="flex flex-row items-center gap-[16px]">
          <div className=" hidden lg:flex flex-row items-center bg-offwhite px-[32px] py-[10px]  rounded-[100px] ">
            <input
              placeholder="Search"
              type="text"
              className="font-sf text-base text-[#909090] bg-offwhite outline-none focus:outline-none appearance-none focus:appearance-none border-none focus-visible:outline-none focus-visible:border-none"
            />
            <SearchIcon />
          </div>
          <div className="hidden lg:hidden">
            <div className="flex items-center justify-center p-[10px]">
              {' '}
              <MenuToggle toggle={() => toggleOpen()} />
            </div>

            <Nav isOpen={isOpen} toggleOpen={toggleOpen} />
          </div>
        </div>
      </div>
      <div className="hidden xs:flex items-center justify-between col-span-6 lg:hidden flex-row  bg-offwhite px-[12px] py-[10px]  rounded-[100px] ">
        <input
          placeholder="Search"
          type="text"
          className="font-sf text-base text-[#909090] bg-offwhite outline-none focus:outline-none appearance-none focus:appearance-none border-none focus-visible:outline-none focus-visible:border-none"
        />
        <SearchIcon />
      </div>
      <div className="flex items-center justify-center col-span-2 xs:col-span-3 ">
        <div>
          <div className="flex items-center justify-center p-[10px]">
            {' '}
            <MenuToggle toggle={() => onToggleOpen()} />
          </div>

          <Nav isOpen={isOpen} toggleOpen={onToggleOpen} />
        </div>
      </div>

      <div className=" hidden lg:flex flex-row items-center gap-[16px]">
        <div className="bg-[#EFEFED] hidden lg:flex gap-[10px]  items-center pl-[6px] pr-[16px] py-[6px] rounded-[100px] ">
          <div className="flex items-center">
            <img
              className="w-[32px] aspect-[1/1] object-cover rounded-full "
              src="/person1.png"
            />

            <img
              className="w-[32px] aspect-[1/1] object-cover rounded-full translate-x-[-45%] "
              src="/person2.png"
            />
            <img
              className="w-[32px] aspect-[1/1] object-cover rounded-full translate-x-[-90%] "
              src="/person3.png"
            />
          </div>
          <p className="font-sf whitespace-nowrap font-[600] ">1.2k Authors</p>
        </div>

        <div className="flex items-center gap-[12px]">
          <Button>Sign In</Button>
          <Button type="filled">Get started</Button>
        </div>
      </div>
    </div>
  )
}

export default Headers
