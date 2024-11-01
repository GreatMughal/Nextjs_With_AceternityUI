"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

const page = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-black py-12 pt-36 relative">
            {' '}
            {/* Ensure the container is relative */}
            {/* BackgroundBeams with adjusted z-index */}
            <BackgroundBeamsWithCollision className="absolute top-0 left-0 w-full h-full z-0" />
            {/* Content with higher z-index */}
            <div className="max-w-2xl bg-transparent mx-auto p-4 relative z-10">
                <div
                    className="max-w-2xl bg-transparent mx-auto relative z-10">
                    <h1 className="text-lg md:text-7xl bg-transparent text-center font-sans font-bold mb-8 text-white">
                        Contact Us
                    </h1>
                    <p className="text-neutral-500 bg-transparent max-w-lg mx-auto my-2 text-sm text-center">
                        We&apos;re here to help with any questions about our courses,
                        programs, or events. Reach out and let us know how we can assist you
                        in your musical journey.
                    </p>
                    <form className="my-8 bg-transparent" onSubmit={handleSubmit}>
                        <LabelInputContainer className="mb-4 bg-transparent">
                            <Label htmlFor="email" className="bg-transparent">Email Address</Label>
                            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4 bg-transparent">
                            <Label htmlFor="message" className="bg-transparent">Message</Label>
                            <Input id="message" placeholder="Enter Message here" type="text" />
                        </LabelInputContainer>

                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit">
                            Sign up &rarr;
                            <BottomGradient />
                        </button>

                        <div
                            className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (<>
        <span
            className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span
            className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>);
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        (<div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>)
    );
}

export default page
