'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [eneable, setEneable] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const handleMove = (event: any) => {
      const { clientX, clientY } = event;
      setPosition({
        x: clientX,
        y: clientY
      });
    };

    if (eneable) {
      window.addEventListener('pointermove', handleMove)
    };

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [eneable])

  return (
    <main className="bg-slate-700 h-screen flex justify-center items-center">
      <div style={{
        position: 'absolute',
        backgroundColor: '#5439cc',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        width: 40,
        height: 40,
        top: -20,
        left: -20,
        cursor: 'none',
        transform: `translate(${position.x}px, ${position.y}px)`
      }} ></div>

      <button
        className="relative w-60 h-10 p-2 border-solid border-gray-400 border-2 rounded-md text-white"
        onClick={() => setEneable(!eneable)}
      >
        {eneable ? 'Desactivar' : 'Activar'} seguimiento
      </button>
    </main>
  )
}
