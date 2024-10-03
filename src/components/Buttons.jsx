import Button from "./Button";

const Buttons = ({ movies, selectedMovie, setSelectedMovie }) => {
  return (
    <div className='main-buttons'>
      {movies.map((movie) => {
        return (
          <Button
            key={movie.id}
            movie={movie}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        );
      })}
    </div>
  );
};

export default Buttons;
