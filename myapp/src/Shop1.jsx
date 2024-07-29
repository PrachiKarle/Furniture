import React from "react";

const Shop1 = () => {
  const arr = [
    {
      img: "images/product-1.png",
      name: "Nordic Chair",
      price: "$50.00",
    },
    {
      img: "images/product-2.png",
      name: "Kruzo Aero Chair",
      price: "$78.00",
    },
    {
      img: "images/product-3.png",
      name: "Ergonomic Chair",
      price: "$43.00",
    },
    {
      img: "images/product-4.png",
      name: "Chair",
      price: "$50.00",
    },
    {
      img: "images/shop1.jpg",
      name: "Nordic Chair",
      price: "$50.00",
    },
    {
      img: "images/shop2.jpg",
      name: "Kruzo Aero Chair",
      price: "$78.00",
    },
    {
      img: "images/shop3.webp",
      name: "Ergonomic Chair",
      price: "$73.00",
    },
    {
      img: "images/shop4.jpg",
      name: "Chair",
      price: "$60.00",
    },
    {
      img: "images/shop5.jpg",
      name: "Nordic Chair",
      price: "$50.00",
    },
    {
      img: "images/shop6.jpg",
      name: "Kruzo Aero Chair",
      price: "$78.00",
    },
    {
      img: "images/shop7.jpeg",
      name: "Ergonomic Chair",
      price: "$53.00",
    },
    {
      img: "images/shop8.jpeg",
      name: "Chair",
      price: "$50.00",
    },
  ];
  return (
    <>
      <div className="row m-0 p-5 cls" id="id1">
        {arr.map((val) => {
          return (
            <>
              {/* image 1 */}
              <div className="col-lg-3 col-md-6 col-10 p-3 pb-5 m-lg-0 m-auto text-center">
                <img src={val.img} height="90%" width="100%" alt="" />
                <h6 className="mt-2">{val.name}</h6>
                <h6 className="fw-bold">{val.price}</h6>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Shop1;
