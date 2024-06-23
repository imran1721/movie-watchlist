import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleUserEntry = () => {
    if (!email && !name) setError("Please enter the required fields!");
    else {
      localStorage.setItem("user", JSON.stringify({ email, name }));
      localStorage.setItem("userType", "user");
      navigate("/home");
    }
  };

  const handleGuestEntry = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: "guest_entry", name: "guest" }),
    );
    localStorage.setItem("userType", "guest");
    navigate("/home");
  };

  return (
    <div className="flex flex-col m-auto justify-center bg-primary/10 h-screen">
      <div className="self-center items-center m-auto mt-20 border p-5 rounded-xl shadow bg-white">
        <div className="text-2xl font-bold text-primary">
          Welcome to Watchlist!
        </div>
        <div className="text-sm text-primary font-semibold mt-3">
          You can enter and register yourself using an email ID or just enter as
          guest.
        </div>
        <form className="mt-10">
          <div className="grid grid-cols-4 mb-3">
            <label className="col-span-1 m-auto font-semibold">
              Your Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3 w-full p-2 border rounded border-primary/20 focus:border-primary/80 focus:outline-none"
              type="text"
            />
          </div>
          <div className="grid grid-cols-4">
            <label className="col-span-1 m-auto font-semibold">Your Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 w-full p-2 border rounded border-primary/20 focus:border-primary/80 focus:outline-none"
              type="text"
            />
          </div>
          {error && <div className="text-sm text-primary m-3">{error}</div>}
          <button
            onClick={handleUserEntry}
            type="submit"
            className="mt-3 py-2 px-8 rounded bg-primary text-white font-semibold hover:bg-secondary"
          >
            Get Inside
          </button>
        </form>
        <div className="font-semibold mt-5">OR</div>
        <button
          onClick={handleGuestEntry}
          className="mt-5 border border-primary py-2 px-8 rounded font-semibold text-primary hover:bg-primary hover:text-white"
        >
          Enter as Guest
        </button>
      </div>
    </div>
  );
};

export default Login;
