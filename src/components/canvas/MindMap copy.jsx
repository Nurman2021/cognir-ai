// src/components/MindMap.js
import React, { useEffect, useRef } from 'react';

const MindMap = () => {
    const svgLineRef = useRef(null);
    const mindMapRef = useRef(null);

    useEffect(() => {
        const svgLine = svgLineRef.current;
        const mindMap = mindMapRef.current;

        const drawLines = (parent, children) => {
            const parentRect = parent.getBoundingClientRect();

            children.forEach((child) => {
                const childRect = child.getBoundingClientRect();

                const newLine = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                );
                newLine.classList.add("line", "deleteMe");
                const x1 = parentRect.left + parentRect.width / 2;
                const y1 = parentRect.top + parentRect.height / 2;
                const x2 = childRect.left + childRect.width / 2;
                const y2 = childRect.top + childRect.height / 2;
                const cx1 = x1 + (x2 - x1) / .75; // define the amount of curve
                const cy1 = y1;
                const pathData = `M${x1},${y1} Q${cx1},${cy1} ${x2},${y2}`;
                const clr = child.dataset.clr;
                newLine.setAttribute("d", pathData);
                newLine.style.stroke = `${clr}`;
                newLine.style.strokeWidth = "2px";
                newLine.style.strokeDasharray = "5,5";
                newLine.style.fill = "none";
                svgLine.appendChild(newLine);
            });
        };

        const renderMindMap = (element) => {
            document.querySelectorAll(".deleteMe").forEach((line) => line.remove());

            const traverseAndDrawLines = (parentElement) => {
                const children = Array.from(parentElement.children);
                children.forEach((child) => {
                    if (child.classList.contains('item')) {
                        drawLines(parentElement, [child]);
                        traverseAndDrawLines(child);
                    }
                });
            };
            traverseAndDrawLines(element);
        };

        const debounce = (func, wait) => {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    func.apply(this, args);
                }, wait);
            };
        };

        const lineDelay = 0;
        setTimeout(() => {
            renderMindMap(mindMap);

            window.addEventListener(
                "resize",
                debounce(() => {
                    renderMindMap(mindMap);
                }, 0)
            );
        }, lineDelay);
    }, []);

    return (
        <div className=" text-xl text-black tracking-wider flex justify-center items-center min-h-screen p-4
      before:bg-no-repeat
      before:-z-10">
            <main id="mindmap" ref={mindMapRef} className="relative w-full max-w-2xl h-96 
        [&_.item]:rounded-2xl
        [&_.item]:border-b-2
        [&_.item]:absolute
        [&_.item]:w-fit
        [&_.item]:text-center
        [&_.item]:whitespace-nowrap
        [&_.item]:py-2
        [&_.item]:px-4
        [&_.item]:z-10
        [&_.item]:transition-all
        [&_.item]:duration-300
        [&_.item]:ease-in-out
        [&_.item]:shadow-lg">
                <div scale-up className="[--order:1] item bg-white !rounded-2xl !py-4 !px-6 top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 !border-none" data-clr="#F59E0B">
                    <p className="font-bold [--order:1]">
                        COGNIR AI

                    </p>
                    <div scale-up data-clr="#F59E0B" className="[--order:2] item bg-amber-100 border-amber-500 max-[600px]:-top-40 max-[600px]:-left-0 -top-40 -left-32">
                        <p>Intuative</p>
                        <div scale-up data-clr="#F59E0B" className="[--order:2] item bg-amber-100 border-amber-500 max-[600px]:-top-16 max-[600px]:left-20 -top-12 left-32">
                            <p>Efficiency</p>
                        </div>
                    </div>
                    <div scale-up data-clr="#EF4444" className="[--order:3] item bg-red-100 border-red-500 max-[600px]:top-32 max-[600px]:left-12 top-32 -left-56">
                        <p>Memory & Retention</p>
                    </div>
                    <div scale-up data-clr="#22C55E" className="[--order:4] item bg-green-100 border-green-500 max-[600px]:-top-20 max-[600px]:right-0 -top-28 -right-20">
                        <p>Colaboration</p>
                    </div>
                    <div scale-up data-clr="#3B82F6" className="[--order:5] item bg-blue-100 border-blue-500 max-[600px]:top-72 max-[600px]:left-0 top-32 -right-20">
                        <p>Focus</p>
                        <div scale-up data-clr="#3B82F6" className="[--order:6] item bg-blue-100 border-blue-500 max-[600px]:-top-16 max-[600px]:left-20 -top-32 left-32">
                            <p>Free of clutter</p>
                        </div>
                        <div scale-up data-clr="#3B82F6" className="[--order:7] item bg-blue-100 border-blue-500 max-[600px]:top-32 max-[600px]:-left-6 top-0 left-36">
                            <p>Overview of the project</p>
                        </div>
                        <div scale-up data-clr="#3B82F6" className="[--order:8] item bg-blue-100 border-blue-500 max-[600px]:top-16 max-[600px]:left-16 top-20 -left-20">
                            <p>Free flow of ideas</p>
                        </div>
                    </div>
                </div>
            </main>
            <svg id="svg-lines" ref={svgLineRef} className="absolute inset-0 w-full h-full"></svg>
        </div>
    );
};

export default MindMap;