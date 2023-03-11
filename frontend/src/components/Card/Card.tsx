import React from "react";
import "./Card.css";
type CardValueInt = {
  title: string;
  priority: string;
  status: string;
  user: string;
  date: {
    start: string;
    end: string;
  };
};

interface cardProps {
  cardItems: {
    title: string;
    priority: string;
    status: string;
    user: string;
    date: {
      start: string;
      end: string;
    };
  };
}
const Card = ({
  cardItems: {
    title,
    priority,
    status,
    user,
    date: { start, end },
  },
}: cardProps): JSX.Element => {
  return (
    <section className="card">
      {/* Card Header */}
      <header className="card_header">
        <h1>{title}</h1>
        <p>
          <span>...</span>
        </p>
      </header>
      {/* Card Body */}
      <section>
        {/* first line */}
        <div className="card_status">
          <p>{priority}</p>
          <p>{status}</p>
        </div>
        {/* second line */}
        <div className="card_profile">
          <p className="card_profile_initials">{user}</p>
          <p className="card_profile_date">
            {start} - {end}
          </p>
        </div>
      </section>
    </section>
  );
};

export default Card;
