import { Layout } from "antd";
import HeaderComponent from "../Header/HeaderComponent";
import ContentComponent from "../Content/ContentComponent";
import FooterComponent from "../Footer/FooterComponent";

function LayoutComponent() {
  return (
    <Layout className="layout">
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </Layout>
  );
}

export default LayoutComponent;
