"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Spotlight } from '@/components/ui/Spotlight'

const page = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        (
            
            <div>
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-40" fill="white" />
                <div
                    className="max-w-2xl bg-transparent mx-auto py-12 pt-36 relative z-10">
                    <h1 className="text-lg md:text-7xl bg-transparent text-center font-sans font-bold mb-8 text-white">
                        Login
                    </h1>
                    <p className="text-neutral-600 text-sm bg-transparent max-w-sm mt-2 dark:text-neutral-300">
                        Login to our web if you want to become successful developer.
                    </p>
                    <form className="my-8 bg-transparent" onSubmit={handleSubmit}>
                        <div
                            className="flex flex-col bg-transparent md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" placeholder="Tyler" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname" >Last name</Label>
                                <Input id="lastname" placeholder="Durden" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4 bg-transparent">
                            <Label htmlFor="email" >Email Address</Label>
                            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4 bg-transparent">
                            <Label htmlFor="password" >Password</Label>
                            <Input id="password" placeholder="••••••••" type="password" />
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
        )
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
