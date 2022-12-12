import "../styles/index.scss";
import Content from "./Content";
import scuba2 from "../assets/Scuba_2.jpg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
        <img src={scuba2} alt="scuba_tank" width="50%" />
        <Content />
      </main>
    </>
  );
};

export default App;
