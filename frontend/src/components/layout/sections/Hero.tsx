import { Award } from "lucide-react"
import {CallToActionResponse} from "@/endpoints/bellemansSchemas";
import {Link} from "@tanstack/react-router";
import VideoCarousel from "@/components/media/video-carousel";

type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
  callToAction?: CallToActionResponse;
  videos: string[];
}

export default function Hero({title, subtitle, description, callToAction, videos}: Props) {

  return (
      <section className="relative py-20 px-4 text-white">
        {/* Background video */}
        <VideoCarousel videos={videos} />
        {/* Color overlay */}
        <div className="absolute inset-0 bg-[#264038]/70 z-10" aria-hidden />

        <div className="relative z-20 container mx-auto text-center">
          {title && <h1 className="text-2xl md:text-6xl font-bold text-[#7DF7B5] mb-4">{title}</h1>}
          {subtitle && <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{subtitle}</p>}
          {description && <p className="text-xl mb-8 max-w-3xl mx-auto">{description}</p>}
          {callToAction && (
              <div className={"flex items-center justify-center"}>
                  <Link to={callToAction.url} className="bg-[#7DF7B5] text-[#264038] font-bold py-3 px-8 rounded-full hover:bg-[#fcf2cf] transition duration-300 mx-auto inline-flex">
                      <Award className="mr-2" />
                      <div>
                          {callToAction.text}
                      </div>
                  </Link>
              </div>
          )}
        </div>
      </section>
  )
}

