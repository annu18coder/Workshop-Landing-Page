import handleEnrollClick from "../Components/smoothScroll";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50
    ">
      <div className=" max-w-7xl mx-auto px-6 py-4 flex justify-between items-center
      ">
        {/* Logo */}
        <h1 className=" text-2xl font-bold text-purple-600">
          Kidrove
        </h1>
        
        <button className=" bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition duration-300 shadow-lg" onClick={handleEnrollClick}>
          Enroll Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;