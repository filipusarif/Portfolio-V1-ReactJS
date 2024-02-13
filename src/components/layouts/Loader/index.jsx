import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';

export default function Loader({ onComplete }) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Set initial z-index to 50
      gsap.set(comp.current, { zIndex: 50 });

      const t1 = gsap.timeline();
      t1.from(["#text-1", "#text-2", '#text-3', '#text-4', '#text-5'], {
        opacity: 0,
        y: "+=30",
        stagger: 0.2,
      }).to(["#text-1", "#text-2", '#text-3', '#text-4', '#text-5'], {
        opacity: 0,
        y: "+=30",
        delay: 1,
        stagger: 0.2,
        onComplete: () => {
          // Notify the parent component
          onComplete();
        },
      }).to("#loader", {
        xPercent: "-100",
        duration: 1.1,
        onComplete: () => {
            // Set z-index to 0 after animation completion
            gsap.to(comp.current, { zIndex: 0, duration: 0 });
        }
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed w-screen h-screen overflow-hidden" ref={comp}>
      <div className="h-screen w-screen bg-secondary flex items-center justify-center gap-1 lg:gap-3 font-Poppins absolute z-50 font-extrabold text-very-light text-[20px] lg:text-[50px]"
        id="loader">
        <h1 id="text-1">Hello👋,</h1>
        {/* <h1 id="text-2"></h1> */}
        <h1 id="text-3">Filipus</h1>
        <h1 id="text-4">Arif</h1>
        <h1 id="text-5">Here</h1>
      </div>
    </div>
  );
}
