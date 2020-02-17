# Welcome to ModernJukebox:

ModernJukebox is a curated music discovery engine inspired by the days of MTV Music Videos. Open ModernJukebox to have a selection of music play accompanied by the full screen music video.

## Links:

- Repo: https://github.com/lilspikey333/modern_jokebox_front.git
- Deployed Site: TBD

## Medal Distinctions:

### MVP Features:

- Plays Music Videos (from YouTube) in a random order and loops it. -- Videos don't repeat until all are played.
- Songs can be filtered by Nationality of Artist, and Genre (idea for UI of Visual: World Map with selected regions highlighted Spotify like tiles for Genres)
- Links to Spotify, Apple Music, Tidal using URI links.
- Share Website (link)
- Play, Pause Skip features (overlay that controls YouTube Video) also have some hotkeys
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

| Component                                        | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Planning components, wireframes, Research        |    H     |     3 hrs      |      hrs      |     hrs     |
| Create and link all components                   |    H     |     8 hrs      |      hrs      |     hrs     |
| Render all components with dummy data            |    H     |     4 hrs      |      hrs      |     hrs     |
| Connect to YouTube API                           |    H     |     3 hrs      |      hrs      |     hrs     |
| Build Search Functionality (genre & nationality) |    H     |     4 hrs      |      hrs      |     hrs     |
| Build map to search nationality                  |    H     |     5 hrs      |      hrs      |     hrs     |
| Style Spotify cards for genre                    |    H     |     4 hrs      |      hrs      |     hrs     |
| CSS Styling (responsive)/ Next.js                |    H     |     10 hrs     |      hrs      |     hrs     |
| "Hover" functionality imposed on videos          |    H     |     3 hrs      |      hrs      |     hrs     |
| Build external links for sharing                 |    H     |     4 hrs      |      hrs      |     hrs     |
| SILVER: Build music visualizer                   |    M     |     10 hrs     |      hrs      |     hrs     |
| GOLD: Build the Backend in Django to save clips  |    L     |     4 hrs      |      hrs      |     hrs     |
| GOLD: Add the random CRTV effect over videos     |    L     |     4 hrs      |      hrs      |     hrs     |
| GOLD: Allow users to add songs to Spotify lists  |    H     |     4 hrs      |      hrs      |     hrs     |
| Write tests for front end components             |    H     |     5 hrs      |      hrs      |     hrs     |
| Deployment (frontend)                            |    H     |     1 hrs      |      hrs      |     hrs     |
| Update README.md                                 |    H     |     1 hrs      |      hrs      |     hrs     |
| Total                                            |    H     |     77hrs      |      hrs      |     hrs     |
