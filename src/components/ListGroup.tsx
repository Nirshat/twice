import { useState } from "react";

// interface is a typescript feature
interface ListProps {
  items: string[]; // ang items na ito ay dala-dala na yung bawat members na pinasa through properties dun sa App.tsx
  title: string;
  onSelectItem: (member: string) => void;
}

const ListGroup = (props: ListProps) => {
  const [selectedItem, setSelectedItem] = useState(-1); // initial value muna para mag set ng default

  // const arr = useState(-1);
  // si useState ay isang array
  // si useState ay naglalaman ng dalawang items at ito ay mga functions
  // arr[0] - ang first item ay isang variable para sa initial value at sya ang hahawak ng selected index. arr[0]
  // arr[1] - ang second item naman ay function na para sa updating. arr[0]
  // we set -1 for the initial value para wala munang selected item as a default

  return (
    <>
      <h1> {props.title} </h1>
      {props.items.length === 0 && <p> No Members Found. </p>}
      <ul className="list-group">
        {props.items.map((member, index) => (
          <li
            role="button"
            key={member}
            onClick={() => {
              setSelectedItem(index);
              props.onSelectItem(member);
            }}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {member}
          </li>
        ))}
      </ul>
    </>
  );
};

// map() - is use to get each item in array and convert it into an html element that you want.

export default ListGroup;
