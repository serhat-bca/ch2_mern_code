import Season from "./components/Season";

const App = () => {
  const seasons = [
    {
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
    },
    {
      id: 2,
      title: "Seinfeld Season Two",
      episodes: [
        {
          title: "The Ex-Girlfriend",
          views: 32354903,
          id: 1,
        },
        {
          title: "The Pony Remark",
          views: 39586729,
          id: 2,
        },
        {
          title: "The Jacket",
          views: 97327452,
          id: 3,
        },
        {
          title: "The Phone Message",
          views: 85633221,
          id: 4,
        },
        {
          title: "The Apartment",
          views: 77663281,
          id: 5,
        },
        {
          title: "The Statue",
          views: 73498231,
          id: 6,
        },
        {
          title: "The Revenge",
          views: 99231893,
          id: 7,
        },
        {
          title: "The Heart Attack",
          views: 76443891,
          id: 8,
        },
        {
          title: "The Deal",
          views: 98394211,
          id: 9,
        },
        {
          title: "The Baby Shower",
          views: 56433211,
          id: 10,
        },
        {
          title: "The Chinese Restaurant",
          views: 99453218,
          id: 11,
        },
        {
          title: "The Busboy",
          views: 198764387,
          id: 12,
        },
      ],
    },
  ];

  return (
    <div>
      {seasons.map((season) => (
        <Season season={season} key={season.id} />
      ))}
      {/* <Season season={seinfeldShow} /> */}
    </div>
  );
};

export default App;
