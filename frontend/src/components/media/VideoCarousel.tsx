import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const VideoCarousel = ({ videos, speed = 50 }) => {
    const containerRef = useRef(null);
    const [videoList, setVideoList] = useState([...videos, ...videos]);

    useEffect(() => {
        const interval = setInterval(() => {
            setVideoList((prev) => [...prev.slice(1), prev[0]]);
        }, speed * 1000);
        return () => clearInterval(interval);
    }, [speed]);

    return (
        <div
            ref={containerRef}
            className="overflow-hidden flex w-full h-full absolute top-0 left-0 -z-10"
        >
            <motion.div
                className="flex h-full"
                initial={{ x: `-${parseInt(`${Math.random() * 100}`)}%` }}
                animate={{ x: "-1000%" }}
                transition={{ ease: "linear", duration: speed, repeat: Infinity }}
            >
                <>
                    {videoList.map((video, index) => (
                        <video
                            key={index}
                            src={video}
                            muted
                            autoPlay
                            loop
                        />
                    ))}
                </>
            </motion.div>
        </div>
    );
};

export default VideoCarousel;
