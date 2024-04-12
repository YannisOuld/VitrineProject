import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxComponent = () => {
    return (
        <div>
            <Parallax bgImage="image1.jpg" strength={500}>
                <div style={{ height: 500 }}>
                    {/* Content for the first parallax component */}
                </div>
            </Parallax>
            <Parallax bgImage="image2.jpg" strength={500}>
                <div style={{ height: 500 }}>
                    {/* Content for the second parallax component */}
                </div>
            </Parallax>
            <Parallax bgImage="image3.jpg" strength={500}>
                <div style={{ height: 500 }}>
                    {/* Content for the third parallax component */}
                </div>
            </Parallax>
        </div>
    );
};

export default ParallaxComponent;