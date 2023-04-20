import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black mt-[150px] max-w-screen-max py-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <p className="text-white text-base leading-6 text-center">
            All Rights Reserved by <span className="font-bold">DONATEBLOCKS</span> Build by <span className="font-bold cursor-pointer hover:text-gray-300">@donateBlocks</span>  | Copyright © {new Date().getFullYear()}   DonateBlocks.org
        </p>
    </div>
  )
}

export default Footer