"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
    const testimonials = [
        {
            quote:
                "In the world of technology, innovation is the heartbeat that drives progress.",
            name: "Charles Dickens",
            title: "Python Student",
        },
        {
            quote:
                "Code is like humor. When you have to explain it, it's bad.",
            name: "Cory House",
            title: "Kotlin Student",
        },
        {
            quote:
                "Technology is best when it brings people together.",
            name: "Matt Mullenweg",
            title: "React Student",
        },
        {
            quote:
                "The greatest risk is not taking one. In IT, standing still is falling behind.",
            name: "John Doe",
            title: "Java Student",
        },
        {
            quote:
                "Data is the new oil, and analytics is the refinery.",
            name: "Huxn",
            title: "JavaScript Student",
        }
    ]
    return (
        <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold bg-transparent text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full bg-transparent max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
