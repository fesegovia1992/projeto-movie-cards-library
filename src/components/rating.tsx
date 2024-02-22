type Ratingprop = {
  rating: number
}

function Rating({rating}: Ratingprop) {
  return(
    <div className="movie-card-rating">
      <p className="rating">{rating}</p>
    </div>
  )
}

export default Rating;