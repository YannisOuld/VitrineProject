import React from 'react'
import Cursor from "./Cursor";
import { useState } from 'react';

export default function Scene2() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='fixed top-32 right-0 left-0 text-center flex items-center justify-center'>
            <h1 onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }} className="text-[4.5vw] text-center text-white p-20">
                moving when you scroll</h1>
            <Cursor isActive={isActive} />
        </div>
    )
}