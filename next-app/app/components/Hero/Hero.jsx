"use client";
import React, { useRef } from 'react';
import './Hero.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ currentProductIndex }) => {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // Tablet/Mobile treated as small
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Desktop: Move Right (350px) to clear text. Mobile: Stay Center (0px).
    const xRange = isMobile ? [0, 0] : [0, 350];
    // Mobile: Shrink image (scale 0.6) to fit better while scrolling.
    const scaleRange = isMobile ? [1, 0.6] : [1, 1];

    // Aggressive parallax: move the image down nearly as fast as the scroll to keep it centered
    const y = useTransform(scrollY, [0, 800], [0, 650]);
    const x = useTransform(scrollY, [0, 800], xRange);
    const scale = useTransform(scrollY, [0, 800], scaleRange);

    return (
        <section className="hero" ref={ref}>
            <div className="hero-container">
                <motion.div
                    className="hero-text-layer"
                    style={{ y: useTransform(scrollY, [0, 500], [0, -300]) }} // Move text UP faster
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="top-text">FINNGER LICKIN'</h2>
                    <h1 className="main-text">GOOD</h1>
                </motion.div>

                <motion.img
                    src="/images/chicken.png"
                    alt="KFC Chicken"
                    className="hero-image"
                    style={{ y, x, scale }}
                    initial={{ y: 200, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: currentProductIndex === 0 ? 1 : 0 // Hide if not 1st product!
                    }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
                />
            </div>

            {/* Optional bottom gradient to blend into next section */}
            <div className="hero-gradient-bottom"></div>
        </section>
    );
};

export default Hero;
