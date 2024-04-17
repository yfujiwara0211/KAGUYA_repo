import React from 'react';
import Image from 'next/image';
import ModanOffice from "./modan_office_cordinate.png";

const RecommendTopLeft = () => {
    return (
        <div className='m-2'>
                <Image
                    src={ModanOffice}
                    alt="ModanOffice"
                    className='w-full rounded-lg'
                />
        </div>
    )
}

export default RecommendTopLeft