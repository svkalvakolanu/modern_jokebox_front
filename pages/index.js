import React, { useState, useEffect } from "react";
import Player from "../components/Player/Player";
import RemixModal from "../components/RemixModal/RemixModal";
import dummyData from "../data.json";
import Layout from "../components/Layout/Layout";
import AboutModal from "../components/AboutModal/AboutModal";

const Page = () => {
  const [songList, setSongList] = useState(dummyData);
  const [currentSong, setCurrent] = useState(0);
  const [playList, setPlayList] = useState(songList);
  const [remixModal, setRemixModal] = useState(true);
  const [aboutModal, setAboutModal] = useState(false);
  const [activePlaylists, setActivePlaylists] = useState([]);

  useEffect(() => {
    dummyData.sort(() => Math.random() - 0.5);
    setSongList(dummyData);
  }, []);

  let advanceSong = () => {
    if (currentSong < playList.length - 1) {
      let nextSong = currentSong + 1;
      setCurrent(nextSong);
    } else {
      dummyData.sort(() => Math.random() - 0.5);
      setSongList(dummyData);
      setCurrent(0);
    }
  };

  let prevSong = () => {
    if (currentSong !== 0) {
      let prevSong = currentSong - 1;
      setCurrent(prevSong);
    }
  };

  let checkPlaylist = playlist => {
    let count = 0;
    playlist.forEach(list => {
      if (activePlaylists.includes(list)) {
        count += 1;
      }
    });
    if (count > 0) {
      return true;
    } else {
      return false;
    }
  };

  let filterList = () => {
    let result = [];
    let hold;
    activePlaylists.forEach(play => {
      let newList = songList.slice(0);
      hold = newList.filter(song => song.playlist.includes(play));
      hold.forEach(song => {
        if (!result.includes(song)) {
          result.push(song);
        }
      });
    });
    setPlayList(result);
  };

  let toggleRemixModal = () => {
    let update = !remixModal;
    setRemixModal(update);
  };

  let toggleAboutModal = () => {
    let update = !aboutModal;
    setAboutModal(update);
  };

  const updateActive = category => {
    let update = activePlaylists.slice(0);
    if (update.includes(category)) {
      let idx = update.indexOf(category);
      update.splice(idx, 1);
    } else {
      update.push(category);
    }
    setActivePlaylists(update);
  };

  return (
    <div className="backdrop">
      <Layout>
        <Player
          playList={playList}
          songList={songList}
          currentSong={currentSong}
          advanceSong={advanceSong}
          prevSong={prevSong}
          toggleRemixModal={toggleRemixModal}
          toggleAboutModal={toggleAboutModal}
        />
        <RemixModal
          display={remixModal}
          updateDisplay={toggleRemixModal}
          updateActive={updateActive}
          filterList={filterList}
        />
        <AboutModal display={aboutModal} updateDisplay={toggleAboutModal} />
      </Layout>

      <style jsx>{`
        .backdrop {
          background: rgba(0, 0, 0, 1);
        }
      `}</style>
    </div>
  );
};

export default Page;
