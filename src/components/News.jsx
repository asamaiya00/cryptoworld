import { useState } from "react";
import { Col, Row, Typography, Card, Select, Avatar } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title, Text } = Typography;
const { Option } = Select;

const backupImage =
  "https://images.pexels.com/photos/4808279/pexels-photo-4808279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const News = ({ homepage }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptoNewsQuery({
    newsCategory,
    count: homepage ? 6 : 12,
  });
  const { data: cryptos } = useGetCryptosQuery(100);

  if (!data?.value) return <Title level={2}>Loading...</Title>;

  return (
    <Row gutter={[24, 24]}>
      {!homepage ? (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            onChange={(value) => setNewsCategory(value)}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) > 0
            }
          >
            <Option value="Cryptocurrency"> All Cryptocurrencies</Option>
            {cryptos?.data?.coins?.map((crypto) => (
              <Option value={crypto.name}>{crypto.name}</Option>
            ))}
          </Select>
        </Col>
      ) : (
        ""
      )}
      {data?.value.map((news, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}{" "}
                </Title>
                <img
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl || backupImage}
                  alt="news"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={news.provider[0]?.image?.thumbnail?.contentUrl}
                    alt="news"
                  ></Avatar>
                  <Text className="provider-name">
                    {news?.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news?.datePublished)?.startOf("ss")?.fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
