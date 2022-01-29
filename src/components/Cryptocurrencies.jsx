import { Card, Col, Row } from 'antd';
import millify from 'millify';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ homepage }) => {
  const { data, isFetching } = useGetCryptosQuery();
  console.log(data);
  const [cryptos, setCryptos] = useState(Object.values(data?.result ?? {}));
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (data) {
      let filteredCryptos = Object.values(data?.result);
      if (homepage) filteredCryptos.splice(10);
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
              key={crypto.key}
            >
              <Link to={`/cryptoworld/coin/profile/${crypto.key}`}>
                <Card
                  title={`${crypto.rank}. ${crypto.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={`${crypto.logo}`}
                      alt={`${crypto.name}`}
                    />
                  }
                  hoverable
                >
                  <p>Price : {millify(crypto?.quote?.quotes_price) || 0}</p>
                  <p>
                    Market cap : {millify(crypto?.quote?.quotes_marketCap) || 0}
                  </p>
                  <p>
                    Daily change :{' '}
                    {millify(crypto?.quote?.quotes_percentChange24h) || 0}%
                  </p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Cryptocurrencies;
