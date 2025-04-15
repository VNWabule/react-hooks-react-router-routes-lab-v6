import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre} </span>
      ))}
    </>
  );
}

export default Movie;
