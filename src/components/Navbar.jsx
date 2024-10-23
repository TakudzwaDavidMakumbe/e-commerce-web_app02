import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { FcSearch } from 'react-icons/fc'
import CartCountBadge from './CartCountBadge'

function Navbar() {
  return (
    <div className='container hidden lg:block' >
        <div className="flex justify-between items-center pt-8">
            <h1 className="text-4xl font-medium">Logo</h1>
            <div className="relative w-full max-w-[500px]">
                <input type="text"
                 placeholder='Search Product...' 
                 className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" />
                <FcSearch className='absolute top-0 right-0 mt-3 mr-5 text-gray-500' size={25} />
            </div>
            <div className="flex gap-4">
               <div className="icon__wrapper">
                     <AiOutlineUser/>
               </div>
               <div className="icon__wrapper relative ">
                     <AiOutlineShoppingCart/>
                     <CartCountBadge size='w-[25px] h-[25px]' />
               </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
 