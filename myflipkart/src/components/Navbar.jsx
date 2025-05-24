import React, { useEffect, useRef, useState } from 'react';
import Login from './Login.jsx';

const Navbar = () => {
  const data = useRef(null);
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMobile, setUserMobile] = useState("");

  useEffect(() => {
    const mobile = localStorage.getItem("userMobile");
    if (mobile) {
      setIsLoggedIn(true);
      setUserMobile(mobile);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userMobile");
    setIsLoggedIn(false);
    setUserMobile("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data.current.value);
  };

  return (
    <div className="flex flex-row items-center justify-around pt-3">
      <div>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart Logo" />

      </div>

      <div>
        <form onSubmit={submitHandler}>
          <input
            ref={data}
            className="h-10 w-[600px] bg-gray-100 rounded px-4"
            type="text"
            placeholder="Search for Products"
          />
        </form>
      </div>

      <div className="flex flex-row gap-[30px]">
        <div className="flex flex-row items-center gap-2">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Profile Icon" />
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={() => setOpen(true)}>Login</button>
          )}
          <Login open={open} setOpen={setOpen} setIsLoggedIn={setIsLoggedIn} setUserMobile={setUserMobile} />
        </div>

        <div className="flex flex-row items-center gap-2">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart Icon" />
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
