import { Card, Col, Row } from 'antd';
import millify from 'millify';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ homepage }) => {
  const limit = homepage ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(limit);
  const [cryptos, setCryptos] = useState(data?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (data) {
      let filteredCryptos = data?.data?.coins;
      filteredCryptos = filteredCryptos?.filter((crypto) =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCryptos(filteredCryptos);
    }
  }, [searchTerm, data, homepage]);

  if (isFetching) return <Loader />;

  return (
    <div>
      {!homepage ? (
        <div className="search-crypto">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      ) : (
        ''
      )}
      <Row gutter={[32, 32]}>
        {cryptos &&
          cryptos?.map((crypto) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={crypto.uuid}
            >
              <Link to={`/cryptoworld/coin/${crypto.uuid}`}>
                <Card
                  title={`${crypto.rank}. ${crypto.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={`${crypto.iconUrl}`}
                      alt={`${crypto.name}`}
                    />
                  }
                  hoverable
                >
                  <p>Price : {millify(crypto?.price) || 0}</p>
                  <p>Market cap : {millify(crypto?.marketCap) || 0}</p>
                  <p>Daily change : {millify(crypto?.change) || 0}%</p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Cryptocurrencies;
