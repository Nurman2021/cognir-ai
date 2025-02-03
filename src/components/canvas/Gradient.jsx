import React, { useEffect, useRef, useState } from 'react';

const Gradient = () => {
    const leftItems = ['Accessibility', 'JavaScript Functions', 'React', 'Networking', 'Data structures & algorithms'];
    const centerItems = ['GFE 75', 'Blind 75', 'Front end system design'];
    const rightItems = ['Front end system design', 'DOM manipulation', 'Internationalization', 'User interfaces', 'Performance'];

    // Refs untuk elemen mind map
    const leftRefs = useRef([]);
    const centerRefs = useRef([]);
    const rightRefs = useRef([]);
    const centerRef = useRef(null);

    // State untuk menyimpan koordinat
    const [lines, setLines] = useState([]);

    useEffect(() => {
        if (!centerRef.current) return;

        const centerBox = centerRef.current.getBoundingClientRect();
        const newLines = [];

        // Fungsi untuk mendapatkan koordinat tengah elemen
        const getMidpoint = (el) => {
            if (!el) return null;
            const rect = el.getBoundingClientRect();
            return {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            };
        };

        // Buat garis dari kiri ke tengah
        leftRefs.current.forEach((el) => {
            if (el) {
                const start = getMidpoint(el);
                const end = { x: centerBox.left + centerBox.width / 2, y: centerBox.top + centerBox.height / 2 };
                if (start) newLines.push({ start, end, colorFrom: '#ffaa40', colorTo: '#e4fe71' });
            }
        });

        // Buat garis dari kanan ke tengah
        rightRefs.current.forEach((el) => {
            if (el) {
                const start = getMidpoint(el);
                const end = { x: centerBox.left + centerBox.width / 2, y: centerBox.top + centerBox.height / 2 };
                if (start) newLines.push({ start, end, colorFrom: '#ffaa40', colorTo: '#e4fe71' });
            }
        });

        setLines(newLines);
    }, []);

    return (
        <div className="relative flex h-fit w-full items-center justify-center">
            {/* Kontainer utama */}
            <div className="relative flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between">
                {/* Bagian kiri */}
                <div className="flex flex-wrap items-center justify-center gap-2 md:flex-col md:items-start">
                    {leftItems.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (leftRefs.current[index] = el)}
                            className="relative flex items-center justify-center p-2 text-xs font-medium text-neutral-700 bg-white border border-neutral-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-800"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Bagian tengah */}
                <div ref={centerRef} className="relative z-10 p-3 bg-white border border-neutral-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-800">
                    {centerItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 px-3 py-2 border border-neutral-200 rounded-lg dark:border-neutral-800">
                            <div className="flex items-center justify-center w-6 h-6 text-xs font-medium text-neutral-500 bg-neutral-50 border border-neutral-200 rounded-full dark:bg-neutral-800/40 dark:border-neutral-800">
                                {index + 1}
                            </div>
                            <div className="text-xs font-medium lg:text-base">{item}</div>
                        </div>
                    ))}
                </div>

                {/* Bagian kanan */}
                <div className="flex flex-wrap-reverse items-center justify-center gap-2 md:flex-col md:items-end">
                    {rightItems.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (rightRefs.current[index] = el)}
                            className="relative flex items-center justify-center p-2 text-xs font-medium text-neutral-700 bg-white border border-neutral-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-800"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* SVG Garis */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {lines.map((line, index) => (
                    <React.Fragment key={index}>
                        <defs>
                            <linearGradient id={`gradient-${index}`} x1="0%" x2="100%" y1="0%" y2="0%">
                                <stop stopColor={line.colorFrom} stopOpacity="0"></stop>
                                <stop stopColor={line.colorFrom}></stop>
                                <stop offset="50%" stopColor={line.colorTo}></stop>
                                <stop offset="100%" stopColor={line.colorTo} stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                        <path
                            d={`M ${line.start.x},${line.start.y} Q ${(line.start.x + line.end.x) / 2},${(line.start.y + line.end.y) / 2} ${line.end.x},${line.end.y}`}
                            stroke={`url(#gradient-${index})`}
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </React.Fragment>
                ))}
            </svg>
        </div>
    );
};

export default Gradient;
