import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const Demo1 = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        <Input />
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
        <Input.Password />
      </Form.Item>
      <br />

      <Form.Item>
        <Link to="/home">
          <Button
            type="primary"
            htmlType="submit"
            style={{ padding: "20px 80px", marginLeft: "150px" }}
          >
            <p style={{ marginTop: "-10px" }}>SignIn</p>
          </Button>
        </Link>
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
