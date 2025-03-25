import { MovieList } from "@/components/MovieList";
import { NowPlayingList } from "@/components/NowPlaying";

export default function Home() {
  return (
    <div>
      <NowPlayingList/>
      <MovieList></MovieList>
    </div>
  );
}
