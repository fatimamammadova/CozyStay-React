import {
  faBabyCarriage,
  faBed,
  faMaximize,
  faSink,
  faSocks,
  faUserGroup,
  faWaterLadder,
} from "@fortawesome/free-solid-svg-icons";
import Index from "../index";
import "./_rooms.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rooms = () => {
  return (
    <Index>
      <div className="main-bg-img">
        <div className="bg-img-container">
          <img src="/img/rooms-bg-img.jpg" alt="" />
        </div>
      </div>

      <div className="room-container">
        <div className="r-col-1">
          <section className="room-heading">
            <div className="page-container">
              <h2 className="item-title font-marcellus">Studio King</h2>
              <span className="item-subtitle">
                560 ft² / 52 m² / Park View / 2 Guests
              </span>
              <div className="room-info">
                <ul>
                  {[
                    { id: 1, icon: faMaximize, title: "560 ft²" },
                    { id: 2, icon: faUserGroup, title: "2 Guests" },
                    { id: 3, icon: faBed, title: "1 Bed" },
                    { id: 4, icon: faSink, title: "1 Bathroom" },
                  ].map((item) => (
                    <li key={item.id}>
                      <span className="icon">
                        <FontAwesomeIcon icon={item.icon} size="lg" />
                      </span>
                      <span className="icon-title">{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="item-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
                <p>
                  Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                  fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                  justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                  dictum felis eu pede mollis pretium. Integer tincidunt.
                </p>
              </div>
            </div>
          </section>

          <section className="friendly-amenities">
            <div className="page-container">
              <h3 className="amenities-title font-marcellus">
                Family-friendly Amenities
              </h3>

              <div className="card-wrapper">
                {[
                  { id: 1, icon: "/img/swimming-pool.png", title: "Kids Swimming Pool" },
                  {
                    id: 2,
                    icon: "/img/baby-crib.png",
                    title: "Extra Beds/Baby Crib",
                  },
                  { id: 3, icon: "/img/washing-machine.png", title: "Washing Machine" },
                ].map((item) => (
                  <div className="card-item" key={item.id}>
                    <div className="ci-inner">
                      <span className="icon">
                        <img src={item.icon} alt="" width={38} height={38}/>
                      </span>
                      <span className="title font-marcellus">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="r-col-2"></div>
      </div>
    </Index>
  );
};

export default Rooms;
