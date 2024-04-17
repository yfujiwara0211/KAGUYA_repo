import React from 'react';
import Link from "next/link";

const RecommendTopTitle = () => {
    return (
        <div className='flex items-center justify-between font-extrabold'>
            <div className='m-2 text-2xl '>
                <h1>レコメンドイメージ</h1>
                <div>モダンオフィスコーディネート</div>
            </div>
            <Link href={"/"} className='m-4 hover:underline'>
                <div>戻る
                </div>
            </Link>
        </div>
    )
}

export default RecommendTopTitle;