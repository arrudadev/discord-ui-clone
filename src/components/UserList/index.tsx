import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserRowProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserRowProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Alexandre Monteiro" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Alexandre Monteiro" isBot />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" isBot />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" isBot />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" />
      <UserRow nickname="Discord User" />
    </Container>
  );
};

export default UserList;
