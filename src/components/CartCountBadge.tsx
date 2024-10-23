import React from 'react'

interface propsType{
    size:string;
}



const CartCountBadge: React.FC <propsType> = ({size}) => {
  return (
    <div
    className={`absolute bg-red-600 text-white text-[14px] ${size} -top-1 -right-3 rounded-full grid place-items-center `}
    >
      3
    </div>
  )
}

export default CartCountBadge
