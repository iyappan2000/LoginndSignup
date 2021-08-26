import { Form, Input, Button } from "antd";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Demo = () => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
  };

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
  }, [input]);

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
        <Input onChange={handleChange} value={input} />
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
        <Input onChange={handleChange} value={email} />
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
        <Input.Password onChange={handleChange} value={pwd} />
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
