
import React, { useState } from 'react';
import styled from 'styled-components';
export default function a1(){
  
const Button = styled.button`
`;
const tog = styled(Button)`
  opacity: 0.5;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
const grup = styled.div`
  display: flex;
`;
const types = ['Good', 'Ok', 'Bad'];
function togGrup() {
  const [active, setActive] = useState(types[0]);
  return (
    <grup>
      {types.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
    </tog>
      ))}
    </grup>
  );
}
}
