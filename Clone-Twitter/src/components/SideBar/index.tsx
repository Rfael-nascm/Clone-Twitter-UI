import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search in Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="You Might Like"
            elements={[
              <FollowSugestion name="User1" nickname="@user1" />,
              <FollowSugestion name="User2" nickname="@user2" />,
              <FollowSugestion name="User3" nickname="@user3" />,
              <FollowSugestion name="User4" nickname="@user4" />,
            ]}
          />

          <List
            title="What's happening?"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
