import React from 'react';

import goodbye from './goodbye';

type ButtonProps = {
  isActive: boolean;
};
const Button: React.FC<ButtonProps> = function (props) {
  const { isActive } = props;
  return <button disabled={!isActive}>{goodbye}</button>;
};

export default Button;
