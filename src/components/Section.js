import Title from "./Title";
import Caroussel from "./Caroussel";

const Section = ({ category, movies }) => {
  return (
    <div className="section">
      <Title category={category} />
      <Caroussel movies={movies} />
    </div>
  );
};

export default Section;
