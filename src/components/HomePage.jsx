import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";

const HomePage = () => {
  const { data } = useGetCryptosQuery();
  const stats = data?.data?.stats;
  return (
    <div>
      <Typography.Title className="heading" level="2">
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span="12">
          <Statistic
            title="Total Cryptocurrencies"
            value={stats.total}
          ></Statistic>
        </Col>
        <Col span="12">
          <Statistic
            title="Total Exchanges"
            value={millify(stats.totalExchanges)}
          ></Statistic>
        </Col>
        <Col span="12">
          <Statistic
            title="Total Market Cap"
            value={millify(stats.totalMarketCap)}
          ></Statistic>
        </Col>
        <Col span="12">
          <Statistic
            title="Total 24h Volume"
            value={millify(stats.total24hVolume)}
          ></Statistic>
        </Col>
        <Col span="12">
          <Statistic
            title="Total Markets"
            value={millify(stats.totalMarkets)}
          ></Statistic>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
