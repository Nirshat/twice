import AlbumsList from "./components/Albums";
import ListGroup from "./components/ListGroup";
import SongList from "./components/Songs";
const App = () => {
  const infos = [
    {
      id: 1,
      name: "Im Nayeon",
      age: "28",
      gender: "Female",
    },
    {
      id: 2,
      name: "Yoo Jeongyeon My Honey Boo",
      age: "27",
      gender: "Female",
    },
    {
      id: 3,
      name: "Hirai Momo",
      age: "27",
      gender: "Female",
    },
    {
      id: 4,
      name: "Minatozaki Sana",
      age: "27",
      gender: "Female",
    },
    {
      id: 5,
      name: "Park Jihyo",
      age: "26",
      gender: "Female",
    },
    {
      id: 6,
      name: "Myoui Mina",
      age: "26",
      gender: "Female",
    },
    {
      id: 7,
      name: "Kim Dahyun",
      age: "26",
      gender: "Female",
    },
    {
      id: 8,
      name: "Son Chaeyoung",
      age: "25",
      gender: "Female",
    },
    {
      id: 9,
      name: "Chou Tzuyu",
      age: "24",
      gender: "Female",
    },
  ];

  const [ny, jy, mm, sn, jh, mn, dh, ch, ty] = infos; // Destructuring variables

  const twice = [
    ny.name,
    jy.name,
    mm.name,
    sn.name,
    jh.name,
    mn.name,
    dh.name,
    ch.name,
    ty.name,
  ];

  const albums = [
    "The Story Begins",
    "Between 1&2",
    "Taste of Love",
    "Summer Nights",
    "Celebrate",
    "Twicetagram",
    "Ready to Be",
    "Eyes Wide Open",
    "Formula of Love",
    "BDZ",
    "Twicecoaster Lane 1",
    "Twiccoaster Lane 2",
    "Merry & Happy",
    "Perfect World",
    "What is Love",
    "Feel Special",
    "Yes or Yes",
    "Signal",
    "Fancy You",
  ];

  const songs = [
    "Stay By My Side",
    "Basics",
    "Stuck",
    "Dance The Night Away",
    "Knock Knock",
    "What is Love",
    "Hare Hare",
    "Crazy Stupid Love",
    "Talk that Talk",
    "Candy Pop",
    "Fancy",
    "Yes or Yes",
    "Feel Special",
    "BDZ",
    "More and More",
    "Likey",
    "Alcohol Free",
    "Moonlight Sunries",
    "Set me Free",
  ];

  const handleSelectedItem = (member:string) => {
    console.log(member);
  }

  return (
    <div className="main-container">
      <ListGroup items={twice} title="Twice Members" onSelectItem={handleSelectedItem} />
      <br />
      <hr />
      <br />
      <AlbumsList name={albums} />
      <br />
      <hr />
      <br />
      <SongList songtitle={songs} />
    </div>
  );
};

export default App;
