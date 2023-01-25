import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import "./cart.css";

const Cart = () => {
  const [success, setSuccess] = useState(false);
  const items = [
    {
      id: 1,
      title: "McLaren Avendatta",
      price: 50,
      description: "saskskskkskkskskskslslslllsllslsllllslalslasla",
      image:
        "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      title: "Lamborghini Gullard",
      price: 80,
      description: "saskskskkskkskskskslslslllsllslsllllslalslasla",
      image:
        "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      title: "Buggati Illoris",
      price: 90,
      description: "saskskskkskkskskskslslslllsllslsllllslalslasla",
      image:
        "https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const handleCreateOrder = () => {
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="bg-blue-700  mt-[10em] p-[4em] rounded-md">
        <h1 className="text-gray-300 mb-[1em]">
          Hello John Nderitu. Your order has been Sent Succesfully. You are
          required to pay on delivery.
        </h1>
        <Link to="/" className="text-gray-100 cursor-pointer underline">
          <span>Back to Garage ?</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-[2em]">
      {items ? (
        <div>
          <div className="bg-slate-800 p-[15px] rounded-md mb-5">
            <h1 className=" text-gray-50 text-3xl mb-[20px]">
              Here are all the cars you have set up for parking
            </h1>
          </div>
          {items.map((car) => (
            <div key={car.id}>
              <div className="flex flex-wrap mb-[30px] justify-between items-center cartItem">
                <div className="">
                  <img
                    className=" w-[100%] sm:w-[200px] object-cover rounded-sm"
                    src={car.image}
                    alt=""
                  />
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>{car.title}</p>
                  <p style={{ color: "gray" }}>{car.description}</p>
                </div>
                <div>
                  <p>
                    Price per hour in Ksh.{" "}
                    <span className="font-bold">{car.price}</span>{" "}
                  </p>
                  <p style={{ color: "gray" }}>
                    Due to the range of our vehicles, you can only rent one of
                    each type of car.
                  </p>
                </div>
                <div className="sm:mt-[20px]">
                  <MdOutlineDelete className="  text-2xl text-red-600 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}

          <div>
            <h1 className="mb-[20px] bg-slate-700 p-[15px] text-white">
              Kindly Enter Shipping Details
            </h1>
            <form className="flex flex-col gap-[10px]">
              <input
                className="p-[10px] rounded-md outline-none"
                style={{ border: "1px solid gray" }}
                type="text"
                placeholder="County name"
              />
              <input
                className="p-[10px] rounded-md outline-none"
                style={{ border: "1px solid gray" }}
                type="text"
                placeholder="City name"
              />
              <input
                className="p-[10px] rounded-md outline-none"
                style={{ border: "1px solid gray" }}
                type="text"
                placeholder="Address details"
              />
              <input
                className="p-[10px] rounded-md outline-none"
                style={{ border: "1px solid gray" }}
                type="text"
                placeholder="Your Digital Signature"
              />
            </form>

            <div className="mt-[2em] mb-[2em] flex flex-wrap justify-between">
              <button
                className="cartBtn bg-blue-600"
                onClick={handleCreateOrder}
              >
                Create Order
              </button>
              <button className="cartBtn bg-red-600 ">Terminate Order</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-600 text-gray-300 p-[29px] mt-[20%]">
          <h1 className="text-xl text-center">
            You don't have any car in the parking.{" "}
            <Link to="/" className="cursor-pointer text-gray-100">
              <span>Rent One ?</span>
            </Link>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
