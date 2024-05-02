import Index from "../index";
import "./_pages.scss"

const Pages = () => {
  return (
    <Index>
      <div className="img-container">
        <img src="/img/pages-bg-img.jpg" alt="" />
      </div>
      <div className="img-overlay"></div>

      <div className="main-content pages-content">
        <div className="page-container">
          <div className="content-inner">
            <h1 className="font-marcellus">Amenities & Services</h1>

            <p>We strive to provide our guests with luxury, comfort & tailor-made service.</p>
          </div>
        </div>
      </div>

      
    </Index>
  );
};

export default Pages;
