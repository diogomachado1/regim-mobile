import React from 'react';
import { Text, Card, CardHeader, Avatar, Icon } from '@ui-kitten/components';
import {
  Container,
  InfoText,
  GroupText,
  ButtonGroup,
  ButtonIcon,
} from './styles';
import { measureLower } from '../../../utils/getMeasure';
import ButtonRound from '../../../Components/Button/ButtonRound';

// import { Container } from './styles';
enum Measure {
  g,
  ml,
  unity,
}
interface Product {
  id: number;
  name: string;
  measure: Measure;
  amount: string;
  price: string;
  public: boolean;
  image: {
    url: string;
  };
}

interface ProducProductItemProps {
  product: Product;
  onEdit: Function;
  onRemove: Function;
  onDuplicate: Function;
  onPublication: Function;
}

export default function ProductItem({
  product: { name, image, amount, measure, price, id },
  product,
  onEdit,
  onRemove,
  onDuplicate,
  onPublication,
}: ProducProductItemProps) {
  return (
    <Container
      header={() => (
        <CardHeader title={name}>
          <Avatar
            style={{ marginRight: 10 }}
            source={{
              uri: image
                ? image.url
                : `https://ui-avatars.com/api/?name=${name}&background=0D8ABC&color=fff&rounded=true&bold=true&size=128`,
            }}
          />
          <GroupText>
            <Text>{name}</Text>
            <InfoText>
              {`${parseFloat(amount).toFixed(0)} ${
                measureLower[measure]
              } por R$${price.replace('.', ',')} `}
            </InfoText>
          </GroupText>
        </CardHeader>
      )}
      status="danger"
    >
      <ButtonGroup>
        <ButtonRound
          icon="edit-outline"
          variant="warning"
          action={() => onEdit(id)}
        />
        <ButtonRound
          icon="trash-2-outline"
          variant="danger"
          action={() => onRemove(id)}
        />
        <ButtonRound icon="copy-outline" action={() => onDuplicate(id)} />
        <ButtonRound
          icon="globe-2-outline"
          action={() => onPublication(product)}
          variant={product.public ? 'info' : 'basic'}
        />
        {/* <Button icon={() => <Icon name="trash-2-outline" />} />
        <Button icon={() => <Icon name="copy-outline" />} />
        <Button icon={() => <Icon name="globe-2-outline" />} /> */}
      </ButtonGroup>
    </Container>
  );
}
