import Actor from "./Actor";

const Details = ({ movie }) => {
  return (
    <div className='main-details'>
      {movie === undefined ? (
        <p>Merci de choisir un film !</p>
      ) : (
        <>
          <h1>{movie.name}</h1>
          <div className='details-actors'>
            {movie.actors.map((actor) => {
              return <Actor key={actor.id} actorInfo={actor} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
