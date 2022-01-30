import React from 'react';

import { Typography, Row, Col } from 'antd';
import { Line } from 'react-chartjs-2';
const { Title } = Typography;
const LineChart = ({ coinName, currentPrice, cryptoHistory }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  cryptoHistory?.data?.history?.forEach((coin) => {
    coinPrice.push(coin.price);
    coinTimestamp.push(new Date(coin.timestamp * 1000).toLocaleDateString());
  });
  coinPrice.reverse();
  coinTimestamp.reverse();
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: true,
        backgroundColor: 'rgba(192,75,207,0.1)',
        borderColor: 'rgba(192,75,207,1)',
      },
    ],
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {cryptoHistory?.data?.change} %
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} />
    </>
  );
};

export default LineChart;
