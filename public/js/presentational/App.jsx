import React, { PropTypes } from 'react';

import NavigationPresentational from './NavigationPresentational.jsx';

const App = (props) => {
  return (
    <div>
      <NavigationPresentational />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
}

export default App;
