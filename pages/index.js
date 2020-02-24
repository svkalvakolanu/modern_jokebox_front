import React, { useState, useEffect } from "react";
import Head from "next/head";
import Fullscreen from "react-full-screen";
import Player from "../components/Player/Player";
import dummyData from "../data.json";
import Layout from "../components/Layout/Layout";

const Page = () => {
  const [songList, setSongList] = useState(dummyData);
  const [currentSong, setCurrent] = useState(0);
  const [playList, setPlayList] = useState(songList);
  const [remixModal, setRemixModal] = useState(true);
  const [visualizer, setVisualizer] = useState(false);
  const [activePlaylists, setActivePlaylists] = useState([]);
  const [isFull, setIsFull] = useState(false);

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
    result.sort(() => Math.random() - 0.5);
    setPlayList(result);
  };

  let toggleRemixModal = () => {
    let update = !remixModal;
    setRemixModal(update);
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

  let toggleFullScreen = () => {
    let update = !isFull;
    setIsFull(update);
  };


  let toggleVisualizer = () => {
    let update = !visualizer;
    setVisualizer(update);
  };

  return (
    <div className="backdrop">
      <Head>
        <title>
          {remixModal
            ? `VIBR`
            : `${playList[currentSong].artist} - ${playList[currentSong].title}`}
        </title>
        <link rel="icon" href="/responsive.png" />
      </Head>

      <Fullscreen enabled={isFull}>
        <Layout>
          <Player
            playList={playList}
            songList={songList}
            currentSong={currentSong}
            advanceSong={advanceSong}
            prevSong={prevSong}
            toggleRemixModal={toggleRemixModal}
            display={remixModal}
            updateDisplay={toggleRemixModal}
            updateActive={updateActive}
            filterList={filterList}
            toggleFullScreen={toggleFullScreen}
            fs={isFull}
            updateVisualizer={toggleVisualizer}
            visualizer={visualizer}
          />
        </Layout>
      </Fullscreen>

      <style jsx>{`
        .backdrop {
          background: rgba(0, 0, 0, 1);
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Page;
