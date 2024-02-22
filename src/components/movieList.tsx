type MoviesProps = {
  movies: {
    title: string,
    subtitle:string,
    storyline: string,
    rating: number,
    imagePath: string
  }[];
}

import MovieCard from "./movieCard";

function MovieList({ movies }: MoviesProps) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={ movie.title }/>
      ))}
    </div>
  )
}

export default MovieList;