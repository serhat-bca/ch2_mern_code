import React from "react";

const App = () => {
  const seinfeldShow = {
    id: 1,
    title: "Seinfeld Season One",
    episodes: [
      {
        title: "The Seinfeld Chronicles",
        views: 23452345,
        id: 1,
      },
      {
        title: "The Stake Out",
        views: 73456329,
        id: 2,
      },
      {
        title: "The Robbery",
        views: 23452345,
        id: 3,
      },
      {
        title: "Male Unbonding",
        views: 34563453,
        id: 4,
      },
      {
        title: "The Stock Tip",
        views: 56754567,
        id: 5,
      },
    ],
  };

  return (
    <div>
      <h1>{seinfeldShow.title}</h1>
      {seinfeldShow.episodes.map((episode) => (
        <p key={episode.id}>
          {episode.title} - Views: {episode.views}
        </p>
      ))}
      Total Views:{" "}
      {seinfeldShow.episodes.reduce(
        (prevVal, episode) => prevVal + episode.views,
        0
      )}
    </div>
  );
};

export default App;
