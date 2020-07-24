import React from 'react';

import Feed from '../Feed'

import { Container, Banner, Avatar, ProfileData, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>

              <h1>USER</h1>
              <h2>@USER</h2>

              <p>Biography</p>

              <Followage>
                  <span>
                      following <strong>94</strong>
                  </span>
                  <span>
                      <strong>672 </strong> followeers
                  </span>
              </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;