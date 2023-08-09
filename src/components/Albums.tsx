import { useState } from "react";

interface AlbumsProps {
  name: string[];
}

const AlbumsList = (props: AlbumsProps) => {

  const [clickedAlbum, setClickedAlbum] = useState(-1);
  
  return (
    <>
      <h1>Twice Albums</h1>
      <ul className="list-group">
        {props.name.map((album, index) => (
          <li
            key={index}
            onClick={() => {
              setClickedAlbum(index);
            }}
            className={clickedAlbum === index ? 'list-group-item active' : 'list-group-item'}
          >
            {album}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AlbumsList;
