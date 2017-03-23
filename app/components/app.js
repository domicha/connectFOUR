import React from 'react';
import Connect4 from './connect-4/connect4';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <h1 class="titlefy">Connectify FOUR!</h1>

          <div>
            <audio autoplay loop>
              <source src="mario.mp3" type="audio/mpeg"/>
            </audio>
          </div>

        <Connect4 />
      </div>
    );
  }
}
