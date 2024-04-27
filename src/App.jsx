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
      <div className="page-container">
        <div className="main-content">
          <div className="content-inner">
            <div className="mc-top">
              <div className="mc-top-inner">
                <span>
                  Welcome to CozyStay, a luxury apartment hotel in Times Square
                </span>
                <h1 className="font-marcellus">
                  Your Next Boutique Apartments
                </h1>
              </div>
            </div>
            <div className="mc-bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
