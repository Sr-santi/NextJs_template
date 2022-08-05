import React, { ReactNode } from 'react';
import { HeaderContainer } from './styles';

interface Props {
  children?: ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <React.Fragment>
        <HeaderContainer className='px-6'>
            <p className='text-lg'>Prueba</p>
        </HeaderContainer>
    </React.Fragment>
  );
}