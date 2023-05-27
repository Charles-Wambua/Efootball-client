import { useEffect, useState } from "react";
import { auth, provider } from "./config.js";
import { signInWithPopup } from "firebase/auth";
export const Register = () => {
  const [value, setValue] = useState("");
  const handleclick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("authToken: ", data.user.token);
    });
  };
  useEffect = () => {
    setValue(localStorage.getItem("authToken"));
  };
  return (
    <div>
      {value ? (
        <h1>ror</h1>
      ) : (
        <button onClick={handleclick}>Sign in with Google</button>
      )}
    </div>
  );
};
