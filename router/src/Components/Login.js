import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { userLogin } from "../API/Api";
import { UserContext } from "../Context/UserContext";
const Login = () => {
  const [mailValue, setMailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
    const {setUser} = React.useContext(UserContext);

  const handleSubmit = async () => {
    try {
      const response = await userLogin({
        email: mailValue,
        password: passwordValue,
      });
        setUser(response.data.user);
        console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="mainTitle">Login</h1>
      <Form
     
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            onChange={(e) => setMailValue(e.target.value)}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            onChange={(e) => setPasswordValue(e.target.value)}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="button"
            htmlType="submit"
            className="login-form-button"
            onClick={handleSubmit}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
