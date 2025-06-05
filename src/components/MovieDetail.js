import styles from "./MovieDetail.module.css";
import PropTypes from "prop-types";

function MovieDetail({
  large_cover_image,
  title,
  year,
  rating,
  runtime,
  genres,
  description_full,
  yt_trailer_code,
}) {
  return (
    <div className={styles.movieDetail}>
      <img
        src={large_cover_image}
        alt={title}
        className={styles.movieImage}
      ></img>
      <div className={styles.movieInfo}>
        <h1>
          {title} ({year})
        </h1>
        <p>
          <strong>Rating: </strong>
          {rating} / 10
        </p>
        <p>
          <strong>Runtime: </strong>
          {runtime}
        </p>
        <p>
          <strong>Genres: </strong> {genres.join(", ")}
        </p>
        <p className={styles.movieDescription}>{description_full}</p>
        <a
          className={styles.trailerLink}
          href={`https://www.youtube.com/watch?v=${yt_trailer_code}`}
          target="_blank"
        >
          🎬 Watch Trailer
        </a>
      </div>
    </div>
  );
}
 MovieDetail.propTypes = {
    large_cover_image: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    rating: PropTypes.string,
    runtime: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    description_full: PropTypes.string,
    yt_trailer_code: PropTypes.string,
  };
export default MovieDetail;
