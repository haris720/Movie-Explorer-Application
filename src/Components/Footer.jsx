import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Movie App</h2>
          </div>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/favourite" className="hover:underline">
              Favourite
            </Link>
            {/* Add more links if necessary */}
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Movie App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;