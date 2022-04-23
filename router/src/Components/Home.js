import React from "react";
import { UserContext } from "../Context/UserContext";
const Home = () => {
  const { user } = React.useContext(UserContext);
  return (
    <div>
      <h1 className="mainTitle">Home</h1>
      <h1>Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
      <h1>Gender: {user.gender} </h1>
    </div>
  );
};

export default Home;
