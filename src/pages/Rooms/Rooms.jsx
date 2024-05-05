import {
  faBed,
  faCircle,
  faMaximize,
  faSink,
  faUserGroup,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import Index from "../index";
import "./_rooms.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "../../components/Calendar/Calendar";

const Rooms = () => {
  const roomsData = [
    {
      id: "bJMcSEoYj",
      name: "City View Studio",
      imageUrl:
        "https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/05/emily-wang-Wv65tpVIdDg-unsplash-780x520.jpg",
      price: "$299 / Night",
      size: "480 ft² / 44 m² / Park View / 2 Guests",
      description:
        "Welcome to your urban oasis inspired by the natural beauty and calming energy of Central Park. Relax on your private terrace or snuggle up in your king size bed and take in the views of Central Park.",
      link: "https://cozystay.loftocean.com/apartment/room/city-view-studio/",
    },
    {
      id: "TvmjS1Dsz",
      name: "Avenue View Penthouse",
      imageUrl:
        "https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/05/r-architecture-Eh_It1hg4Hs-unsplash-780x520.jpg",
      price: "$699 / Night",
      size: "1076 ft² / 100 m² / Avenue View / 4 Guests",
      description:
        "Welcome to your urban oasis inspired by the natural beauty and calming energy of Central Park. Relax on your private terrace or snuggle up in your king size bed and take in the views of Central Park.",
      link: "https://cozystay.loftocean.com/apartment/room/avenue-view-penthouse/",
    },
    {
      id: "7oceTIYOr",
      name: "Park View Penthouse",
      imageUrl:
        "https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/05/davide-colonna-DZrZhVd_wR0-unsplash-780x520.jpg",
      price: "$799 / Night",
      size: "1291 ft² / 120 m² / Park View / 6 Guests",
      description:
        "Welcome to your urban oasis inspired by the natural beauty and calming energy of Central Park. Relax on your private terrace or snuggle up in your king size bed and take in the views of Central Park.",
      link: "https://cozystay.loftocean.com/apartment/room/park-view-penthouse/",
    },
  ];
  return (
    <Index>
      <div className="main-bg-img">
        <div className="bg-img-container">
          <img src="/img/rooms-bg-img.jpg" alt="" />
        </div>
      </div>

      <div className="room-container page-container">
        <div className="flex">
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

            <Calendar />
          </div>
          <div className="r-col-2">
            <aside className="room-booking">
              <div className="room-booking-inner">
                <div className="room-booking-title">
                  <h4 className="font-marcellus">Reserve:</h4>
                  <span>
                    From <span className="base-price">$299</span>/night
                  </span>
                </div>
                <div className="room-booking-form">
                  <div className="cs-form-field">
                    <div className="field-wrap">
                      <label className="cs-form-label font-marcellus">
                        Check In
                      </label>
                      <div className="field-input-wrap checkin-date">
                        <input
                          type="text"
                          className="date-range-picker pull-right"
                        />
                        <input
                          type="text"
                          value="2024-05-05"
                          name="checkin"
                          readOnly="2024-05-05"
                        />
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </div>
                  </div>
                  <div className="cs-form-field">
                    <div className="field-wrap">
                      <label className="cs-form-label font-marcellus">
                        Check Out
                      </label>
                      <div className="field-input-wrap checkin-date">
                        <input
                          type="text"
                          className="date-range-picker pull-right"
                        />
                        <input
                          type="text"
                          value="2024-05-06"
                          name="checkin"
                          readOnly="2024-05-06"
                        />
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </div>
                  </div>
                  <div className="cs-form-field">
                    <div className="field-wrap">
                      <label className="cs-form-label font-marcellus">
                        Rooms
                      </label>
                      <div className="field-input-wrap checkin-date">
                        <input
                          type="text"
                          className="date-range-picker pull-right"
                        />
                        <input
                          type="text"
                          value="1 Room"
                          name="checkin"
                          readOnly="1 Room"
                        />
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </div>
                  </div>
                  <div className="cs-form-group">
                    <div className="cs-form-field">
                      <div className="field-wrap">
                        <label className="cs-form-label">Adults</label>
                        <div className="field-input-wrap has-dropdown">
                          <input
                            type="text"
                            name="adults"
                            value="1"
                            readOnly="1"
                          />
                        </div>
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </div>
                    <div className="cs-form-field">
                      <div className="field-wrap">
                        <label className="cs-form-label">Children</label>
                        <div className="field-input-wrap has-dropdown">
                          <input
                            type="text"
                            name="adults"
                            value="0"
                            readOnly="0"
                          />
                        </div>
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </div>
                  </div>
                  <div className="cs-extra-service-group">
                    <h5 className="csf-title font-marcellus">Extra Services</h5>
                    <div className="cs-form-field cs-extra-service">
                      <div className="field-wrap">
                        <div className="label-checkbox">
                          <input
                            className="hidden-check extra-service-switcher"
                            type="checkbox"
                            name="extra_service_id[extra_service_47]"
                            id="extra-service-id-47"
                            value="47"
                          />
                          <div className="cs-styled-checkbox"></div>
                          <div className="cs-form-label checkbox-label">
                            <label htmlFor="extra-service-id-47">
                              Room Clean
                            </label>
                          </div>
                        </div>
                        <div className="price-quantity">
                          <div className="cs-form-price">$12 / Night</div>
                        </div>
                      </div>
                    </div>
                    <div className="cs-form-field cs-extra-service">
                      <div className="field-wrap">
                        <div className="label-checkbox">
                          <input
                            className="hidden-check extra-service-switcher"
                            type="checkbox"
                            name="extra_service_id[extra_service_48]"
                            id="extra-service-id-48"
                          />
                          <div className="cs-styled-checkbox"></div>
                          <div className="cs-form-label checkbox-label">
                            <label htmlFor="extra-service-id-48">Massage</label>
                          </div>
                        </div>
                        <div className="price-quantity extra-service-custom-quantity">
                          <div className="cs-form-price">$30 / Person</div>

                          <div className="cs-form-quantity">
                            <div className="field-wrap">
                              <div className="field-input-wrap has-dropdown">
                                <input
                                  type="text"
                                  name="extra_service_quantity[extra_service_48]"
                                  value="1"
                                  readOnly="1"
                                />
                                <FontAwesomeIcon icon={faAngleDown} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cs-form-field cs-extra-service">
                      <div className="field-wrap">
                        <div className="label-checkbox">
                          <input
                            className="hidden-check extra-service-switcher"
                            type="checkbox"
                            name="extra_service_id[extra_service_48]"
                            id="extra-service-id-49"
                          />
                          <div className="cs-styled-checkbox"></div>
                          <div className="cs-form-label checkbox-label">
                            <label htmlFor="extra-service-id-49">Dry Spa</label>
                          </div>
                        </div>
                        <div className="price-quantity extra-service-custom-quantity">
                          <div className="cs-form-price">$45 / Person</div>

                          <div className="cs-form-quantity">
                            <div className="field-wrap">
                              <div className="field-input-wrap has-dropdown">
                                <input
                                  type="text"
                                  name="extra_service_quantity[extra_service_48]"
                                  value="1"
                                  readOnly="1"
                                />
                                <FontAwesomeIcon icon={faAngleDown} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cs-form-total-price">
                    <h5 className="csf-title font-marcellus">Total Cost</h5>
                    <div className="total-price">
                      $<span className="total-price-number">299</span>
                    </div>
                  </div>
                  <div className="cs-form-field cs-submit">
                    <div className="field-wrap">
                      <button type="submit" className="button font-marcellus">
                        <span className="btn-text">Book Your Stay Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="similar-rooms">
          <div className="container">
            <h4 className="similar-rooms-title font-marcellus">
              Similar Rooms
            </h4>
            <div className="posts cs-rooms column-3 layout-grid layout-overlay with-hover-effect img-ratio-1-1">
              <div className="posts-wrapper cs-rooms-wrapper">
                {roomsData.map((room) => (
                  <div
                    className="post cs-room-item has-post-thumbnail"
                    key={room.id}
                  >
                    <div className="featured-img">
                      <a href={room.link}>
                        <img src={room.imageUrl} alt={room.name} />
                      </a>
                      <div className="overlay-label">
                        <div className="overlay-label-text">{room.price}</div>
                      </div>
                    </div>
                    <div className="post-content cs-room-content">
                      <header className="post-header item-header">
                        <h2 className="post-title item-title">
                          <a href={room.link}>{room.name}</a>
                        </h2>
                        <div className="item-subtitle">{room.size}</div>
                      </header>
                      <div className="hover-show-content">
                        <div className="post-excerpt item-excerpt">
                          <p>{room.description}</p>
                        </div>
                        <footer className="post-footer item-footer">
                          <div className="more-btn">
                            <a
                              className="read-more-btn button cs-btn-underline"
                              href={room.link}
                            >
                              <span>Discover More
                              <FontAwesomeIcon icon={faAngleRight} />
                              </span>
                            </a>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Index>
  );
};

export default Rooms;
