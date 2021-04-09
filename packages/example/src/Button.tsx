import React from 'react';

import goodbye from './goodbye';

interface Props {
  isActive: boolean;
}
const Button: React.FC<Props> = function (props) {
  const { isActive } = props;
  return <button disabled={!isActive}>{goodbye}</button>;
};

export default Button;
