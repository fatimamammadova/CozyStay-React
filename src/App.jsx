import Header from "./components/Header/Header";
import "./_index.scss";

function App() {
  return (
    <>
      <div className="img-container">
        <img src="/img/home-bg-img.jpg" alt="" />
      </div>
      <div className="img-overlay"></div>
      <Header />
      <div className="page-container"></div>
    </>
  );
}

export default App;
