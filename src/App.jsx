


// import React, { useEffect, useRef, useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import Typed from "typed.js";
// import "react-alice-carousel/lib/alice-carousel.css";

// /* -------------------------
//    Countdown Timer (10 hours)
// ------------------------- */
// const TEN_HOURS_SECONDS = 10 * 60 * 60;

// function CountdownTimer({ initialSeconds = TEN_HOURS_SECONDS }) {
//   const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setSecondsLeft((prev) => (prev <= 1 ? 0 : prev - 1));
//     }, 1000);

//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const format = (s) => {
//     const hh = String(Math.floor(s / 3600)).padStart(2, "0");
//     const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
//     const ss = String(s % 60).padStart(2, "0");
//     return `${hh}:${mm}:${ss}`;
//   };

//   return (
//     <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 backdrop-blur rounded-2xl">
//       <span className="text-base sm:text-lg text-gray-300">Time left</span>
//       <span className="text-xl sm:text-2xl font-mono font-semibold text-white">
//         {secondsLeft > 0 ? format(secondsLeft) : "We're Live!"}
//       </span>
//     </div>
//   );
// }

// /* -------------------------
//    Typed Heading
// ------------------------- */
// function TypedHeading() {
//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ["Big Project Coming Soon"],
//       typeSpeed: 100,
//       backSpeed: 100,
//       showCursor: false,
//       loop: true,
//     });

//     return () => typed.destroy();
//   }, []);

//   return (
//     <h1 className="leading-tight mb-4">
//       <span
//         ref={el}
//         className="
//           text-4xl sm:text-5xl md:text-6xl lg:text-7xl
//           font-extrabold
//           bg-gradient-to-r from-purple-600 to-pink-600
//           bg-clip-text text-transparent
//         "
//       />
//     </h1>
//   );
// }

// /* -------------------------
//    Carousel Items
// ------------------------- */
// const carouselHeight =
//   "h-[300px] sm:h-[420px] md:h-[520px] lg:h-[620px] xl:h-[680px]";

// const slides = [
//   { src: "/chat.jpeg", title: "AI Chat Assistant" },
//   { src: "/web.jpeg", title: "Website Builder" },
//   { src: "/code.jpeg", title: "AI Code Generator" },
//   { src: "/img.jpeg", title: "Background Remover" },
//   { src: "/bg.jpeg", title: "Image Converter" },
// ];

// const items = slides.map((slide, i) => (
//   <div
//     key={i}
//     className={`w-full ${carouselHeight} flex items-center justify-center px-3 sm:px-6`}
//   >
//     <div className="relative w-full h-full rounded-2xl bg-black/40 backdrop-blur-xl border border-purple-500/20 shadow-[0_0_45px_rgba(168,85,247,0.25)] p-4 sm:p-8">
//       <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 text-sm sm:text-lg font-semibold">
//         {slide.title}
//       </div>

//       <img
//         src={slide.src}
//         alt={slide.title}
//         className="w-full h-full object-contain rounded-xl"
//       />
//     </div>
//   </div>
// ));

// function MainCarousel() {
//   return (
//     <AliceCarousel
//       items={items}
//       autoPlay
//       autoPlayInterval={3000}
//       animationDuration={800}
//       infinite
//       mouseTracking
//       disableButtonsControls={false}
//       disableDotsControls={false}
//     />
//   );
// }

// /* -------------------------
//    App Layout
// ------------------------- */
// export default function App() {
//   const handleNotify = () => {
//     alert(
//       "🚀 Thank you for your interest!\n\n" +
//         "We’ll notify you very soon about this BIG upcoming project.\n\n" +
//         "Stay tuned — something amazing is on the way! ✨"
//     );
//   };

//   return (
//     <div className="min-h-screen bg-[#0C0C17] text-white flex items-center">
//       <div
//         className="
//           w-full max-w-[1700px] mx-auto
//           grid grid-cols-12 gap-6 items-center
//           px-4 sm:px-6 lg:px-8
//         "
//       >
//         {/* LEFT CONTENT */}
//         <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-start">
//           <div className="max-w-[520px] w-full text-center lg:text-left">
//             <TypedHeading />

//             <p
//               className="
//                 text-gray-300 mb-6
//                 text-base sm:text-lg md:text-xl lg:text-2xl
//                 font-bold leading-relaxed
//               "
//             >
//               One AI Infinite Creation
//               <br />
//               Chat intelligently, build websites instantly, and transform images
//               effortlessly.
//               <br />
//               Powered by{" "}
//               <span className="text-purple-400 font-semibold">Gemini AI</span>
//               <span className="text-gray-300"> Launching soon.</span>
//             </p>

//             <div className="mb-6 flex justify-center lg:justify-start">
//               <CountdownTimer />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3">
//               <input
//                 type="email"
//                 placeholder="Enter your email to get notified"
//                 className="
//                   w-full flex-1 px-4 py-3 rounded-xl
//                   bg-white/5 border border-white/10
//                   text-white placeholder-gray-400 outline-none
//                   focus:ring-2 focus:ring-purple-500
//                 "
//               />
//               <button
//                 onClick={handleNotify}
//                 className="
//                   w-full sm:w-auto
//                   px-6 py-3 rounded-xl
//                   bg-purple-600 hover:bg-purple-700
//                   text-white font-semibold
//                 "
//               >
//                 Notify Me
//               </button>
//             </div>

