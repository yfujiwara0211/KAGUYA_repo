import React from 'react';
import Image from 'next/image';
import Desk1 from '../office/desk1.jpg'; 

const Desk1Left = () => {
    return (
        <div className='m-2 rounded-lg border-4 border-gray-200'>
            <Image
                src={Desk1}
                alt="desk1"
                className='rounded-md'
                />
        </div>
    )
}

export default Desk1Left