import { Layout } from "antd";

import "./content.css";
import Hobbies from "../Hobbies/Hobbies";
import Todos from "../Todos/Todos";
import Holidays from "../Holidays/Holidays";

const { Content } = Layout;
const ContentComponent = () => {
  return (
    <Content className="content">
      <Hobbies />
      <Todos />
      <Holidays />
    </Content>
  );
};

export default ContentComponent;
