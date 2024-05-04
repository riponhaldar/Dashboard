import React, { useState } from "react";
import { Input } from "../../../components/common/InputFields";
import ScriptFrom from "../../../components/common/ScriptFrom";

const Login = () => {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });
  // const onChange = (e) => {
  //   setFromData({ ...formData, [e.target.name]: e.target.value });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
  };
  return (
    <div className="login__container">
      <div className="login__container__box">
        <div className="login__container__box__inner login">
          <div className="login__container__box__inner__logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIS_GMENyqoWukYofDbpdwLZQoI5s0DmQiw&s"
              alt="logo"
            />
          </div>
          <div className="login__container__box__inner__content">
            <h2>Welcome back</h2>
            <p>Glad to see yoy again👋</p>
            <p>Login to your account below</p>
          </div>
          <div className="login__container__box__inner__form">
            <ScriptFrom formData={formData} handleSubmit={handleSubmit}>
              {(onChange) => (
                <form autoComplete="off">
                  <Input
                    name="email"
                    placeholder="mack****@gmail.com"
                    label="Email"
                    value={formData.email}
                    onChange={onChange}
                    type="email"
                  />
                  <Input
                    type="password"
                    name="password"
                    placeholder="*******"
                    label="Password"
                    value={formData.password}
                    onChange={onChange}
                  />
                  <button type="submit" onClick={handleSubmit}>
                    Submit
                  </button>
                </form>
              )}
            </ScriptFrom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
