import { Layout } from "antd";

import "./content.css";
import Hobbies from "../Hobbies/Hobbies";

const { Content } = Layout;
const ContentComponent = () => {
    return <Content className="content"><Hobbies/></Content>;
}

export default ContentComponent;