import React from "react";
import { FlipWords } from "./ui/flip-words";

export default function FeaturedText() {
    const words = ["high paying", "better", "modern", "organized"];

    return (
        (<div className="h-40 flex justify-center bg-gray-900 items-center px-4">
            <div
                className="text-4xl mx-auto font-normal bg-gray-900 text-neutral-600 dark:text-neutral-400">
                Build
                <FlipWords words={words} /> <br />
                future with our Featured courses.
            </div>
        </div>)
    );
}
