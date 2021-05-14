/**
 * App - main file to start page
 */
import ReactAnime from "react-animejs";
import "./App.css";
const { Anime } = ReactAnime;

function App() {
  return (
    <Anime
      initial={[
        {
          targets: ".box",
          delay: 100,
          direction: "alternate",
          easing: "spring",
          duration: 3000,
          translateX: 50,
          loop: true,
          autoplay: true,
        },
      ]}
    >
      <div className="container">
        <div className="box">C</div>
        <div className="box">H</div>
        <div className="box">E</div>
        <div className="box">S</div>
        <div className="box">S</div>
      </div>
    </Anime>
  );
}

export default App;
