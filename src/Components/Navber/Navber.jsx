import React from "react";

const Navber = () => {
  const style = {
    licss: ` hover:text-white hover:bg-base-300 hover:rounded-md `,
  };

  const login = false;

  return (
    <div
      className="container mx-auto navbar  bg-white text-black 
     shadow-lg rounded-md "
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-32 text-xl font-medium"
          >
            <li className={style.licss}>
              <a>Home</a>
            </li>
            <li className={style.licss}>
              <a>Courses</a>
            </li>
            {/* <li className={style.licss}>
            <a>User Dashboard</a>
          </li>*/}
            <li className={style.licss}>
              <a>Blog</a>
            </li>
            <li className={style.licss}>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-bold border-black">
          SmartAcumen
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-medium  ">
          <li className={style.licss}>
            <a>Home</a>
          </li>
          <li className={style.licss}>
            <a>Courses</a>
          </li>
          {/* <li className={style.licss}>
            <a>User Dashboard</a>
          </li>*/}
          <li className={style.licss}>
            <a>Blog</a>
          </li>
          <li className={style.licss}>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {login ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-32 text-xl font-medium"
            >
              <li>
                <a>Profile</a>
              </li>
              {login ? (
                <li>
                  <a>Logout</a>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        ) : (
          <div className="">
            <div className="flex gap-1">
            <button className="font-semibold capitalize border border-black text-black p-2 rounded">Sign Up</button>
            <button className="font-semibold capitalize border border-black text-black p-2 rounded">Login</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
