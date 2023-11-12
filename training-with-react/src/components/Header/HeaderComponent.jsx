import { Layout } from "antd";
import NavigationBarComponent from "./NavigationBarComponent";

import "./header.css";

const { Header } = Layout;
const HeaderComponent = () => {
    return (
        <Header>
            <NavigationBarComponent/>
        </Header>
    );
}

export default HeaderComponent;
