import React from 'react'
import Link from "next/link";


const RecommendTopRight = () => {
    return (
        <div className='m-2'>
            <div className='grid grid-cols-2 grid-rows-3 gap-4'>
                <Link
                    href={"/login/home/recommend/office"}
                    className='bg-gray-200 hover:bg-gray-400 hover:text-white py-2 sm:py-6 md:py-10 lg:py-12 rounded-lg flex items-center justify-center'>
                    <div className='text-center'>執務室<br />デスク・チェア</div>
                </Link>
                <Link
                    href={"/login/home/recommend/meeting"}
                    className='bg-gray-200 hover:bg-gray-400 hover:text-white py-2 sm:py-6 md:py-10 lg:py-12 rounded-lg flex items-center justify-center'>
                    <div className='text-center'>会議用<br />デスク・チェア</div>
                </Link>
                <Link
                    href={"/login/home/recommend/telebooth"}
                    className='bg-gray-200 hover:bg-gray-400 hover:text-white py-2 sm:py-6 md:py-10 lg:py-12 rounded-lg flex items-center justify-center'>
                    <div className='text-center'>テレブース</div>
                </Link>
                <Link
                    href={"/login/home/recommend/cafebooth"}
                    className='bg-gray-200 hover:bg-gray-400 hover:text-white py-2 sm:py-6 md:py-10 lg:py-12 rounded-lg flex items-center justify-center'>
                    <div className='text-center'>カフェブース</div>
                </Link>
                <Link
                    href={"/login/home/recommend/cabinet"}
                    className='bg-gray-200 hover:bg-gray-400 hover:text-white py-2 sm:py-6 md:py-10 lg:py-12 rounded-lg flex items-center justify-center'>
                    <div className='text-center'>キャビネット</div>
                </Link>
                <Link
                    href={"/login/home/recommend/meetingspace"}
                    className='bg-gray-200 hover:bg-gray-400 hover:text-white py-2 sm:py-6 md:py-10 lg:py-12 rounded-lg flex items-center justify-center'>
                    <div className='text-center'>会議スペース</div>
                </Link>
            </div>
        </div>
    )
}

export default RecommendTopRight