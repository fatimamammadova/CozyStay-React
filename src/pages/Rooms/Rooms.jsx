import {
  faBabyCarriage,
  faBed,
  faCircle,
  faMaximize,
  faSink,
  faSocks,
  faUserGroup,
  faWaterLadder,
} from "@fortawesome/free-solid-svg-icons";
import Index from "../index";
import "./_rooms.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "../../components/Calendar/Calendar";

const Rooms = () => {
  return (
    <Index>
      <div className="main-bg-img">
        <div className="bg-img-container">
          <img src="/img/rooms-bg-img.jpg" alt="" />
        </div>
      </div>

      <div className="room-container page-container">
        <div className="r-col-1">
          <section className="room-heading">
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt.
              </p>
            </div>
          </section>

          <section className="friendly-amenities">
            <h3 className="amenities-title font-marcellus">
              Family-friendly Amenities
            </h3>

            <div className="card-wrapper">
              {[
                {
                  id: 1,
                  icon: "/img/swimming-pool.png",
                  title: "Kids Swimming Pool",
                },
                {
                  id: 2,
                  icon: "/img/baby-crib.png",
                  title: "Extra Beds/Baby Crib",
                },
                {
                  id: 3,
                  icon: "/img/washing-machine.png",
                  title: "Washing Machine",
                },
              ].map((item) => (
                <div className="card-item" key={item.id}>
                  <div className="ci-inner">
                    <span className="icon">
                      <img src={item.icon} alt="" width={38} height={38} />
                    </span>
                    <span className="title font-marcellus">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="room-amenities">
            <h3 className="amenities-title font-marcellus">Room Amenities</h3>

            <div className="ra-items">
              <div className="ra-wrapper">
                {[
                  {
                    id: 1,
                    icon: "/img/air-conditioner.png",
                    title: "Air conditioner",
                  },
                  {
                    id: 3,
                    icon: "/img/wifi-signal.png",
                    title: "Wifi & Internet",
                  },
                  { id: 5, icon: "/img/slippers.png", title: "Slippers" },
                  { id: 7, icon: "/img/shampoo.png", title: "Shampoo" },
                  { id: 9, icon: "/img/strongbox.png", title: "Safe Box" },
                  {
                    id: 11,
                    icon: "/img/veterinary.png",
                    title: "Pet Friendly",
                  },
                ].map((item) => (
                  <div className="ra-item" key={item.id}>
                    <span className="icon">
                      <img src={item.icon} alt="" width={30} height={30} />
                    </span>
                    <span className="ra-item-title font-marcellus">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="ra-wrapper">
                {[
                  { id: 2, icon: "/img/smart-tv.png", title: "Cable TV" },
                  { id: 4, icon: "/img/towel.png", title: "Towels" },
                  { id: 6, icon: "/img/hair-dryer.png", title: "Hair Dryer" },
                  {
                    id: 8,
                    icon: "/img/coffee-machine.png",
                    title: "Espresso Machine",
                  },
                  {
                    id: 10,
                    icon: "/img/welcome-drink.png",
                    title: "Welcome Drinks",
                  },

                  {
                    id: 12,
                    icon: "/img/refrigerator.png",
                    title: "In-room Refrigerator",
                  },
                ].map((item) => (
                  <div className="ra-item" key={item.id}>
                    <span className="icon">
                      <img src={item.icon} alt="" width={30} height={30} />
                    </span>
                    <span className="ra-item-title font-marcellus">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="suite">
            <h3 className="amenities-title font-marcellus">
              What’s included in this suite?
            </h3>

            <ul>
              {[
                { id: 1, title: "Private balcony" },
                { id: 2, title: "140x200 cm Elite bed" },
                {
                  id: 3,
                  title: "Upholstered seat beside the panoramic window",
                },
                {
                  id: 4,
                  title: "TV-UHD screen for watching mountaineering films",
                },
                {
                  id: 5,
                  title:
                    "Writing desk with USB ports for documenting your adventures",
                },
                { id: 6, title: "Room safe for your top mountain photos" },
                {
                  id: 7,
                  title:
                    "Service station with Lavazza coffee machine, kettle and tea",
                },
                { id: 8, title: "Bathroom with rain shower" },
                { id: 9, title: "Comfortable terry towels and bathrobes" },
              ].map((item) => (
                <li key={item.id}>
                  <span className="icon">
                    <FontAwesomeIcon icon={faCircle} width={6} height={6} />
                  </span>
                  <span className="s-title">{item.title}</span>
                </li>
              ))}
            </ul>
          </section>

          <Calendar/>
          
        </div>
        <div className="r-col-2">
          {/* <Booking/> */}
        </div>
      </div>
    </Index>
  );
};

export default Rooms;
