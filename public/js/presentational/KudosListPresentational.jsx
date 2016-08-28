import React, { PropTypes } from 'react';

// This: ({ onKudoDeleteClick, kudos }) is equivalent of this:
// (props), const onKudoDeleteClick = props.onKudoDeleteClick; const kudos = props.kudos;
// Since it's a presentational component, we don't want to make AJAX calls from here.
// We only want to pass properties and render them, that's it. Business logic should be
// handled by callbacks (e.g. onKudoDeleteClick)
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

// propTypes are must-have, because they define API for each component, which
// is very useful in tests as well.
KudosListPresentational.propTypes = {
  onKudoDeleteClick: PropTypes.func.isRequired,
  kudos: PropTypes.array.isRequired,
}

export default KudosListPresentational;
