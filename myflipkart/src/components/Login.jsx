import { Dialog } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Login = ({ open, setOpen, setIsLoggedIn, setUserMobile }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/auth", { mobile, password });

      // Save session to localStorage
      localStorage.setItem("userMobile", res.data.mobile);
      setUserMobile(res.data.mobile);
      setIsLoggedIn(true);
      setOpen(false);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        sx: {
          width: '50vw',
          height: '50vh',
          maxWidth: 'none',
          borderRadius: 2,
          overflow: 'hidden',
        },
      }}
    >
      <div className="flex flex-row h-full w-full items-center gap-[25px] ">
        <div className="flex flex-col gap-[35px] bg-blue-600 w-[50%] h-full justify-center text-white pl-8 ">
          <h1 className="text-4xl">Login</h1>
          <p>Access Orders, Wishlist and more</p>
          <img className="w-[200px] mb-5" src="https://res.cloudinary.com/dpepzphqf/image/upload/v1747738160/Screenshot_2025-05-19_at_5.01.15_PM-removebg-preview_jhbxks.png" alt="Visual" />
        </div>

        <div className="flex flex-col items-center w-[50%] justify-center">
          <input
            className="border mb-4 h-8 w-60 rounded bg-gray-100"
            type="text"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            className="border h-8 w-60 rounded bg-gray-100"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button className="h-10 w-[200px] bg-orange-500 text-white mt-4" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default Login;
