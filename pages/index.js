import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Player from "../components/Player/Player";
import RemixModal from "../components/RemixModal/RemixModal";
import dummyData from "../data.json";
import checkCustomRoutes from "next/dist/lib/check-custom-routes";
import Layout from "../components/Layout/Layout";

const Page = () => {
  const [songList, setSongList] = useState(dummyData);
  const [currentSong, setCurrent] = useState(0);
  const [playList, setPlayList] = useState(songList);
  const [remixModal, setRemixModal] = useState(true);
  const [activePlaylists, setActivePlaylists] = useState([]);

  useEffect(() => {
    setSongList(dummyData);
  });

  let advanceSong = () => {
    if (currentSong < playList.length - 1) {
      let nextSong = currentSong + 1;
      setCurrent(nextSong);
    }
  };

  let prevSong = () => {
    if (currentSong !== 0) {
      let prevSong = currentSong - 1;
      setCurrent(prevSong);
    }
  };

  let checkPlaylist = (playlist) => {
    let count = 0
    playlist.forEach(list => {
      if(activePlaylists.includes(list)){
        count += 1
      }
    })
    if(count > 0){
      return true
    } else {
      return false
    }
  }

  let filterList = () => {
    let result = []
    let hold
    activePlaylists.forEach(play => {
      let newList = songList.slice(0);
      hold = newList.filter(song =>
        song.playlist.includes(play)
      )
      hold.forEach(song => {
        result.push(hold)
      })
    })
    console.log(result)
      setPlayList(result);
    }

  let toggleRemixModal = () => {
    let update = !remixModal
    setRemixModal(update);
  };

  console.log(playList)

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
        />
        <RemixModal
          display={remixModal}
          updateDisplay={toggleRemixModal}
          updateActive={updateActive}
          filterList={filterList}
        />
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
