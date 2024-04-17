import React from 'react'
import RecommendTopLeft from './RecommendTopLeft';
import RecommendTopRight from './RecommendTopRight';
import RecommendTopTitle from './RecommendTopTitle';

const RecommendTop = () => {
    return (
        <div className='m-2'>
            <RecommendTopTitle />
            <div className='flex w-full h-full justify-between mx-auto'>
                <div className='w-1/2 h-full'>
                    <RecommendTopLeft />
                </div>
                <div className='w-1/2 h-full'>
                    <RecommendTopRight />
                </div>
            </div>
        </div>
    )
};

export default RecommendTop;