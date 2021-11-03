import { Col, Row, Statistic, Typography } from "antd";

const HomePage = () => {
  return (
    <div>
      <Typography.Title className='heading' level="2">Global Crypto Stats</Typography.Title>
      <Row>
        <Col span="12">
          <Statistic title="Total Cryptocurrencies" value={"5"}></Statistic>
        </Col>
        <Col span="12">
          <Statistic title="Total Exchanges" value={"5"}></Statistic>
        </Col>
        <Col span="12">
          <Statistic title="Total Market Cap" value={"5"}></Statistic>
        </Col>
        <Col span="12">
          <Statistic title="Total 24h Volume" value={"5"}></Statistic>
        </Col>
        <Col span="12">
          <Statistic title="Total Markets" value={"5"}></Statistic>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
