import React from 'react'
import FeaturedText from "./FeaturedText"
import FeaturedCard from './FearutedCard'
import Link from 'next/link'

const Featured = () => {
    return (
        <div className='min-h-[110vh] w-full bg-gray-900'>
            <div className='w-full bg-gray-900'>
                <FeaturedText />
                <div className='mt-10 mx-8 bg-gray-900'>
                    <FeaturedCard />
                    <div className="mt-20 text-center bg-gray-900">
                        <Link href={"/courses"}
                            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                        >
                            View All courses
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
