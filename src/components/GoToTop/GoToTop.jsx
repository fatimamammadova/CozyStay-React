import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./_goToTop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
      console.log("salam")  
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className={`to-top ${showButton ? "show" : ""}`}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </>
  );
};

export default GoToTop;
