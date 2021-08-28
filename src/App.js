import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const foods = {
    "South Indian": [
      {
        name: "Dosa",
        rating: "5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/Masala-Dosa.jpg"
      },
      {
        name: "Idli",
        rating: "4/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/Soft-Spongy-Idli-Recipe.jpg"
      },
      {
        name: "Uttapam",
        rating: "3/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/uttapam.jpg"
      }
    ],
    "North Indian": [
      {
        name: "Aloo Paratha",
        rating: "5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/aloo-paratha-recipe-2.jpg"
      },
      {
        name: "Kulcha",
        rating: "3.5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/kulcha-recipe-1-500x500.jpg"
      },
      {
        name: "Paneer Toofani",
        rating: "4.5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/paneer.jpg"
      }
    ],
    Chinese: [
      {
        name: "Noodles",
        rating: "3/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/hakka-noodles-recipe.jpg"
      },
      {
        name: "Manchurian",
        rating: "4.5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/veg-manchurian-7.jpg"
      },
      {
        name: "Triple Rice",
        rating: "3.5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/big_triple_schezuan_rice.jpg"
      }
    ],
    Indian: [
      {
        name: "Pani-puri",
        rating: "5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/pani-puri.jpg"
      },
      {
        name: "Sev-puri",
        rating: "5/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/sev-puri-2.jpg"
      },
      {
        name: "Dahi-puri",
        rating: "4/5",
        image:
          "https://raw.githubusercontent.com/malaykhakhar/Screenshot-for-neog/main/images/dahi-puri.jpg"
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
      <h1> 🌮 goodfood</h1>
      <small>Check out my favourite food. Pick a category to get started</small>
      <div>
        {foodsinDB.map((category) => {
          return (
            <button
              key={category}
              style={{
                background: "#9CA3AF",
                border: "1px solid black",
                borderRadius: "1rem",
                padding: "0.5rem",
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

      <hr />

      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {foods[category].map((item) => {
            return (
              <li
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #6B7280",
                  margin: "1rem 0rem",
                  width: "40%",
                  borderRadius: "0.5rem"
                }}
              >
                <span>
                  <img
                    src={item.image}
                    style={{
                      width: "5rem",
                      height: "5rem",
                      display: "inline-block"
                    }}
                  />
                </span>
                <div
                  style={{
                    display: "inline-block",
                    margin: " 0rem 1rem",
                    padding: "0"
                  }}
                >
                  <div style={{ fontSize: "larger" }}>{item.name}</div>
                  <div style={{ fontSize: "smaller" }}>{item.rating}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
