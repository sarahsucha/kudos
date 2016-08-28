import React, { PropTypes } from 'react'; //don't need Component because in presentation use stateless function componenets. which only return uah html and is equivalent of the render function in react componenets

const KudosListPresentational = ({ onKudoDeleteClick, kudos }) => {
  return (
    <div className="main" id="latestKudos">
      <h2>latest kudos</h2>
        {kudos.map((kudo, key) => {
          return (
            <div key={key} className="kudo">
              {kudo.description}
              <button onClick={() => {
                  onKudoDeleteClick(kudo.kudo_id);
                }}>Delete</button>
            </div>
          )
        })}
    </div>
  );
};

KudosListPresentational.propTypes = {
  onKudoDeleteClick: PropTypes.func.isRequired,
  kudos: PropTypes.array.isRequired,
}

export default KudosListPresentational;
