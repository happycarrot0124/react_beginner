import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Home.module.css";
import NaviBar from "../components/NaviBar";
import Footer from "../components/Footer";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <NaviBar />
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <h1>Loading...</h1>
          </div>
        ) : (
          <MovieDetail
            large_cover_image={movie.large_cover_image}
            year={movie.year}
            title={movie.title}
            rating={movie.rating}
            runtime={movie.runtime}
            description_full={movie.description_full}
            genres={movie.genres}
            yt_trailer_code={movie.yt_trailer_code}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
export default Detail;
