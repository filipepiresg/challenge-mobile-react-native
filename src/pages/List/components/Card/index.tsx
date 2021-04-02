import React, {useMemo, memo} from 'react';
import FastImage from 'react-native-fast-image';

import {CharacterInterface} from '../../../../store/modules/Interfaces';
import styles, {
  Container,
  Background,
  Content,
  Image,
  Title,
  Description,
} from './styles';

type Props = {
  data: CharacterInterface;
};

const Card = ({data}: Props) => {
  const uri = useMemo(
    () =>
      `${data.thumbnail.path}/standard_large.${data.thumbnail.extension}`.replace(
        /(^\w+:|^)\/\//,
        'https://',
      ),
    [data.thumbnail.extension, data.thumbnail.path],
  );

  const uriLandscape = useMemo(
    () =>
      `${data.thumbnail.path}/detail.${data.thumbnail.extension}`.replace(
        /(^\w+:|^)\/\//,
        'https://',
      ),
    [data.thumbnail.extension, data.thumbnail.path],
  );

  return (
    <Container>
      <Background
        source={{uri: uriLandscape}}
        imageStyle={styles.imageBackground}>
        <Image
          source={{
            uri,
            priority: FastImage.priority.normal,
          }}
        />

        <Content>
          <Title>{data.name}</Title>

          <Description>{data.description}</Description>
        </Content>
      </Background>
    </Container>
  );
};

export default memo(Card);
