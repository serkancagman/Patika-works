import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Main = () => {
  const [user, setUser] = React.useState("");
  const [post, setPost] = React.useState("");

  useEffect(() => {
    getData(1);
  }, []);

  const getData = async (idNumber) => {
    const userURL = "https://jsonplaceholder.typicode.com/users/";
    const postURL = "https://jsonplaceholder.typicode.com/posts/";
    const userRes = await axios(userURL + idNumber);
    const postRes = await axios(postURL + idNumber);

    setUser(userRes.data);
    setPost(postRes.data);
  };

  console.log(user);
  console.log(post);
  return (
    <section className="bg-dark text-light">
      <div className="userInfo text-center">
        <h1>Name = {user.name} </h1>
        <h2>Username = {user.username}</h2>
        <h3>Phone = {user.phone}</h3>
        <h4>Email = {user.email} </h4>

        <div className="text-center my-4">
            <h1>
                POST
            </h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
      </div>
    </section>
  );
};
export default Main;
