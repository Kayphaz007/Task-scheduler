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

  // set state for form visibility
  const [formVisibility, setFormVisibility] = useState("hidden");
  const [formVisibility2, setFormVisibility2] = useState("hidden");
  // set state to update cards

  const [name, setName] = useState('');
  const [card, setCard] = useState(CardValue);

  // creating onclick and onfocus
  const onFocusClick = (aref: any) => {
    aref.current?.focus();
  };
  // on submit for top form
  const onSubmitFunc1 = (e: any) => {
    e.preventDefault();
    if (!name) return;
    const defaultCard = {...CardValue[0], title: name}
    CardValue.unshift(defaultCard)
    console.log(defaultCard);
    // createNewCard();
    setName('')
    setFormVisibility("hidden");
  };
  // on submit for bottom form
  const onSubmitFunc2 = (e: any) => {
    e.preventDefault();
    if (!name) return;
    const defaultCard = {...CardValue[0], title: name}
    CardValue.push(defaultCard)
    console.log(defaultCard);

    // createNewCard();
    setName('');
    setFormVisibility2("hidden");

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
            onSubmit={onSubmitFunc1}
            ref={formRef}
          >
            <input
              // name="name"
              type="text"
              placeholder="Write a task name"
              ref={htmlref}
              autoFocus
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </form>
          {/* create card */}
          {CardValue.map((cardI, index) => (
            <div key={index}>
              <Card cardItems={cardI} />
            </div>
          ))}
          <form
            className={` ${formVisibility2} frame_form`}
            action=""
            onSubmit={onSubmitFunc2}
            ref={formRef2}
          >
            <input
              // name="name"
              type="text"
              placeholder="Write a task name"
              ref={htmlref2}
              value={name}
              onChange={(e)=>setName(e.target.value)}

            />
            <p>hello</p>
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
