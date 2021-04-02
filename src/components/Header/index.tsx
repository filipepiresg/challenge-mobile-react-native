import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Icons} from '../../assets';
import {Metrics} from '../../styles';
import {Container, Content, EmptyIcon, Button} from './styles';

interface Props {
  onPress?: Function;
  hasSearch?: Boolean;
}

const Header: React.FC<Props> = ({hasSearch = false, onPress}) => (
  <Container>
    <Content>
      <EmptyIcon />
      <Icons.Marvel
        width={Metrics.deviceWidth * 0.2}
        style={{
          aspectRatio: 1000 / 402,
        }}
      />
      {hasSearch ? (
        <Button
          onPress={() => {
            if (onPress) {
              onPress();
            }
          }}>
          <Ionicons name="search" size={28} />
        </Button>
      ) : (
        <EmptyIcon />
      )}
    </Content>
  </Container>
);

export default Header;
