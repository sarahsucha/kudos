// { PropTypes } is equivalent to React.PropTypes
import React, { PropTypes } from 'react';

import NavigationPresentational from './NavigationPresentational.jsx';

// This is a main component for the app, which is rendered on all pages.
// It's a stateless React component, just one function that returns HTML.
// It's an equivalent of the render() function from normal React components.
const App = (props) => {
  return (
    <div>
      <NavigationPresentational />
      {props.children}
    </div>
  );
};

// Every React components gets this automatic children prop by default.
// If you have <App><KudosListPage /></App>, then KudosListPage is your children.
App.propTypes = {
  children: PropTypes.object
}

export default App; // That's how you export things in the latest JavaScript (ES6).
