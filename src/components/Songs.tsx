import { useState } from "react";

interface TwiceSongs {
  songtitle: string[];
}

const SongList = (props: TwiceSongs) => {

  const [clickedSong, setClickedSong] = useState(-1);
  // need na laging nasa loob ng function ang hooks


  return (
    <>
      <h1> Twice Songs </h1>
      <ul className="list-group">
        {props.songtitle.map((song, index) => (
          <li
            role="button"
            key={index}
            onClick={() => {setClickedSong(index); }}
            className={
              clickedSong === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {song}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SongList;


// UseState Guide:

// ang current value or initial value ng clickedItem is -1 as a default which means na hanggat wala pa akong na-c-click ay wala muna ma-s-select.

// Pag nag click na ako ng item...kukunin ni setClickedSong function yung index ng na-click kong item at ipapalit nya ito sa initial or current value clickedItem.