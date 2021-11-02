const Caroussel = ({ movies }) => {
  return (
    <div className="caroussel">
      {movies.map((movie, index) => {
        return <img key={index} src={movie} alt="movie" />;
      })}
    </div>
  );
};

export default Caroussel;
