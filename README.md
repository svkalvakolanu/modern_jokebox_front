# Welcome to Vibr:

Vibr is a curated music discovery engine inspired by the days of MTV Music Videos. Open Vibr to have a selection of music play accompanied by the full screen music video or music visualizer. Simple-mode is also available if you want to listen incognito.

## Designs

![main](/components/images/Identity1.png)
For full design images, see the planning folder linked in the main repo.

## Links:

- Repo: https://github.com/svkalvakolanu/vibr.git
- Deployed Site: http://vibrmusic.herokuapp.com

## Medal Distinctions:

### MVP Features:

- Plays Music Videos (from YouTube) in a random order and loops it. -- Videos don't repeat until all are played.
- Songs can be filtered by mood/vibe (idea for UI of Visual: World Map with selected regions highlighted Spotify like tiles for Genres)
- Links to Spotify, Apple Music, Tidal using URI links.
- Share Website (link)
- Play, Pause, Skip features (overlay that controls YouTube Video) also have some hotkeys
- Hover effect for UI and Display of MV information (Title, Artist, Album, etc.)

### Silver Ideas:

- Music Visualizer - basic: randomized pixels to beat. Need to add BPMs as a data point for each song.
- Random colors for visualizer - 1) add array of colors hardcoded for each song, 2) have users provide one or many colors to loop through, 3) use video AI tool to determine color pallette of MV and use those colors.
  Inspired by: Screen Savers (Flying Toasters, etc.), Windows Media Player Visualizer feature

### Gold Ideas:

- CRTV Effect (disturbance across screen randomly every n minutes)
- Usering to create custom playlists in spotify (https://www.youtube.com/watch?v=7J_qcttfnJA&t=163s) based on what they listened to in the session. Save favorite songs

## Technologies Needed:

- YouTube API
- React w/ Hooks (leaning to Next, but still open)
- Vue? (https://github.com/svkalvakolanu/vue-youtube-iframe-api/blob/master/README.md)
- No Backend until Gold is reached. Django/PostgresQL for Backend.

## Time Frames

| Component                                        | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------ | :------------: | :-----------: | :---------: |
| Planning components, wireframes, Research        |     3 hrs      |     3 hrs     |    3 hrs    |
| Create and link all components                   |     8 hrs      |     8 hrs     |    8 hrs    |
| Render all components with dummy data            |     4 hrs      |     4 hrs     |    4 hrs    |
| Connect to YouTube API                           |     3 hrs      |     5 hrs     |    5 hrs    |
| Build Search Functionality (genre & nationality) |     4 hrs      |     4 hrs     |    4 hrs    |
| Build map to search nationality                  |     5 hrs      |     0 hrs     |    0 hrs    |
| Style Spotify cards for genre                    |     4 hrs      |     1 hrs     |    1 hrs    |
| CSS Styling (responsive)/ Next.js                |     10 hrs     |    12 hrs     |   12 hrs    |
| "Hover" functionality imposed on videos          |     3 hrs      |    10 hrs     |   10 hrs    |
| Build external links for sharing                 |     4 hrs      |     2 hrs     |    2 hrs    |
| SILVER: Build music visualizer                   |     10 hrs     |     5 hrs     |    5 hrs    |
| GOLD: Build the Backend in Django to save clips  |     4 hrs      |     0 hrs     |    0 hrs    |
| GOLD: Add the random CRTV effect over videos     |     4 hrs      |     0 hrs     |    0 hrs    |
| GOLD: Allow users to add songs to Spotify lists  |     4 hrs      |     0 hrs     |    0 hrs    |
| Write tests for front end components             |     5 hrs      |     1 hrs     |    1 hrs    |
| Deployment (frontend)                            |     1 hrs      |     1 hrs     |    1 hrs    |
| Update README.md                                 |     1 hrs      |     1 hrs     |    1 hrs    |
| Total                                            |     77hrs      |    57 hrs     |   57 hrs    |
