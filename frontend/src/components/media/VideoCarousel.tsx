import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const VideoCarousel = ({ videos, speed = 400 }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const motionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting && entry.boundingClientRect.left < 0) {
                    const newVideoEntry = document.createElement("video");
                    newVideoEntry.src = (entry.target as HTMLVideoElement).src;
                    newVideoEntry.muted = true;
                    newVideoEntry.autoplay = true;
                    newVideoEntry.loop = true;
                    newVideoEntry.id = "video-" + window.crypto.randomUUID();
                    newVideoEntry.className = "h-full";
                    observer.observe(newVideoEntry);
                    motionRef.current?.appendChild(newVideoEntry);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0 }
        );

        // @ts-ignore
        const videoEls = containerRef.current?.querySelectorAll("video");
        videoEls?.forEach((video) => observer.observe(video));

        return () => observer.disconnect();
    }, [videos]);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 overflow-hidden flex w-full h-full -z-10">
            <motion.div
                ref={motionRef}
                className="flex h-full"
                initial={{ x: 0 }}
                animate={{ x: "-1000%" }}
                transition={{ ease: "linear", duration: speed, repeat: Infinity }}
            >
                <>
                    {videos.map((video, index) => (
                        <video
                            key={index}
                            src={video}
                            muted
                            autoPlay
                            loop
                            className="h-full w-auto max-w-[2000px]"
                            id={`video-${window.crypto.randomUUID()}`}
                        />
                    ))}
                </>
            </motion.div>
        </div>
    );
};

export default VideoCarousel;
