import React from 'react';
import Link from "next/link";

const OfficeTopTitle = () => {
    return (
        <div className='flex items-center justify-between font-extrabold'>
            <div className='m-2 text-2xl '>
                <h1>レコメンド</h1>
                <div>デスク</div>
            </div>
            <Link href={"/login/home/recommend"} className='m-4 hover:underline'>
                <div>戻る
                </div>
            </Link>
        </div>
    )
}

export default OfficeTopTitle;