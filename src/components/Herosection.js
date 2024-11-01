import React from 'react'
import Textmain from './Textmain'


const Herosection = () => {
    return (
        <div className='h-auto md:h[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
            <div className='relative z-10 w-full text-center p-4'>
                <Textmain />
                
            </div>
        </div>
    )
}

export default Herosection
