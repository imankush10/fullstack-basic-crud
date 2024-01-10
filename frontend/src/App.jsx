import React, { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import CardEdit from "./components/CardEdit";
import { v4 as uuidv4 } from "uuid";
const BASE_URL = process.env.REACT_APP_BASE_URL
let fetchData;

const App = () => {
  async function adder(name, description, intr1, intr2, intr3, social, socialLink, key=uuidv4()) {
    const data = {
      name,
      description,
      interests: [intr1, intr2, intr3],
      social,
      socialLink,
      key
    };

    const response = await fetch(`${BASE_URL}/addCard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    fetchData();
  }

  async function deleter(key) {
    const [deletedCard] = cards.filter((card) => card.key == key);
    const response = await fetch(`${BASE_URL}/deleteCard`, {
      method:'DELETE',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(deletedCard)
    })
    fetchData();
  }

  function editor(key) {
    let temp = [...cards];
    let cardToEdit = cards.filter((card) => card.key == key);
    temp = cards.filter((card) => card.key != key);
    setCards(temp);
    setEditingCard(cardToEdit[0]);
  }

  useEffect(() => {
    if(cards.length==0) setNeww(false);
    fetchData = async () => {
      const res = await fetch(`${BASE_URL}/cards`);
      const data = await res.json();
      setCards(data);
    };
    fetchData();
  }, []);

  const ref = useRef(null);
  const [neww, setNeww] = useState(true);
  const [cards, setCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);

  return (
    <div ref={ref} className="overflow-hidden h-screen w-screen flex gap-4">
      {cards.map((card) => (
        <Card
          reference={ref}
          name={card.name}
          description={card.description}
          interests={card.interests}
          social={card.social}
          socialLink={card.socialLink}
          keys={card.key}
          deleting={deleter}
          editing={editor}
        ></Card>
      ))}

      {neww ? (
        <CardEdit reference={ref} add={adder} editing={editingCard} />
      ) : null}
      <button
        className=" absolute bottom-0 right-0 text-5xl p-4"
        onClick={() => setNeww(!neww)}
      >
        +
      </button>
    </div>
  );
};

export default App;
