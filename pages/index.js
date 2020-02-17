import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Player from "../components/Player/Player";
import dummyData from "../data.json";

const Page = () => {
  const [songList, setSongList] = useState(dummyData);
  const [currentSong, setCurrent] = useState(0);
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    setSongList(dummyData);
  });

  let advanceSong = () => {
    if (currentSong < songList.length - 1) {
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

  let filterList = (genre = [], nationality = []) => {
    let newList = songList.slice(0);
    let result;
    if (genre === [] && nationality === []) {
      setPlayList(songList);
      result = newList;
    } else {
      result = newList.filter(
        song =>
          genre.includes(song.genre) && nationality.includes(song.nationality)
      );
      setPlayList(result)
    }
  };

//   let updatePlayList = (genre, nationality) => {
//     let res = filterList(genre, nationality);
//     setPlayList(res);
//   };
  console.log(playList);

  return (
    <div>
      <Header filterList={filterList} />
      <Player
        playList={playList}
        songList={songList}
        currentSong={currentSong}
        advanceSong={advanceSong}
        prevSong={prevSong}
      />
    </div>
  );
};

export default Page;
