import React from "react";
import { GetInput } from "./GetInput";

export const List = () => {
    const [filtered,setFiltered] = React.useState("")
  const [contact, setContact] = React.useState([
      {
      userName:"Merve",
      phoneNumber:123213
  },
  {
    userName:"Zeynep",
    phoneNumber:468126
}
]);

    const getFiltered = contact.filter(item =>{
        return Object.keys(item).some((key)=>
        item[key]
        .toString()
        .toLowerCase()
        .includes(filtered.toLocaleLowerCase())
        )
    })



  return (
    <div className="mainContact">
      <GetInput contact={contact} newContact={setContact} />

      {getFiltered.map((userList, i) => (
        <ul key={i} className="text-center">
          <li>
            <a className="text-decoration-none" href="/">
              Name : {userList.userName} Phone : {userList.phoneNumber}{" "}
            </a>
          </li>
        </ul>
      ))}
      <input placeholder="Search in Contact..." value={filtered} onChange={(e)=>setFiltered(e.target.value)} ></input>
    </div>
  );
};
