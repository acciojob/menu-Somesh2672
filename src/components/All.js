import React, { useState } from "react";
import Items from "./items";

const All = () => {
  const [currentCategory, setCurrentCategory] = useState("All");

  const handleButtonClick = (category) => {
    setCurrentCategory(category);
  };

  const renderDishes = () => {
    const dishList =
      currentCategory === "All"
        ? Items
        : Items.filter((dish) => dish.category === currentCategory);

    return dishList.map((dish) => (
      <div  key={dish.id}>
        <img src={dish.img} alt={dish.title} />
        <h1>{dish.title}</h1>
        <p>${dish.price}</p>
        <p>{dish.desc}</p>
      </div>
    ));
  };

  return (
    <div>
      <div className="Navbar">
        <h1>Our Menu</h1>
        <button id="main" onClick={() => handleButtonClick("All")}>All</button>
        <button id="filter-btn-1" onClick={() => handleButtonClick("breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => handleButtonClick("lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => handleButtonClick("shakes")}>Shakes</button>

      </div>

      <div className="Dishes">{renderDishes()}</div>
    </div>
  );
};

export default All;
