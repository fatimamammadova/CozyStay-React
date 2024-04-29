import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="font-marcellus">Not Found</h1>
      <p>Sorry, this page is not exists.</p>
      <Link to="/">Return Home Page</Link>
    </div>
  );
};

export default NotFound;
