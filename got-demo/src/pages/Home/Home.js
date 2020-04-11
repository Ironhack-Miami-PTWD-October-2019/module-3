import React from 'react';

import GotService from '../../services/GotService';

import EpisodesList from '../../components/EpisodesList/EpisodesList';

class Home extends React.Component {
  // to get anything from any API (our or 3rd party) we have to use AXIOS (which we do in services)
  // so we have to place the service in the componentDidMount()

  state = {
    allEpisodes: []
  };

  componentDidMount() {
    GotService.getAllEpisodes()
      .then(resFromApi => {
        // console.log(resFromApi);
        this.setState({ allEpisodes: resFromApi.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { allEpisodes } = this.state;
    return (
      <>
        <div className='row'>
          <div className='col-12 p-4'>
            <EpisodesList allEpisodes={allEpisodes} />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
