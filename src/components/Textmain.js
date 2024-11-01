"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export default function Textmain() {
    return (
        <>
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                >
                    Start your IT journey with us, We have {" "}
                    <Highlight className="text-black dark:text-white">
                        world best IT institute.
                    </Highlight>

                </motion.h1>
                <div className="mt-4">
                    <Link href={`/courses`}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"    
                        >
                        Explore Courses
                        </Button>
                    </Link>
                </div>
            </HeroHighlight>
        </>
    );
}
