import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import Desk1 from './desk1.jpg'; 


const OfficeTopItems = () => {
    return (
        <div className='m-2'>
            <div className='grid grid-cols-3 grid-rows-2 gap-4 w-full'>
                <Link
                    href={"/login/home/recommend/desk1"}
                    className='rounded-lg border-4 border-gray-200 hover:bg-gray-200'>
                    <Image
                        src={Desk1}
                        alt="desk1"
                        className='rounded-md hover:opacity-60'
                        />
                </Link>
                <Link
                    href={"/login/home/recommend/desk1"}
                    className='rounded-lg border-4 border-gray-200 hover:bg-gray-200'>
                    <Image
                        src={Desk1}
                        alt="desk1"
                        className='rounded-md hover:opacity-60'
                        />
                </Link>
                <Link
                    href={"/login/home/recommend/desk1"}
                    className='rounded-lg border-4 border-gray-200 hover:bg-gray-200'>
                    <Image
                        src={Desk1}
                        alt="desk1"
                        className='rounded-md hover:opacity-60'
                        />
                </Link>
                <Link
                    href={"/login/home/recommend/desk1"}
                    className='rounded-lg border-4 border-gray-200 hover:bg-gray-200'>
                    <Image
                        src={Desk1}
                        alt="desk1"
                        className='rounded-md hover:opacity-60'
                        />
                </Link>
                <Link
                    href={"/login/home/recommend/desk1"}
                    className='rounded-lg border-4 border-gray-200 hover:bg-gray-200'>
                    <Image
                        src={Desk1}
                        alt="desk1"
                        className='rounded-md hover:opacity-60'
                        />
                </Link>
                <Link
                    href={"/login/home/recommend/desk1"}
                    className='rounded-lg border-4 border-gray-200 hover:bg-gray-200'>
                    <Image
                        src={Desk1}
                        alt="desk1"
                        className='rounded-md hover:opacity-60'
                        />
                </Link>

            </div>
        </div>
    )
}

export default OfficeTopItems