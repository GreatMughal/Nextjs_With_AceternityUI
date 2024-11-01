"use client";;
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "../data/courses.json"
import Link from "next/link";

export default function FeaturedCard() {
    const featuredCourse = courseData.courses.filter((course) =>  course.isFeatured )
    return (
        (<div className="grid bg-gray-900 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourse.map((course) => (
                <div key={course.id} className="flex bg-gray-900 justify-center">
                    <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-gray-900 overflow-hidden h-full max-w-sm">
                        <div className="p-4 sm:p-6 flex flex-col items-center  text-center flex-grow">
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                            <Link href={`/courses/${course.slug}`}>
                                Learn More
                            </Link>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}
        </div>)
    );
}
