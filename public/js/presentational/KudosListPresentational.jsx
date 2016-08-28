import React, { PropTypes } from 'react'; //don't need Component because in presentation use stateless function componenets. which only return uah html and is equivalent of the render function in react componenets

const KudosListPresentational = (props) => {
  return (
    <div className="main" id="latestKudos">
      <h2>latest kudos</h2>
      <ul>
          <li>A latest kudos will go in here</li>
      </ul>
    </div>
  );
};

export default KudosListPresentational;
