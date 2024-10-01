const Season = ({ season }) => {
  return (
    <div>
      <h1>{season.title}</h1>
      {season.episodes.map((episode) => (
        <p key={episode.id}>
          {episode.title} - Views: {episode.views}
        </p>
      ))}
      Total Views:{" "}
      {season.episodes.reduce((prevVal, episode) => prevVal + episode.views, 0)}
    </div>
  );
};

export default Season;