//             <p className="text-sm text-gray-400 mt-4">
//               Follow us for more updates
//             </p>
//           </div>
//         </div>

//         {/* RIGHT CAROUSEL */}
//         <div className="col-span-12 lg:col-span-7 flex justify-center lg:justify-end items-center">
//           <div className="w-full lg:-mr-6">
//             <div className="relative lg:-mt-6">
//               <MainCarousel />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Typed from "typed.js";
import "react-alice-carousel/lib/alice-carousel.css";

/* -------------------------
   Countdown Timer (9–10 hours RANDOM)
------------------------- */
const RANDOM_9_TO_10_HOURS_SECONDS =
  Math.floor(9 * 60 * 60 + Math.random() * 60 * 60);

function CountdownTimer({ initialSeconds = RANDOM_9_TO_10_HOURS_SECONDS }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const format = (s) => {
    const hh = String(Math.floor(s / 3600)).padStart(2, "0");
    const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  return (
    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white/5 backdrop-blur rounded-lg">
      <span className="text-xs text-gray-300">Time left</span>
      <span className="text-base font-mono font-semibold text-white">
        {secondsLeft > 0 ? format(secondsLeft) : "We're Live!"}
      </span>
    </div>
  );
}

/* -------------------------
   Typed Heading
------------------------- */
function TypedHeading() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Big Project Coming Soon"],
      typeSpeed: 85,
      backSpeed: 75,
      showCursor: false,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <h1 className="leading-tight mb-3">
      <span
        ref={el}
        className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-extrabold
          bg-gradient-to-r from-purple-600 to-pink-600
          bg-clip-text text-transparent
        "
      />
    </h1>
  );
}

/* -------------------------
   Carousel Items
------------------------- */
const carouselHeight =
  "h-[210px] sm:h-[300px] md:h-[380px] lg:h-[460px] xl:h-[520px]";

const slides = [
  { src: "/chat.jpeg", title: "AI Chat Assistant" },
  { src: "/web.jpeg", title: "Website Builder" },
  { src: "/code.jpeg", title: "AI Code Generator" },
  { src: "/img.jpeg", title: "Background Remover" },
  { src: "/bg.jpeg", title: "Image Converter" },
];

const items = slides.map((slide, i) => (
  <div
    key={i}
    className={`w-full ${carouselHeight} flex items-center justify-center px-2`}
  >
    <div className="relative w-full h-full rounded-lg bg-black/40 backdrop-blur-xl border border-purple-500/20 shadow-[0_0_24px_rgba(168,85,247,0.18)] p-8">
      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-purple-600/20 text-purple-300 text-[11px] font-semibold">
        {slide.title}
      </div>

      <img
        src={slide.src}
        alt={slide.title}
        className="w-full h-full object-contain rounded-md"
      />
    </div>
  </div>
));

function MainCarousel() {
  return (
    <AliceCarousel
      items={items}
      autoPlay
      autoPlayInterval={2800}
      animationDuration={650}
      infinite
      mouseTracking
      disableButtonsControls={false}
      disableDotsControls={false}
    />
  );
}

/* -------------------------
   App Layout
------------------------- */
export default function App() {
  const handleNotify = () => {
    alert(
      "🚀 Thank you for your interest!\n\n" +
        "We’ll notify you very soon about this BIG upcoming project.\n\n" +
        "Stay tuned — something amazing is on the way! ✨"
    );
  };

  return (
    <div className="min-h-screen bg-[#0C0C17] text-white flex items-center">
      <div
        className="
          w-full max-w-[1320px] mx-auto
          grid grid-cols-12 gap-3 items-center
          px-4 sm:px-5 lg:px-6
          lg:scale-[0.92] origin-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-start">
          <div className="max-w-[440px] w-full text-center lg:text-left">
            <TypedHeading />

            <p className="text-gray-300 mb-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-relaxed">
              One AI Infinite Creation
              <br />
              Chat intelligently, build websites instantly, and transform images
              effortlessly.
              <br />
              Powered by{" "}
              <span className="text-purple-400 font-semibold">Gemini AI</span>
              <span className="text-gray-300"> — Launching soon.</span>
            </p>

            <div className="mb-4 flex justify-center lg:justify-start">
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                placeholder="Enter your email to get notified"
                className="
                  w-full flex-1 px-3.5 py-2.5 rounded-lg
                  bg-white/5 border border-white/10
                  text-white placeholder-gray-400 outline-none
                  focus:ring-2 focus:ring-purple-500
                "
              />
              <button
                onClick={handleNotify}
                className="
                  w-full sm:w-auto
                  px-5 py-2.5 rounded-lg
                  bg-purple-600 hover:bg-purple-700
                  text-white font-semibold
                "
              >
                Notify Me
              </button>
            </div>

            <p className="text-[11px] text-gray-400 mt-3">
              Follow us for more updates
            </p>
          </div>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="col-span-12 lg:col-span-7 flex justify-center lg:justify-end items-center">
          <div className="w-full overflow-hidden relative">
            <MainCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

