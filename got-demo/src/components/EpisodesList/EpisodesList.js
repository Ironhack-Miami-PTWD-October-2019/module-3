import React from 'react';

import SingleEpisode from '../SingleEpisode/SingleEpisode';
const EpisodesList = props => {
  const { allEpisodes } = props;

  const list = allEpisodes.map((oneEpisode, i) => {
    return (
      // https://getbootstrap.com/docs/4.4/layout/grid/#grid-options
      // col-12 - when <768px - one episode per screen width
      // col-md-6 - when on tablets (or similar size proportions (768 - 992px)) - two episodes per screen width
      // col-lg-3 - when on bigger screens (>992px) - 4 episodes per screen width
      <div className='col-12 col-md-6 col-lg-3 mb-4' key={i}>
        <SingleEpisode episode={oneEpisode} />
      </div>
    );
  });

  return (
    <>
      <h3>All Episodes</h3>
      <div className='row'>{list}</div>
    </>
  );
};

export default EpisodesList;
