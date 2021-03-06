import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const {signInWithGoogle} = useFirebase();
  return (
    <div>
      <h2>Please Login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>
      <form>
        <input type="email" placeholder="Your email" name="" id="" />
        <br />
        <input type="password" name="" id="" placeholder="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
