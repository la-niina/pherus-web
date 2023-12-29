import VideoPlayer from "@/components/VideoPlayer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Blogging() {
  return (
    <div className="flex flex-col max-w-screen-2xl">
      <div className="flex flex-col max-w-screen-2xl items-center justify-center h-[30vh] gap-2">
        <div className="relative flex flex-row border-[#ff7b47] border-[1px] w-full sm:w-[550px] rounded-full justify-center items-center">
          <Input
            className="flex w-full h-full border-transparent hover:border-transparent border-[0px] rounded-full"
            placeholder="Search..."
            color="bg-transparent"
          />
          <Button type="submit">search</Button>
        </div>

        <div className="flex flex-row max-w-screen-2xl gap-2 items-start justify-start">
          <Badge
            variant="secondary"
            className="flex h-[30px] w-[55px] bg-orange-600 hover:bg-orange-600 text-white"
          >
            All
          </Badge>
          <Badge
            variant="secondary"
            className="flex h-[30px] w-[55px] bg-orange-600 hover:bg-orange-600 text-white"
          >
            Live
          </Badge>
          <Badge
            variant="secondary"
            className="flex h-[30px] w-[55px] bg-orange-600 hover:bg-orange-600 text-white"
          >
            Outline
          </Badge>
          <Badge
            variant="secondary"
            className="flex h-[30px] w-[55px] bg-orange-600 hover:bg-orange-600 text-white"
          >
            Outline
          </Badge>
          <Badge
            variant="secondary"
            className="flex h-[30px] w-[55px] bg-orange-600 hover:bg-orange-600 text-white"
          >
            Outline
          </Badge>
          <Badge
            variant="secondary"
            className="flex h-[30px] w-[55px] bg-orange-600 hover:bg-orange-600 text-white"
          >
            Outline
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 max-w-screen-2xl gap-2">
        <VideoPlayer />

        <VideoPlayer />

        <VideoPlayer />

        <VideoPlayer />

        <VideoPlayer />
      </div>
    </div>
  );
}
