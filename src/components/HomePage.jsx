import { Col, Row, Card, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from ".";
import Loader from "./Loader";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const stats = data?.data?.stats;

  const { Title } = Typography;
  if (isFetching) return <Loader />;
  console.log(stats);
  return (
    <div>
      <Row gutter={[32, 0]}>
        <Col lg={20}>
          <div className="home-heading-container">
            <Title level={2} className="home-title">
              Top 10 Cryptocurrencies globally
            </Title>
            <Title level={4} className="show-more">
              <Link to="/cryptoworld/cryptocurrencies"> Show More</Link>
            </Title>
          </div>
          <Cryptocurrencies homepage />
        </Col>
        <Col lg={4} xs={24}>
          <Title className="heading" level={2}>
            Global Stats
          </Title>
          <Card>
            <Statistic
              title="Total Cryptocurrencies"
              value={stats?.total}
            ></Statistic>
          </Card>
          <Card style={{ marginTop: "16px" }}>
            <Statistic
              title="Total Market Cap"
              value={millify(stats?.totalMarketCap)}
            ></Statistic>
          </Card>
          <Card style={{ marginTop: "16px" }}>
            <Statistic
              title="Total 24h Volume"
              value={millify(stats?.total24hVolume)}
            ></Statistic>
          </Card>
          <Card style={{ marginTop: "16px" }}>
            <Statistic
              title="Total Markets"
              value={millify(stats?.totalMarkets)}
            ></Statistic>
          </Card>
          <Card style={{ marginTop: "16px" }}>
            <Statistic
              title="Total Exchanges"
              value={millify(stats?.totalExchanges)}
            ></Statistic>
          </Card>
        </Col>
      </Row>

      <div className="home-heading-container" style={{ marginTop: "12px" }}>
        <Title level={2} className="home-title">
          Crypto News
        </Title>
        <Title level={4} className="show-more">
          <Link to="/cryptoworld/news"> Show More</Link>
        </Title>
      </div>
      <News homepage />
    </div>
  );
};

export default HomePage;
