import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from ".";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const stats = data?.data?.stats;

  const { Title } = Typography;
  if (isFetching) return <Title level={2}>'Loading...'</Title>;

  return (
    <div>
      <Title className="heading" level="2">
        Global Crypto Stats
      </Title>
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
      <div className="home-heading-container">
        <Title level="2" className="home-title">
          Top 10 Cryptocurrencies globally
        </Title>
        <Title level="2" className="show-more">
          <Link to="/cryptocurrencies"> Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies homepage />
      <div className="home-heading-container">
        <Title level="2" className="home-title">
          Crypto News
        </Title>
        <Title level="2" className="show-more">
          <Link to="/news"> Show More</Link>
        </Title>
      </div>
      <News homepage />
    </div>
  );
};

export default HomePage;
