import React from 'react';

import { Container,
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Description,
    Dot,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              You Have Retweeted
          </Retweeted>

          <Body>
              <Avatar />

              <Content>
                  <Header>
                      <strong>USER</strong>
                      <span>@User</span>
                      <Dot />
                      <time>20/07/2020</time>
                  </Header>

                  <Description>
                      Description
                  </Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          18
                      </Status>
                      <Status>
                          <RetweetIcon />
                          18
                      </Status>
                      <Status>
                          <LikeIcon />
                          999
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;