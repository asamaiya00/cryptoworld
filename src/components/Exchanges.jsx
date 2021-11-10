import { Row, Col, Collapse, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";
import millify from "millify";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Panel } = Collapse;
const { Text } = Typography;
const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  console.log(data?.data);
  if (isFetching) return <Loader />;
  return (
    <>
      <Row style={{ fontWeight: "700", fontSize: "1rem" }}>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Market Share</Col>
      </Row>
      <Row>
        {data?.data?.exchanges?.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                showArrow={false}
                key={exchange.id}
                header={
                  <Row>
                    <Col span={6}>
                      <Text>
                        <strong> {exchange.rank}. </strong>
                      </Text>
                      <Avatar
                        style={{ marginInline: "12px" }}
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong> {exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}> {millify(exchange.marketShare)}</Col>
                  </Row>
                }
              >
                <>{HTMLReactParser(exchange.description || "")}</>
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
