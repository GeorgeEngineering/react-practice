import { Layout } from "antd";
import HeaderComponent from "../Header/HeaderComponent";
import ContentComponent from "../Content/ContentComponent";
import FooterComponent from "../Footer/FooterComponent";

import './layout.css';

const LayoutComponent = () => {
  return (
    <div>
      <Layout className="layout">
        <HeaderComponent className="header"/>
        <ContentComponent />
        <FooterComponent className="footer" />
      </Layout>
    </div>
  );
};

export default LayoutComponent;