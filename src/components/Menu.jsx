import React from "react";

const menuItems = [
  {
    name: "Spaghetti Bolognese",
    price: "$12.99",
    description: "Classic Italian pasta with rich meat sauce",
    image: "https://img.freepik.com/free-photo/view-delicious-food-from-around-world_23-2151596617.jpg"
  },
  {
    name: "Grilled Chicken Salad",
    price: "$10.99",
    description: "Fresh greens with grilled chicken breast",
    image: "https://img.freepik.com/free-photo/pancakes-tarts-with-salmon_2829-14181.jpg"
  },
  {
    name: "Margherita Pizza",
    price: "$8.99",
    description: "Traditional Italian pizza with fresh basil",
    image: "https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868906.jpg"
  },
];

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <h2>Our Specialties</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <div className="image-container">
              <img 
                src={item.image} 
                alt={item.name}
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="menu-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;