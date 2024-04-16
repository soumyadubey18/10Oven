import React from "react";
import ProductCard from "./ProductCard";
function Products({ category = "Snack", productsList }) {
  const products = [
    {
      title: "Classic Zinger Burger",
      description:
        "Healthy Fresh Bun, Creamy Mayo, Flavored Sauce, Juicy Tomato, Fresh Onion, Lettuce, Extra Crispy Fried Chicken",
      type: "non-veg",
    },

    {
      title: "Loaded Zinger Burger",
      description:
        "Healthy Fresh Bun, Creamy Mayo, Flavored Sauce, Juicy Tomato, Fresh Onion, Tangy Jalapeno, Lettuce, Double Extra Crispy Fried Chicken",
      type: "non-veg",
    },
    {
      title: "Maharaja Paradise Paneer Burger",
      description:
        "Healthy Fresh Bun, Creamy Mayo, Flavored Sauce, Juicy Tomato,Fresh Onion, Tangy Jalapeno, Lettuce, Cheese Slice, Extra Crispy Paneer Patties",
      type: "veg",
    },
    {
      title: "Veg Over Loaded Burger",
      description:
        "Healthy Fresh Bun, Creamy Mayo, Flavored Sauce, Juicy Tomato, Fresh Onion, Tangy Jalapeno, Lettuce, Extra Crispy Veg Patties",
      type: "veg",
    },
    {
      title: "Veg Crazy Burger",
      description:
        "Healthy Fresh Bun, Creamy Mayo, Juicy Tomato, Lettuce, Crispy Veg Patties",
      type: "veg",
    },

    // Add more product objects here if needed
  ];
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center ">
      <h2 className="text-5xl  font-semibold text-center pb-10">{category}</h2>
      <div className="flex-row flex justify-center items-center flex-wrap gap-x-5">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            type={product.type}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
