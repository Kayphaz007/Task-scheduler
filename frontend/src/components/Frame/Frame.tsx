import React, { useEffect, useRef, useState } from "react";
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
  // input ref
  const htmlref = useRef<HTMLInputElement | null>(null);
  const htmlref2 = useRef<HTMLInputElement | null>(null);

  // form ref
  const formRef = useRef<HTMLFormElement | null>(null);
  const formRef2 = useRef<HTMLFormElement | null>(null);
  // close form onclick any where
  const closeForm = (e: any) => {
    if (formVisibility && !formRef.current?.contains(e.target)) {
      setFormVisibility("hidden");
    }
    if (formVisibility2 && !formRef2.current?.contains(e.target)) {
      setFormVisibility2("hidden");
    }
  };
  // const closeForm2 = (e: any) => {
  //   if (formVisibility2 && !formRef2?.current?.contains(e.target)) {
  //     setFormVisibility2("hidden");
  //   }
  // };
  // set state for form visibility
  const [formVisibility, setFormVisibility] = useState("hidden");
  const [formVisibility2, setFormVisibility2] = useState("hidden");
  // set state to update cards

  const [card, setCard] = useState(CardValue);
  const updateCards1 = [defaultCard, ...card];
  const updateCards2 = [...card, defaultCard];
  const createNewCard = () => {
    setCard(updateCards1);
  };
  const createNewCard1 = () => {
    setCard(updateCards2);
  };

  // creating onclick and onfocus
  const onFocusClick = (aref: any) => {
    aref?.current?.focus();
  };
  // on submit
  const onSubmitFunc = (e: any) => {
    e.preventDefault();
    defaultCard.title = htmlref.current?.value || "";
    createNewCard();
    onClear();
  };

  const onClear = () => {
    if (htmlref.current != null && htmlref.current) {
      htmlref.current.value = "";
    }
  };
  useEffect(() => {
    if (htmlref.current || htmlref2.current) {
      htmlref.current?.focus();
      htmlref2.current?.focus();
    }
  }, [formVisibility, formVisibility2]);
  useEffect(() => {
    document.addEventListener("mousedown", closeForm);
  }, []);
  return (
    <>
      <section className="frame">
        <header className="frame_header">
          <h1>To Do</h1>
          <p>
            <span
              onClick={() => {
                setFormVisibility("");

                onFocusClick(htmlref);
                console.log(document.activeElement);
              }}
              className="pointer"
            >
              +
            </span>
            <span className="pointer">...</span>
          </p>
        </header>

        <div className="cards">
          {/* form card */}
          <form
            className={` ${formVisibility} frame_form`}
            action=""
            onSubmit={onSubmitFunc}
            ref={formRef}
          >
            <input
              name="name"
              type="text"
              placeholder="Write a task name"
              ref={htmlref}
              autoFocus
            />
          </form>
          {/* create card */}
          {card.map((cardI, index) => (
            <div key={index}>
              <Card cardItems={cardI} />
            </div>
          ))}
          <form
            className={` ${formVisibility2} frame_form`}
            action=""
            onSubmit={onSubmitFunc}
            ref={formRef2}
          >
            <input
              name="name"
              type="text"
              placeholder="Write a task name"
              ref={htmlref2}
            />
          </form>
          <p
            onClick={() => {
              setFormVisibility2("");
              onFocusClick(htmlref2);
            }}
            className="pointer"
          >
            Add task
          </p>
        </div>
      </section>
    </>
  );
};

export default Frame;
