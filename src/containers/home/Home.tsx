import { Breadcrumb, Button, Col, Layout, Menu, Row } from "antd";

export const Home = () => {
  const { Header, Content } = Layout;
  return (
    <Layout className="home">
      <Header className="d-flex align-items-center">
        <img
          alt="hey-logo"
          height="66"
          width="142"
          src="https://user-images.githubusercontent.com/76699403/197346176-7a86089d-facf-418c-ad0d-fd893171c129.png"
        />
      </Header>
      <Content>Start Content</Content>
    </Layout>
  );
};
