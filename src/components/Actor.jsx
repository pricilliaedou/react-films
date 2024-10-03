const Actors = ({ actorInfo }) => {
  return (
    <div className='main-actor'>
      <p>{actorInfo.name}</p>
      <img src={actorInfo.picture} alt='photo acteur' />
    </div>
  );
};

export default Actors;
