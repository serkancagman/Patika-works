import React from "react";
import LoginStyle from "./loginorregister.module.css";
import { Login } from "./Login";
import { Register } from "./Register";
export const LoginOrRegister = ({toBack}) => {
  const [login, setLogin] = React.useState(false);
  
  return (
    <>
      
        <section className={LoginStyle.loginMain}>
          <div className={LoginStyle.loginMainArea}>
          <div className={LoginStyle.loginRegisterWrapper}>
            {login && <Login toRegister={setLogin} toBack={toBack} />}
            {login === false && <Register toBack={toBack} toRegister={setLogin} />}
          </div>
          </div>
          
        </section>
      
    </>
  );
};
