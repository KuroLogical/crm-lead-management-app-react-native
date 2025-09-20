import React, {Fragment} from 'react';

function Visibility({visible, children}) {
  return visible && children ? children : <Fragment />;
}
export default Visibility;
