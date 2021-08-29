import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const foods = {
    "South Indian": [
      {
        name: "Dosa",
        rating: "5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/Masala-Dosa.jpg",
        desc: "A dosa is a thin pancake or crepe, originating from South India."
      },
      {
        name: "Idli",
        rating: "4/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/Soft-Spongy-Idli-Recipe.jpg",
        desc: "Idli is a type of savoury rice cake, originating from the India."
      },
      {
        name: "Uttapam",
        rating: "3/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/uttapam.jpg",
        desc:
          "uttapam is a thick pancake, with toppings cooked right into the batter"
      }
    ],
    "North Indian": [
      {
        name: "Aloo Paratha",
        rating: "5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/aloo-paratha-recipe-2.jpg",
        desc: "aloo paratha literally means potato-stuffed flatbreads."
      },
      {
        name: "Kulcha",
        rating: "3.5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/kulcha-recipe-1-500x500.jpg",
        desc:
          "Kulcha is a type of mildly leavened flatbread that originated in the Indian subcontinent"
      },
      {
        name: "Paneer Toofani",
        rating: "4.5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/paneer.jpg",
        desc:
          "A delicious North Indian curry made with Paneer and tomato based spicy gravy"
      }
    ],
    Chinese: [
      {
        name: "Noodles",
        rating: "3/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/hakka-noodles-recipe.jpg",
        desc:
          "It is a Chinese preparation where boiled noodles are stir fried with sauces and vegetables"
      },
      {
        name: "Manchurian",
        rating: "4.5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/veg-manchurian-7.jpg",
        desc:
          "Veg Manchurian is a tasty Indo Chinese dish of fried veggie balls in a spicy, sweet and tangy sauce"
      },
      {
        name: "Triple Rice",
        rating: "3.5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/big_triple_schezuan_rice.jpg",
        desc:
          "It is a Indo-chinese dish, combination of noodles and rice cooked with vegatables in schezuan sauce"
      }
    ],
    Indian: [
      {
        name: "Pani-puri",
        rating: "5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/pani-puri.jpg",
        desc:
          "Panipuri consists of a round or ball-shaped, hollow puri, filled with a mixture of flavored water"
      },
      {
        name: "Sev-puri",
        rating: "5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/sev-puri-2.jpg",
        desc:
          "Loaded with boiled spiced potatoes, onions, and sweet, tangy chutneys and sev"
      },
      {
        name: "Dahi-puri",
        rating: "4/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/dahi-puri.jpg",
        desc:
          "These puris are stuffed with spicy potato filling and then topped with curd, chutneys"
      }
    ]
  };
  var foodsinDB = Object.keys(foods);

  var [category, setCategory] = useState("South Indian");

  function clickEventHandler(category) {
    setCategory(category);
    console.log(category);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#B91C1C" }}> 🌮 goodfood</h1>
      <small style={{ color: "#B91C1C" }}>
        Check out my favourite food. Pick a category to get started
      </small>
      <div>
        {foodsinDB.map((category) => {
          return (
            <button
              key={category}
              style={{
                color: "#FEF2F2",
                background: "#F87171",
                border: "none",
                borderRadius: "0.5rem",
                padding: "0.7rem",
                margin: "1rem 0.5rem",
                cursor: "pointer"
              }}
              onClick={() => clickEventHandler(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <hr style={{ border: "1px solid #EF4444" }} />

      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {foods[category].map((item) => {
            return (
              <li
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "2px solid #B91C1C",
                  margin: "1rem 0rem",
                  width: "95%",
                  borderRadius: "0.5rem"
                }}
              >
                <div>
                  <div style={{ display: "inline-block" }}>
                    <img
                      src={item.image}
                      style={{
                        width: "5rem",
                        height: "5rem",
                        marginRight: "1rem"
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "0"
                    }}
                  >
                    <div style={{ color: "#B91C1C", fontSize: "larger" }}>
                      Name: {item.name}
                    </div>
                    <div style={{ color: "#7F1D1D", fontSize: "smaller" }}>
                      Rating: {item.rating}
                    </div>
                    <br />
                    <div style={{ color: "#B91C1C", fontSize: "small" }}>
                      Description:
                    </div>
                    <div style={{ color: "#7F1D1D" }}>{item.desc}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
