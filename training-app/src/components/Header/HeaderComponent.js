import { Layout } from "antd";
import NavigationBar from "./NavigationBar";

const { Header } = Layout;
function HeaderComponent() {
    return (
        <Header style={{ display: "flex", alignItems: "center" }}>
            <NavigationBar />
        </Header>
    );
}

export default HeaderComponent;
