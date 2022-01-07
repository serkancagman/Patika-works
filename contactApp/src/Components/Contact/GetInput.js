import React, { useEffect } from "react";



export const GetInput = ({contact, newContact}) => {
    const initForm = { userName: "", phoneNumber: "" };
  const [form, setForm] = React.useState(initForm);

  const onSubmitData = (e) => {
    e.preventDefault();

    if (form.userName === "" || form.phoneNumber === "") {
      return false;
    }
    setForm(initForm)
    newContact([...contact, form])
  };

  const onChangeInput = (e) => {
    setForm({
      ...form, 
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmitData} className="text-center">
      <h1 className="text-center">Contact</h1>
      <div className="my-2 inputArea text-center">
        <input
          name="userName"
          onChange={onChangeInput}
          value={form.userName}
          placeholder="Enter the name..."
        />
      </div>
      <div className="my-2 text-center">
        <input
          name="phoneNumber"
          value={form.phoneNumber}
          placeholder="Enter the phone..."
          onChange={onChangeInput}
        />
      </div>
      <button>Add Person</button>
    </form>
  );
};
