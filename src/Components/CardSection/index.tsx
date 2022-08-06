import React, { ReactNode } from 'react';
import { Card, CardSectionContainer, CardText, CardTitle } from './styles';

type Sizes = "small" | "medium" | "big"

interface Props {
  children?: ReactNode;
}
// pending component
export default function CardSection({ children }: Props) {
  return (
    <React.Fragment>
        <CardSectionContainer>
            <Card>
                <CardTitle>Documentation &rarr;</CardTitle>
                <CardText>Find in-depth information about Next.js features and API.</CardText>
            </Card>
            <Card>
                <CardTitle>Documentation &rarr;</CardTitle>
                <CardText>Find in-depth information about Next.js features and API.</CardText>
            </Card>
            <Card>
                <CardTitle>Documentation &rarr;</CardTitle>
                <CardText>Find in-depth information about Next.js features and API.</CardText>
            </Card>
            <Card>
                <CardTitle>Documentation &rarr;</CardTitle>
                <CardText>Find in-depth information about Next.js features and API.</CardText>
            </Card>
        </CardSectionContainer>
    </React.Fragment>
  );
}