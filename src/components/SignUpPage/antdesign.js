import { Form, Input, Button } from "antd";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Demo = () => {
  const [input, setInput] = useState(() => {
    const localData = localStorage.getItem("new Fullname");

    return localData ? JSON.parse(localData) : [];
  }, "");
  const [email, setEmail] = useState(() => {
    const localData = localStorage.getItem("new Email");

    return localData ? JSON.parse(localData) : [];
  }, "");
  const [pwd, setPwd] = useState(() => {
    const localData = localStorage.getItem("new password");

    return localData ? JSON.parse(localData) : [];
  }, "");

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  useEffect(() => {
    localStorage.setItem(" new Fullname", input);
    localStorage.setItem(" new Email", input);
    localStorage.setItem("new password", pwd);
  }, [input, pwd]);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    setEmail(e.target.value);
    setPwd(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("newname", input);
    localStorage.setItem("newname", email);
    localStorage.setItem("newname", pwd);
  }, [input, email, pwd]);

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <label style={{ color: "blueviolet" }}>Full Name</label>

      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input onChange={handleChange} />
      </Form.Item>
      <br />
      <label style={{ color: "blueviolet" }}>Email Id</label>

      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input onChange={handleChange} />
      </Form.Item>
      <br />
      <label style={{ color: "blueviolet" }}>Password</label>

      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password onChange={handleChange} />
      </Form.Item>
      <br />

      <Form.Item>
        {input.value === "" ? (
          alert("not valid")
        ) : (
          <Link to="/home">
            <Button
              type="primary"
              htmlType="submit"
              style={{ padding: "20px 80px", marginLeft: "150px" }}
            >
              <p style={{ marginTop: "-10px" }}>SignUp</p>
            </Button>
          </Link>
        )}
      </Form.Item>
      <div
        style={{
          display: "flex",
          paddingLeft: "130px",
          fontSize: "16px",
          paddingTop: "20px",
        }}
      >
        <p style={{ color: "blueviolet" }}>already have an account ? </p>
        <Link to="/Login">
          <p style={{ paddingLeft: "10px" }}>Login</p>
        </Link>
      </div>
    </Form>
  );
};

export default Demo;
