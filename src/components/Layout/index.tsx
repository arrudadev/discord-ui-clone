import React from 'react';

import { Grid } from './styles';

import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import UserInfo from '../UserInfo';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
    </Grid>
  );
};

export default Layout;
