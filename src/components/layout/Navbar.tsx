import { BsFillBugFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title }: { title: String }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <BsFillBugFill className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm">
              Home
            </Link>
            <Link to="/login" className="btn btn-ghost btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-ghost btn-sm">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Issue Tracker',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
