import Rating from "./rating"

type MovieProps = {
  movie: {
    title: string,
    subtitle:string,
    storyline: string,
    rating: number,
    imagePath: string 
  }
}

function MovieCard({ movie: { title, subtitle, storyline, rating, imagePath } } : MovieProps) {
  return(
    <div className="movie-card">
      <div className="movie-card-body">
        <img src= { imagePath } alt="Capa do filme" className="movie-card-image" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </div>
      <Rating rating={ rating } />
    </div>
  )
}

export default MovieCard;