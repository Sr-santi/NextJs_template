import React, { ReactNode } from 'react';
import { ActionButtonWrapper } from './styles';

type Sizes = "small" | "medium" | "big"

interface Props {
  children?: ReactNode;
  size?: Sizes;
  text: string;
}

export default function ActionButton({ children, size, text }: Props) {
  return (
    <React.Fragment>
        <a href="#">
            {/* put size here */}
            <ActionButtonWrapper>
                <div>{text}</div>
            </ActionButtonWrapper>
        </a>
    </React.Fragment>
  );
}