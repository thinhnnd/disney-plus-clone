import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";
import {
  getTopRatedMovies,
  getPopularMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();

  return (
    <main className="">
      <CarouselBannerWrapper id="" keywords="" />
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MovieCarousel movies={upcomingMovies} title="Upcoming" />
        <MovieCarousel movies={popularMovies} title="Popular" />
        <MovieCarousel movies={topRatedMovies} title="Top Rated" />
      </div>
    </main>
  );
}
