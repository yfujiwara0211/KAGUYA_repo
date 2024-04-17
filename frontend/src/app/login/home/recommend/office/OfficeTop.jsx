import React from 'react'
import OfficeTopTitle from './OfficeTopTitle';
import OfficeTopItems from './OfficeTopItems';

const OfficeTop = () => {
    return (
        <div className='m-2'>
            <OfficeTopTitle />
            <div className='flex w-full h-full justify-between mx-auto'>
                <OfficeTopItems />
            </div>
        </div>
    )
};

export default OfficeTop;