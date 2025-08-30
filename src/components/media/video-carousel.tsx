import {useEffect, useRef} from "react"

interface VideoCarouselProps {
    videos: string[]
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        console.log("here");
        const carousel = carouselRef.current
        if (!carousel) return

        let animationId: number
        let startTime: number | null = null
        const duration = 30000 // 10 seconds for full loop
        const totalWidth = carousel.scrollWidth / 2 // Half because we duplicate contetanstack rnt

        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime
            const elapsed = currentTime - startTime
            const progress = (elapsed % duration) / duration
            const translateX = -(progress * totalWidth)

            carousel.style.transform = `translateX(${translateX}px)`
            animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId)
            }
        }
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden w-full h-full z-0 pointer-events-none">
            <div ref={carouselRef} className={"flex h-full"}>
                {/* First set of videos */}
                {videos.map((video, index) => (
                    <video key={index} className="h-full w-auto object-cover" autoPlay muted loop playsInline>
                        <source src={video} type="video/mp4" />
                    </video>
                ))}

                {/*/!* Duplicate set for seamless looping *!/*/}
                {videos.map((src, index) => (
                    <video key={`duplicate-${index}`} className="h-full w-auto object-cover" autoPlay muted loop playsInline>
                        <source src={src} type="video/mp4" />
                    </video>
                ))}
            </div>
        </div>
    )
}
