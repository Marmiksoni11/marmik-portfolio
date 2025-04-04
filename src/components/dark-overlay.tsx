'use client';

import React from 'react';

export default function DarkBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'rgba(0,0,0,0.85)', 
      }}
    />
  );
}