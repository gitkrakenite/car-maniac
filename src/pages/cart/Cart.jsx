import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import "./cart.css";
import { resetCart, removeFromCart } from "../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

const Cart = () => {
  const [success, setSuccess] = useState(false);

  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [signature, setSignature] = useState("");

  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const toast = useToast();
  const dispatch = useDispatch();

  const handleCreateOrder = () => {
    // check that user exists
    if (!user) {
      toast({
        title: "Must have an account",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    // check that cart exists
    if (!cart) {
      toast({
        title: "Cart is empty",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    // check shipping details exist
    if (!county || !city || !address || !signature) {
      toast({
        title: "Shipping info missing",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    // send information to db
    setSuccess(true);
  };

  // remove from cart
  const handleRemoveCar = (id) => {
    if (!id) {
      toast({
        title: "Id mising",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    } else {
      try {
        dispatch(removeFromCart(id));
        toast({
          title: "removed",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      } catch (error) {
        toast({
          title: "Unsuccesful in removing car",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
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
      {cart ? (
        <div>
          <div className="bg-slate-800 p-[15px] rounded-md mb-5">
            {cart.length !== 0 ? (
              <>
                <h1 className=" text-gray-50 text-3xl mb-[20px]">
                  Here are all the cars you have set up for parking
                </h1>
                {/* {console.log(cart.length)} */}
              </>
            ) : (
              <Link to="/">
                <h1 className=" text-gray-50 text-3xl mb-[20px] underline">
                  No car in the garage. Go shop
                </h1>
              </Link>
            )}
          </div>
          {cart.map((car) => (
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
                  <p style={{ fontWeight: 600 }}>{car.name}</p>
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
                  <MdOutlineDelete
                    className="text-2xl text-red-600 cursor-pointer"
                    onClick={() => handleRemoveCar(car._id)}
                  />
                </div>
              </div>
            </div>
          ))}

          <div>
            <h1 className="mb-[20px] bg-slate-700 p-[15px] text-white">
              Kindly Enter Shipping Details
            </h1>
            <form
              className="flex flex-col gap-[10px]"
              onSubmit={handleCreateOrder}
            >
              <input
                className="p-[10px] rounded-md outline-none"
                style={{ border: "1px solid gray" }}
                type="text"
                placeholder="County name"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
              />
              <input
                className="p-[10px] rounded-md outline-none"
                style={{ border: "1px solid gray" }}
                type="text"
                placeholder="City name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                className="p-[10px] rounded-md outline-none"
                style={{ border: "1px solid gray" }}
                type="text"
                placeholder="Address details"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                className="p-[10px] rounded-md outline-none"
                style={{ border: "1px solid gray" }}
                type="text"
                placeholder="Your Digital Signature"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
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
