import React, { useRef, useState } from "react";
import "./Frame.css";
import Card from "../Card";

type CardValueInt = {
  title: string;
  priority: string;
  status: string;
  user: string;
  date: {
    start: string;
    end: string;
  };
}[];

const defaultCard = {
  title: "Learn Node",
  priority: "low",
  status: "At risk",
  user: "AA",
  date: {
    start: "27 Feb",
    end: "1 Mar",
  },
};
const CardValue: CardValueInt = [
  {
    title: "What i want to learn",
    priority: "low",
    status: "At risk",
    user: "AA",
    date: {
      start: "27 Feb",
      end: "1 Mar",
    },
  },
  {
    title: "What i want to learn",
    priority: "low",
    status: "At risk",
    user: "AA",
    date: {
      start: "27 Feb",
      end: "1 Mar",
    },
  },
];

const Frame = () => {
  // set state to update cards

  const [card, setCard] = useState(CardValue);
  const updateCards1 = [defaultCard, ...card];
  const updateCards2 = [...card, defaultCard];
  const createNewCard = () => {
    console.log("hello i clicked");
    setCard(updateCards1);
  };
  const createNewCard1 = () => {
    console.log("hello i clicked");
    setCard(updateCards2);
  };

  // creating onclick and onfocus
const onFocusClick = (aref: any) => {
  aref.current.focus() && aref.current
}
// on submit
const onSubmitFunc = (e: any) => {
  e.preventDefault();
  defaultCard.title = htmlref?.current?.value || "";
  createNewCard();
  onClear();
}

const onClear = () => {
  if(htmlref.current != null && htmlref.current){
    htmlref.current.value = "";
  }
}
  const htmlref = useRef<HTMLInputElement | null>(null);

  console.log(CardValue);
  return (
    <>
      <section className="frame">
        <header className="frame_header">
          <h1>To Do</h1>
          <p>
            <span onClick={ () => onFocusClick( htmlref)} className="pointer">
              +
            </span>
            <span className="pointer">...</span>
          </p>
        </header>
        {/* form card */}
        <form action="" onSubmit={onSubmitFunc}>
          <input name="name" type="text" placeholder="Write a task name" ref={htmlref} />
        </form>
        <div className="cards">
          {/* create card */}
          {card.map((cardI, index) => (
            <div key={index}>
              <Card cardItems={cardI} />
            </div>
          ))}
          <p onClick={createNewCard1} className="pointer">
            Add task
          </p>
        </div>
      </section>
    </>
  );
};

export default Frame;
