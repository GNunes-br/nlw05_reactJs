import "../styles/global.scss";
import styles from "../styles/app.module.scss";

import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { PlayerContext } from "../contexts/PlayerContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0); 
  const [isPlaying, setisPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setisPlaying(true);
  }

  function togglePlay(){
    setisPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean){
    setisPlaying(state);
  }

  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, isPlaying, play, togglePlay, setPlayingState }}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}

export default MyApp;
