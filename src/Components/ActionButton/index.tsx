import React, { ReactNode } from 'react';
import { ActionButtonWrapper } from './styles';

type Sizes = "small" | "medium" | "big"

interface Props {
  children?: ReactNode;
  size?: Sizes;
  text: string;
  arrow?: boolean;
}

export default function ActionButton({ children, size, text, arrow }: Props) {
    const Arrow = arrow === true ? <span>&rarr;</span> : ""
  return (
    <React.Fragment>
        <a href="#">
            {/* put size here */}
            <ActionButtonWrapper size={size}>
                <div>{text} {Arrow}</div>
            </ActionButtonWrapper>
        </a>
    </React.Fragment>
  );
}