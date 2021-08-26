import { Form, Input, Button } from "antd";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Demo1 = () => {
  const [input, setInput] = useState("");
  const [pwd, setPwd] = useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    localStorage.setItem("Fullname", input);
    localStorage.setItem("Fullname", pwd);
  }, [input, pwd]);
  const handleClick = (e) => {};
  const handleChange = (e) => {
    setInput(e.target.value);
    setPwd(e.target.value);
  };
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "600px",
        padding: "30px",
      }}
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
        <Input required onChange={handleChange} value={input} />
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
        {handleClick && (
          <Link to="/home">
            <Button
              type="primary"
              htmlType="submit"
              style={{ padding: "20px 80px", marginLeft: "150px" }}
            >
              <p style={{ marginTop: "-10px" }} onClick={handleClick}>
                SignIn
              </p>
            </Button>
          </Link>
        )}
      </Form.Item>
      <div
        style={{
          display: "flex",
          paddingLeft: "420px",
          fontSize: "14px",
          color: "blue",
        }}
      >
        <p style={{ color: "blue" }}>forget password </p>
      </div>
    </Form>
  );
};

export default Demo1;
