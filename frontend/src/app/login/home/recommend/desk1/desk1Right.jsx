import React from 'react';
import Link from 'next/link';

const Desk1Right = () => {
    return (
        <div className='m-2 pl-5'>
            <div className='m-3'>
                <div className='text-2xl font-bold m-1'>商品名</div>
                <div className='m-1 text-2xl'>サンプルサンプル</div>
            </div>
            <div className='m-3'>
                <div className='text-2xl font-bold m-1'>商品特徴</div>
                <div className='m-1'>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル</div>
            </div>
            <div className='m-3 mt-6'>
                <div className='text-2xl font-bold m-1'>在庫</div>
                <div className='m-1 text-2xl'>４セット</div>
            </div>
            <div className='m-3 mt-6'>
                <div className='text-2xl font-bold m-1'>価格（税込）</div>
                <div className='m-1 text-2xl'>68,980円</div>
            </div>
            <div className='m-3 mt-12'>
                <Link
                    href={"/login/home/recommend"}
                    passHref
                    className='bg-purple-500 hover:bg-purple-700 flex items-center justify-center rounded-md active:scale-95'>
                    <button className='m-3 text-white text-2xl'>カートに入れる</button>
                </Link>
            </div>
        </div>
    )
}

export default Desk1Right;