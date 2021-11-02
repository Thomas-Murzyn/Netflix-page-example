import "./App.css";
import Header from "./components/Header";
import logo from "./logo-netflix.png";
import Section from "./components/Section";
import movies from "./movies.json";

function App() {
  return (
    <div className="content">
      <Header logo={logo} />
      {movies.map((list, index) => {
        return (
          <Section key={index} category={list.category} movies={list.images} />
        );
      })}
    </div>
  );
}

export default App;
