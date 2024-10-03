import "./App.css";
import { useState } from "react";
import data from "./assets/data.json";
import Buttons from "./components/Buttons";
import Details from "./components/Details";

function App() {
  const [movies] = useState(data);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movie = movies.find((e) => e.id === `${selectedMovie}`);
  return (
    <main
      className='app'
      style={{
        backgroundImage:
          selectedMovie === null ? "black" : `url(${movie.background})`,
      }}
    >
      <Buttons
        movies={movies}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />

      <Details movie={movie} />
    </main>
  );
}

export default App;
