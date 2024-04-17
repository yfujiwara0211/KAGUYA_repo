import React from 'react'
import Desk1Left from './desk1Left';
import Desk1Right from './desk1Right';

const Desk1 = () => {
    return (
        <div className='m-2'>
            <div className='flex w-full h-full justify-between mx-auto'>
                <div className='w-1/2 h-full'>
                    <Desk1Left />
                </div>
                <div className='w-1/2 h-full'>
                    <Desk1Right />
                </div>
            </div>
        </div>
    )
};

export default Desk1;