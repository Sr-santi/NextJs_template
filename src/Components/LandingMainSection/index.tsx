import ActionButton from '@Components/ActionButton';
import React, { ReactNode } from 'react';
import { LandingMainSectionContainer, SubTitle, Title } from './styles';

interface Props {
  children?: ReactNode;
}

export default function LandingMainSection({ children }: Props) {
  return (
    <React.Fragment>
        <LandingMainSectionContainer>
            <Title time={"2s"} >Boost up your <span>DAO</span></Title>
            <Title time={"1.5s"} reverse>Boost up your <span>Dream</span></Title>
            <SubTitle>Enable your DAO seamlest read, interact and vote from Discord</SubTitle>
            <br />
            <ActionButton text={"Add to your Discord"} size="medium" arrow/>
        </LandingMainSectionContainer>
    </React.Fragment>
  );
}