import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];




function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {}
  
  return(
  <div className="header">
 <h1 style={style}>Fast React Pizza Co.</h1>;
  </div>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = []
  const numPizza = pizzas.length;


  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizza > 0 ? (
        <React.Fragment>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident non minima amet, tempora laboriosam sed!
        </p>
        <ul className="pizzas">
          {pizzas.map((pizza) =>(
            < Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
        </ul>
        </React.Fragment>
      ) : (
        <p>Biz menyumiz ustida hali ham ishlayapmiz birozdan so'ng urinib ko'ring</p>
      ) }
    </main>
  );
}

function Pizza({pizzaObj}) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.price + 3}</span>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 17;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>Biz faqat {openHour}:00 dan {closeHour}:00 gacha xizmat ko'rsatamiz</p>
      )}

    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
          <p>Biz {openHour} ochiqmiz {closeHour}:00 gacha. Tashrif buyiring yoki onlayn xarid qiling.</p>
          <button className="btn">ORDER</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
