'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Clientlogo = () => {
  return (
    <div className="relative bg-gray-100 py-12 -mt-8 z-20 overflow-hidden w-full">
      {/* <div className="absolute inset-0 bg-black/20"></div> */}
      <div className="relative z-10 overflow-hidden w-full">
        {/* Outer wrapper to limit overflow */}
        <motion.div
          className="flex min-w-max gap-16 px-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          {/* Duplicate logos for seamless scroll */}
          {[1, 2].map((_, i) => (
            <div key={i} className="flex space-x-16 items-center">
              {/* Nielsen */}
              <div className="flex justify-center transform hover:scale-105 transition-transform duration-200">
                <div className="text-lg font-light text-gray-800 text-center">
                  <span className="font-serif italic text-xs">The</span><br />
                  <span className="font-bold tracking-wider text-sm">NIELSEN</span><br />
                  <span className="text-xs tracking-wide opacity-70">PREMIUM RESIDENCES</span>
                </div>
              </div>

              {/* Nicholas */}
              <div className="flex justify-center transform hover:scale-105 transition-transform duration-200">
                <div className="text-xl font-bold text-gray-800" style={{ fontFamily: 'serif' }}>
                  Nicholas
                </div>
              </div>

              {/* Belmont */}
              <div className="flex justify-center transform hover:scale-105 transition-transform duration-200">
                <div className="text-lg font-bold text-gray-800 text-center">
                  <span className="text-xl">B</span>elmont<br />
                  <span className="text-xs font-normal tracking-wide opacity-70">TRADITIONAL LUXURY & LIFESTYLE</span>
                </div>
              </div>

              {/* Ramier */}
              <div className="flex justify-center transform hover:scale-105 transition-transform duration-200">
                <div className="text-xl text-gray-800" style={{ fontFamily: 'serif' }}>
                  <span className="italic">Ramier</span>
                </div>
              </div>

              {/* Urbane */}
              <div className="flex justify-center transform hover:scale-105 transition-transform duration-200">
                <div className="text-center text-gray-800">
                  <div className="text-xs font-light mb-1">∞</div>
                  <div className="text-sm font-bold tracking-wider">URBANE</div>
                  <div className="text-xs tracking-wide opacity-70">DESIGN & CONSULTING</div>
                </div>
              </div>

              {/* Blast */}
              <div className="flex justify-center transform hover:scale-105 transition-transform duration-200">
                <div className="text-center text-gray-800">
                  <div className="text-xs font-light mb-1 opacity-70">CREATIVE TEAM</div>
                  <div className="text-lg font-bold tracking-wider">BLAST</div>
                  <div className="text-xs tracking-wide opacity-70">PREMIUM</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Clientlogo;
