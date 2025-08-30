import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface VideoCarouselProps {
    videos: string[];
    speed?: number;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos, speed = 2 }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [contentWidth, setContentWidth] = useState<number>(0);

    // Calculate the total content width when videos are loaded
    useEffect(() => {
        if (!containerRef.current) return;

        const updateWidths = () => {
            if (!containerRef.current) return;

            // Get the container width
            const containerWidth = containerRef.current.offsetWidth;
            setContainerWidth(containerWidth);

            // Estimate the content width based on videos (assuming 16:9 aspect ratio)
            // In a real app, you'd want to measure the actual rendered videos
            const videoElements = containerRef.current.querySelectorAll("video");
            let totalWidth = 0;

            videoElements.forEach((video) => {
                totalWidth += video.offsetWidth;
            });

            setContentWidth(totalWidth);
        };

        // Update on load and resize
        updateWidths();
        window.addEventListener("resize", updateWidths);

        // First update might not get accurate sizes if videos aren't loaded yet
        // So we add another check after a short delay
        const timer = setTimeout(updateWidths, 1000);

        return () => {
            window.removeEventListener("resize", updateWidths);
            clearTimeout(timer);
        };
    }, [videos]);

    // Calculate the animation duration based on content width
    const duration = contentWidth > 0 ? (contentWidth / 100) * speed : speed;

    // Ensure container takes full height
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.height = "100%";
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden w-full h-full z-0 pointer-events-none"
        >
            {videos.length > 0 && (
                <motion.div
                    className="flex h-full"
                    initial={{ x: 0 }}
                    animate={{ x: contentWidth > containerWidth ? -contentWidth : 0 }}
                    transition={{
                        ease: "linear",
                        duration: duration,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    {/* Original videos */}
                    {videos.map((video, index) => (
                        <video
                            key={`original-${index}`}
                            src={video}
                            muted
                            autoPlay
                            loop
                            playsInline
                            className="h-full w-auto object-cover"
                        />
                    ))}

                    {/* Duplicated videos to ensure smooth looping */}
                    {contentWidth > containerWidth && videos.map((video, index) => (
                        <video
                            key={`duplicate-${index}`}
                            src={video}
                            muted
                            autoPlay
                            loop
                            playsInline
                            className="h-full w-auto object-cover"
                        />
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default VideoCarousel;