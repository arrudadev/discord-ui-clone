/* eslint-disable react/jsx-wrap-multilines */
import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelChat: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(10).keys()).map((key: number) => (
          <ChannelMessage
            key={key}
            author="Discord User"
            date="04/08/2020"
            content="Isso é uma mensagem em formato de texto"
          />
        ))}

        <ChannelMessage
          author="Alexandre Monteiro"
          date="04/08/2020"
          content={
            <>
              <Mention>@Discord User</Mention>, isso é uma mensagem com menção
              em formato de React Component
            </>
          }
          hasMention
          isBot
        />

        {Array.from(Array(10).keys()).map((key: number) => (
          <ChannelMessage
            key={key}
            author="Discord User"
            date="04/08/2020"
            content="Isso é uma mensagem em formato de texto"
          />
        ))}

        <ChannelMessage
          author="Alexandre Monteiro"
          date="04/08/2020"
          content={
            <>
              <Mention>@Discord User</Mention>, isso é uma mensagem com menção
              em formato de React Component
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelChat;
