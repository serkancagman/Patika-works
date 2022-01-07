import React, { useEffect } from "react";
import axios from "axios";

const GetData = () => {
  const [user, setUser] = React.useState("");
  const [post, setPost] = React.useState("");

  useEffect(() => {
    getDataAxios(1);
  }, []);

  const getDataAxios = async (idNumber) => {
    const userURL = "https://jsonplaceholder.typicode.com/users/";
    const postURL = "https://jsonplaceholder.typicode.com/posts/";
    const userData = await axios(userURL + idNumber);
    const postData = await axios(postURL + idNumber);

    setUser(userData.data);
    setPost(postData.data);
  };
  console.log(post);
  console.log(user)
  return (
    <section>
      <div className="text-center bg-dark text-light">
        <h1>Name : {user.name} </h1>
        <h1>Name : {user.username} </h1>
        <h1>Name : {user.email} </h1>
        <h1>Name : {user.phone} </h1>
        <div className="post text-center">
        <h1>POST</h1>
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
        </div>
      </div>
    </section>
  );
};

export default GetData;
