import React from 'react'
import { AiFillDislike, AiFillLike, AiFillStar } from 'react-icons/ai'

function Comment({name, comment, image, like, unlike}) {
  return (
    <div className="flex items-start space-x-4">
                <img
                  className="w-12 h-12"
                  src="https://secure.gravatar.com/avatar/7a2bb5e1cdc8a5ac3bb113771b6a8b50?s=80&d=mm&r=g"
                  alt="user"
                />
                <div className="flex flex-col items-start">
                  <div className="stars flex">
                    <AiFillStar size={14} color="#D26E4B" />
                    <AiFillStar size={14} color="#D26E4B" />
                    <AiFillStar size={14} color="#D26E4B" />
                    <AiFillStar size={14} color="#D26E4B" />
                    <AiFillStar size={14} color="#D6D6D6" />
                  </div>
                  <p className="text-base">
                    by <span className="font-bold">{name}</span>
                  </p>
                 <p className="text-sm text-gray-800 mt-4">{comment}</p>
                 <img width={400} className='mt-5 rounded' src={image} />
                 <div className="h-px w-32 bg-gray-200 mt-3"></div>
                <div className="flex space-x-6 mt-4 text-gray-500">
                  <div className="flex items-center text-sm space-x-2 cursor-pointer transition-all duration-150 ease-linear hover:text-main">
                    <AiFillLike size={20} />
                    <p>Like ({like})</p>
                  </div>
                  <div className="flex items-center text-sm space-x-2 cursor-pointer transition-all duration-150 ease-linear hover:text-main">
                    <AiFillDislike size={20} />
                    <p>Unlike ({unlike})</p>
                  </div>
                </div>
                </div>
              </div>
  )
}

export default Comment