import React from 'react';
import { ButtonContainer, ButtonIcon } from './styles';

// import { Container } from './styles';
interface ButtonRoundProps {
  icon: string;
  variant?: string;
  action?: Function;
}
export default function ButtonRound({
  icon,
  variant,
  action,
}: ButtonRoundProps) {
  return (
    <ButtonContainer
      color={variant}
      onPress={() => action()}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}

      // appearance="outline"
      // status={variant}
      // icon={() => <Icon name="edit-outline" />}
    >
      <ButtonIcon name={icon} width={22} height={22} color={variant} />
    </ButtonContainer>
  );
}
