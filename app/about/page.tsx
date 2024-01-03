import VideoPlayer from "@/components/VideoPlayer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function About() {
  return (
    <div className="flex flex-col max-w-screen-2xl gap-5">
      <div className="flex bg-accent rounded-lg w-full h-56 items-center justify-center">
        <text className="flex text-4xl font-black">Our Story</text>
      </div>

      <div>
        <p className="flex bg-clip-padding">
          Well Its a short story but let make it dramatic for you to get hocked on to our visions for the future of health care
        </p>
      </div>

      <div>
        
      </div>
    </div>
  );
}
