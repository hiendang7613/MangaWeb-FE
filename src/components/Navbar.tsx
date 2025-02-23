import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <header className="text-white nav-bg">
      <div className="container mx-auto flex justify-between items-center py-2">
        {/* <div className="flex items-center">
          <img
            alt="NetTruyen logo"
            className="h-10"
            height="50"
            src="logo.jpeg"
            width="40"
          />
        </div> */}

        <div className="flex items-center">
          <img alt="Logo" className="mr-2" src="logo.jpeg" width="40" height="50"/>
          <span className="text-xl font-bold text-blue-600">Truyentranhmoi.net</span>
        </div>

        

        <div className="flex items-center ">
          <div className="relative mr-20 w-300">
            <input
              className="px-10 py-2 rounded-md text-black w-full border border-gray-300 focus:ring-2 focus:ring-blue-500"
              placeholder="Tìm truyện..."
              type="text"
            />
            <span className="fas fa-search absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></span>
          </div>

          <div className="relative">
            <button className="flex items-center space-x-1">
              <i className="fas fa-user"></i>
              <span>Tài khoản</span>
              <i className="fas fa-caret-down"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
