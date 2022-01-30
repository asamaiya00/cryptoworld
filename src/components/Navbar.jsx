import { Menu, Typography, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import icon from '../images/cryptocurrencies.png';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize < 800) setShowMenu(false);
    else setShowMenu(true);
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar style={{ marginRight: '12px' }} src={icon} size={'large'} />
        <Typography.Title level={2}>
          <Link to="/cryptoworld/">CryptoWorld </Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setShowMenu(!showMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>

      {showMenu && (
        <div>
          <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
              <Link to="/cryptoworld/">Home </Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
              <Link to="/cryptoworld/cryptocurrencies">Cryptocurrencies </Link>
            </Menu.Item>
            {/* <Menu.Item icon={<MoneyCollectOutlined />}>
              <Link to="/cryptoworld/exchanges">Exchanges </Link>
            </Menu.Item> */}
            <Menu.Item icon={<BulbOutlined />}>
              <Link to="/cryptoworld/news">News </Link>
            </Menu.Item>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default Navbar;
