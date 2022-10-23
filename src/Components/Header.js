import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-transparent">
        <div className="flex-1 lg:ml-10">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          <div className="form-control ">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex-none gap-2 lg:mr-10">
          <div className="hidden lg:block">
            <ul className="flex gap-5 justify-center items-center">
              <li>News</li>
              <li>Destinations</li>
              <li>Blogs</li>
              <li>Contact</li>
              <li>
                <button className="btn btn-warning">Login</button>
              </li>
              <li>
                <button className="btn btn-error">Register</button>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 p-2 gap-2 shadow menu menu-compact dropdown-content bg-gray-600 rounded-box w-52 text-white"
            >
              <li>
                <a href="">News</a>
              </li>
              <li>
                <a href="">Destinations</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>
                  <button className="btn btn-warning">Login</button>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <button className="btn btn-error">Register</button>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <button className="btn btn-error">Logout</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
