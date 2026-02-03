"use client";
import React, { useState } from 'react';
import './Product.css';
import { motion, AnimatePresence } from 'framer-motion';

export const menu = [
    {
        name: 'Smoky Red Wings',
        shortName: 'WINGS',
        subtext: 'Fiery. Juicy. Perfectly grilled.',
        description: 'Dig into KFC’s Smoky Red Wings — flame-grilled to smoky perfection, coated with a blend of bold Indian spices, and bursting with juicy flavor in every bite.',
        image: '/images/chicken.png',
        imageWidth: '600px',
        imageHeight: 'auto',
        gradient: 'linear-gradient(to bottom, #541212 70%, #6F1818 55%)',
        backgrounds: [
            { src: '/images/c3.png', width: '400px', height: '400px', top: '-100px', left: '-100px' },
            { src: '/images/c2.png', width: '400px', height: '400px', top: '-14%', left: '82%' },
            { src: '/images/c1.png', width: '400px', height: '400px', top: '-180px', left: '40%' },
            { src: '/images/c3.png', width: '400px', height: '400px', top: '67%', left: '76%' },
            { src: '/images/c2.png', width: '400px', height: '400px', top: '70%', left: '-8%' },
            { src: '/images/c1.png', width: '400px', height: '400px', top: '70%', left: '590px' },
        ]
    },
    {
        name: 'Crispy Popcorn',
        shortName: 'POPPY',
        subtext: 'Crunchy. Juicy. Irresistible.',
        description: 'Bite-sized bursts of crispy perfection! KFC’s Chicken Popcorn delivers that iconic crunch with tender, juicy chicken in every piece — your favorite snack just got even better.',
        image: '/images/popcorn.png',
        imageWidth: '530px',
        imageHeight: '580px',
        gradient: 'linear-gradient(to bottom,   #B5631F 70%, #D47A26 55%)',
        backgrounds: [
            { src: '/images/p1.png', width: '400px', height: '400px', top: '-2%', left: '-8%' },
            { src: '/images/p2.png', width: '400px', height: '400px', top: '-4%', left: '80%' },
            { src: '/images/p3.png', width: '400px', height: '400px', top: '-8%', left: '40%' },
            { src: '/images/p1.png', width: '400px', height: '400px', top: '70%', left: '70%' },
            { src: '/images/p2.png', width: '400px', height: '400px', top: '60%', left: '30%' },
            { src: '/images/p3.png', width: '400px', height: '400px', top: '70%', left: '0' },
        ]
    },
    {
        name: 'Smoky Burger',
        shortName: 'BURGY',
        subtext: 'Bold. Juicy. Irresistible.',
        description: 'Sink your teeth into the ultimate burger — flame-grilled, smoky, and stacked with juicy layers of flavor. Every bite is pure satisfaction.',
        image: '/images/burger.png',
        imageWidth: '560px',
        imageHeight: '650px',
        gradient: 'linear-gradient(to bottom, #000000 70%, #1A1A1A 55%)',
        backgrounds: [
            { src: '/images/b1.png', width: '400px', height: '400px', top: '-150px', left: '1%' },
            { src: '/images/b3.png', width: '400px', height: '400px', top: '-9%', left: '75%' },
            { src: '/images/b2.png', width: '400px', height: '400px', top: '-15%', left: '43%' },
            { src: '/images/b1.png', width: '400px', height: '400px', top: '70%', left: '-2%' },
            { src: '/images/b3.png', width: '400px', height: '400px', top: '70%', left: '72%' },
            { src: '/images/b2.png', width: '400px', height: '400px', top: '77%', left: '40%' },
        ]
    },
    {
        name: 'Chocolate Mud Cake',
        shortName: 'CAKEY',
        subtext: 'Rich. Gooey. Decadent.',
        description: 'Dive into pure indulgence — a warm, gooey chocolate mud cake topped with rich cocoa bliss. Perfectly moist, deeply chocolatey, and impossible to stop at one bite.',
        image: '/images/choco.png',
        imageWidth: '660px',
        imageHeight: '650px',
        gradient: 'linear-gradient(to bottom, #2B0A0A 70%, #4E1E1E 30%)',
        backgrounds: [
            { src: '/images/ch1.png', width: '400px', height: '400px', top: '-60px', left: '-7%' },
            { src: '/images/ch2.png', width: '400px', height: '400px', top: '-9%', left: '80%' },
            { src: '/images/ch3.png', width: '400px', height: '400px', top: '-10%', left: '40%' },
            { src: '/images/ch1.png', width: '400px', height: '400px', top: '72%', left: '80%' },
            { src: '/images/ch2.png', width: '400px', height: '400px', top: '72%', left: '5%' },
            { src: '/images/ch3.png', width: '400px', height: '400px', top: '68%', left: '34%' },
        ]
    }
];

const Product = ({ currentProductIndex = 0, onNext, onPrev }) => {
    // Determine direction for animation based on simple toggle or passed logic? 
    // Simplified: layout doesn't need prev/next logic if we just render 'current' 
    // BUT animations need direction. 
    // Since we only get 'current', we can guess direction or assume logic is outside.
    // For simplicity, let's keep it clean: render current.

    // We can infer prev simply by (current - 1). 

    // NOTE: Page handles navigation.
    const current = currentProductIndex;
    const prevIndex = (current - 1 + menu.length) % menu.length; // Approximate for gradient
    const drink = menu[current];

    // Simple handler wrappers
    const handleNextBtn = () => {
        if (onNext) onNext();
    };

    const handlePrevBtn = () => {
        if (onPrev) onPrev();
    };

    return (
        <div className="product">
            <div className="gradient-wrapper">
                <div
                    className="product-gradient"
                    style={{ background: menu[prevIndex].gradient }}
                />

                <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                        key={current + '-gradient'}
                        className="product-gradient"
                        style={{ background: menu[current].gradient }}
                        initial={{ opacity: 0, zIndex: 1 }}
                        animate={{ opacity: 1, zIndex: 2 }}
                        exit={{ opacity: 0, zIndex: 1 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
            </div>

            <div className="product-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={drink.name + '-heading'}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <h1 className="drink-title">{drink.name}</h1>
                        <h3 className="drink-subtext">{drink.subtext}</h3>
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.p
                        key={drink.name + '-desc'}
                        className="product-text"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {drink.description}
                    </motion.p>
                </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
                <motion.img
                    key={drink.name + '-img'}
                    src={drink.image}
                    alt={drink.name}
                    className="product-img"
                    initial={{ y: 200, opacity: 0, scale: 0.8 }}
                    animate={{
                        y: 0,
                        opacity: current === 0 ? 0 : 1, // Only hide the image if it matches the Hero image (1st item)
                        scale: 1
                    }}
                    exit={{ y: -200, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                />
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {drink.backgrounds.map((bg, index) => {
                    const isTop = index < 3;
                    return (
                        <motion.img
                            key={drink.name + '-bg-' + index}
                            src={bg.src}
                            alt=""
                            className={`bg bg${index}`}
                            style={{
                                top: bg.top,
                                left: bg.left,
                            }}
                            initial={{ y: isTop ? -200 : 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 0.4 }}
                            exit={{ y: isTop ? -200 : 200, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        />
                    );
                })}
            </AnimatePresence>

            <div className="arrows">
                <button className="arrow left" onClick={handlePrevBtn}>↑</button>
                <button className="arrow right" onClick={handleNextBtn}>↓</button>
            </div>
        </div>
    );
};

export default Product;
