import React, { useEffect, useState } from 'react';

const Parallax = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-container" style={{ height: '100vh', width: '500px', overflow: 'hidden', margin: 0, display: 'flex', flexDirection: 'column' }}>
            <div className="parallax-layer" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
                <h1>hello</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!
                </p>
            </div>
            <div className="parallax-layer" style={{ transform: `translateY(${scrollY * -4}vh)`, backgroundColor: 'blue', zIndex: 1 }}>
                <h2>you</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!
                </p>
            </div>
            <div className="parallax-layer" style={{ transform: `translateY(${scrollY * -2}vh)`, backgroundColor: 'yellow', zIndex: 2, height: '100vh' }}>
                <h3>rocks !</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!
                </p>
            </div>
            <div className="parallax-layer" style={{ transform: `translateY(${scrollY * -4}vh)`, backgroundColor: 'yellow', zIndex: 2, height: '100vh' }}>
                <h3>rocks !</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fugit qui illum sed minima ratione beatae ipsa
                    quis consequatur a, facilis doloribus ex. Ipsa nihil magnam ullam deleniti sunt, optio vitae!
                </p>
            </div>
        </div>
    );
};

export default Parallax;