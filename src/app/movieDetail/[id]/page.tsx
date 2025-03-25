import { MoreLike } from "../MoreLike";
import { MovieDetailCredit } from "../MovieDetailCredit";
import { MovieDetailHeader } from "../MovieDetailHeader";

export default function MovieDetailspage() {
  return (
    <div>
      <MovieDetailHeader />
      <MovieDetailCredit />
      <MoreLike />
    </div>
  );
}
