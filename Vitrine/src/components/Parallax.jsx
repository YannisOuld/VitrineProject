import React, { useRef } from "react";
import Picture1 from "../../src/assets/stairs.jpg";
import Picture2 from "../../src/assets/moon.png";
import Picture3 from "../../src/assets/clouds.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
    const container = useRef(null);

    const word = "with framer-motion";

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -600]);

    const images = [
        {
            src: Picture1,
            y: 0,
        },

        {
            src: Picture2,
            y: md,
        },

        {
            src: Picture3,
            y: lg,
        },
    ];

    return (
        <div
            ref={container}
            className=" w-200px  flex flex-col justify-center absolute"
        >

            <motion.h1 style={{ y: sm }} className="relative">
                Parallax
            </motion.h1>

            <h1>Scroll</h1>

            <div className="relative">
                <p className="text-lg font-bold relative">
                    {word.split("").map((letter, i) => {
                        const y = useTransform(
                            scrollYProgress,
                            [0, 1],
                            [0, Math.floor(Math.random() * -75) - 25]
                        );

                        return (
                            <motion.span style={{ top: y }} key={`l_${i}`}>
                                {letter}
                            </motion.span>
                        );
                    })}
                </p>
            </div>
            <div className="w-full relative mt-24 ">
                {images.map(({ src, y }, i) => {
                    return (
                        <motion.div
                            style={{ y }}
                            key={`i_${i}`}
                            className="relative z-10 w-full"
                        >
                            <img src={src} placeholder="blur" alt="image" style={{ zIndex: `${i}` }} className="flex w-2/3 object-cover justify-center relative mt-1 " />
                        </motion.div>
                    );
                })}
            </div>

        </div>
    );
};

export default Parallax;
