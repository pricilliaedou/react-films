const Button = ({ movie, selectedMovie, setSelectedMovie }) => {
  return (
    <p
      className='button'
      style={{
        textDecoration: movie.id === selectedMovie ? "underline" : null,
      }}
      onClick={() => {
        setSelectedMovie(movie.id);
      }}
    >
      {movie.name}
    </p>
  );
};

export default Button;
