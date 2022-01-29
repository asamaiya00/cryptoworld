import { Col, Row, Card, Statistic, Typography } from 'antd';
import { useGetStatsQuery } from '../services/cryptoApi';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Cryptocurrencies, News } from '.';
import Loader from './Loader';

const HomePage = () => {
  const { data, isFetching } = useGetStatsQuery();
  const stats = data?.result;

  const { Title } = Typography;
  if (isFetching) return <Loader />;
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
              value={stats?.num_cryptocurrencies}
            ></Statistic>
          </Card>
          <Card style={{ marginTop: '16px' }}>
            <Statistic
              title="Total Market Cap"
              value={millify(stats?.market_cap)}
            ></Statistic>
          </Card>
          <Card style={{ marginTop: '16px' }}>
            <Statistic
              title="Total 24h Volume"
              value={millify(stats?.total_vol)}
            ></Statistic>
          </Card>
          <Card style={{ marginTop: '16px' }}>
            <Statistic
              title="Total Markets"
              value={millify(stats?.num_markets)}
            ></Statistic>
          </Card>
          <Card style={{ marginTop: '16px' }}>
            <Statistic
              title="Total Exchanges"
              value={millify(stats?.active_exchanges)}
            ></Statistic>
          </Card>
        </Col>
      </Row>

      <div className="home-heading-container" style={{ marginTop: '12px' }}>
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
