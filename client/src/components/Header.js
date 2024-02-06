import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    console.log("here");
  }, []);
  return <h1>My Great Counter</h1>;
};

export default Header;
