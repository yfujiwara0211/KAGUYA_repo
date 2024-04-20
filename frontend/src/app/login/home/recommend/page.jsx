'use client'

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import ModanOffice from "./modan_office_cordinate.png";

const Recommend = () => {

    return (
        <div className='flex-1'>
            <div className='my-4 items-center justify-between mx-auto max-w-4xl'>
                <div className='m-2'>
                  <div className='flex items-center justify-between font-extrabold'>
                    <div className='m-2 text-2xl '>
                        <h1>レコメンドオフィスイメージ</h1>
                        <div>モダンオフィスコーディネート</div>
                    </div>
                    <Link href={"/login/home/recommend"} className='m-4 hover:underline'>
                        <div>戻る</div>
                    </Link>
                  </div>
                  <div className='flex w-full h-full justify-between mx-auto'>
                      <div className='w-1/2 h-full'>
                          <div className='m-2'>
                              <Image src={ModanOffice} alt="ModanOffice" className='w-full rounded-lg' />
                          </div>
                      </div>
                      <div className='w-1/2 h-full'>
                        <div className='m-2'>
                          <div className='grid grid-cols-2 grid-rows-3 gap-7'>
                              <Link href={"/login/home/recommend/office"} className='bg-gray-200 hover:bg-gray-400 hover:text-white py-2 sm:py-6 md:py-10 lg:py-12 rounded-lg flex items-center justify-center'>
                                  <div className='text-center'>執務室<br />デスク・チェア</div>
                              </Link>
                              <Link href={"/login/home/recommend/list"} className='bg-gray-200 hover:bg-gray-400 hover:text-white py-2 sm:py-6 md:py-10 lg:py-12 rounded-lg flex items-center justify-center'>
                                  <div className='text-center'>会議用<br />デスク・チェア</div>
                              </Link>
                              <Link href={"/login/home/recommend/list"} className='bg-gray-200 hover:bg-gray-400 hover:text-white py-2 sm:py-6 md:py-10 lg:py-12 rounded-lg flex items-center justify-center'>
                                  <div className='text-center'>テレブース</div>
                              </Link>
                              <Link href={"/login/home/recommend/list"} className='bg-gray-200 hover:bg-gray-400 hover:text-white py-2 sm:py-6 md:py-10 lg:py-12 rounded-lg flex items-center justify-center'>
                                  <div className='text-center'>カフェブース</div>
                              </Link>
                              <Link href={"/login/home/recommend/list"} className='bg-gray-200 hover:bg-gray-400 hover:text-white py-2 sm:py-6 md:py-10 lg:py-12 rounded-lg flex items-center justify-center'>
                                  <div className='text-center'>キャビネット</div>
                              </Link>
                              <Link href={"/login/home/recommend/list"} className='bg-gray-200 hover:bg-gray-400 hover:text-white py-2 sm:py-6 md:py-10 lg:py-12 rounded-lg flex items-center justify-center'>
                                  <div className='text-center'>会議スペース</div>
                              </Link>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Recommend;
