import React, { useEffect } from "react";
import "./cars.css";
import Rentals from "../../dummyData";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../features/cars/carSlice";
import { addToCart, resetCart } from "../../features/cart/cartSlice";
import moment from "moment";

const Cars = () => {
  const toast = useToast();
  const dispatch = useDispatch();

  const { cars, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.cars
  );

  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleAddToCart = (cartData) => {
    // console.log(cartData);
    // check if car already exist in cart

    dispatch(addToCart(cartData));
    toast({
      title: "Added to cart",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };
  return (
    <div className="carsWrapper">
      {/* Mostly Rented */}
      <h3
        style={{ marginBottom: "40px", fontSize: "30px", fontWeight: "bold" }}
      >
        Frequently Rented Cars
      </h3>
      <div className="carsMostlyRented">
        <div className="carsMostlyRentedItem">
          <img
            src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <p className="font-bold">Mercedes Benz S300</p>
          <p>At Ksh. 2k Per hour</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            recusandae!
          </p>
          <div className="flex items-center justify-between mt-[10px]">
            <p className="bg-red-700 text-white p-[8px] rounded-md">Depleted</p>
            <img
              className="cursor-pointer"
              src="https://img.icons8.com/windows/512/car-roof-box.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
            />
          </div>
        </div>
        {/*  */}
        <div className="carsMostlyRentedItem">
          <img
            src="https://images.pexels.com/photos/11583778/pexels-photo-11583778.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <p className="font-bold">Range Rover Sport</p>
          <p>At Ksh. 2500 Per hour</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            ipsam.
          </p>
          <div className="flex items-center justify-between mt-[10px]">
            <p className="bg-red-700 text-white p-[8px] rounded-md">Depleted</p>
            <img
              className="cursor-pointer"
              src="https://img.icons8.com/windows/512/car-roof-box.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
            />
          </div>
        </div>
        {/*  */}
        <div className="carsMostlyRentedItem">
          <img
            src="https://images.pexels.com/photos/2662194/pexels-photo-2662194.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <p className="font-bold">Toyota Double Cabin</p>
          <p>At Ksh. 1k Per hour</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            assumenda.
          </p>
          <div className="flex items-center justify-between mt-[10px]">
            <p className="bg-red-700 text-white p-[8px] rounded-md">Depleted</p>
            <img
              className="cursor-pointer"
              src="https://img.icons8.com/windows/512/car-roof-box.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
            />
          </div>
        </div>
        {/*  */}
        <div className="carsMostlyRentedItem">
          <img
            src="https://images.pexels.com/photos/9846097/pexels-photo-9846097.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <p className="font-bold">Subaru Impreza</p>
          <p>At Ksh. 1k Per hour</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            minima.
          </p>
          <div className="flex items-center justify-between mt-[10px]">
            <p className="bg-red-700 text-white p-[8px] rounded-md">Depleted</p>
            <img
              className="cursor-pointer"
              src="https://img.icons8.com/windows/512/car-roof-box.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
            />
          </div>
        </div>
        {/*  */}
      </div>
      {/* filters */}
      <div className="carsFilters">
        <h1>Choose the category you prefer</h1>
        <ul>
          <li>Sports</li>
          <li>Family</li>
          <li>Rough Terrain</li>
          <li>Minivan</li>
          <li>Lorry</li>
          <li>SUV</li>
        </ul>
      </div>

      {/*  car lists*/}
      <div className="carsList">
        {cars?.map((rental) => (
          <div key={rental._id} className="carsMostlyRentedItem">
            <img
              src={rental.image}
              alt=""
              style={{ height: "450px", objectFit: "cover" }}
            />
            <p className="font-bold">{rental.name}</p>
            <p>At Ksh. {rental.price} Per hour</p>
            <p>Category : {rental.category}</p>
            <p>{rental.description}</p>
            <p className="mt-[10px] bg-gray-400 text-white p-[8px] rounded-md">
              Set {moment(rental.createdAt).fromNow()}
            </p>
            <div className="flex items-center justify-between mt-[10px]">
              {rental.quantity > 1 && "Available" ? (
                <p className="bg-green-700 text-white p-[8px] rounded-md">
                  Available
                </p>
              ) : (
                <p className="bg-red-700 text-white p-[8px] rounded-md">
                  Depleted
                </p>
              )}

              {rental.quantity < 1 ? (
                <p>Out of Stock</p>
              ) : (
                <img
                  className="cursor-pointer"
                  src="https://img.icons8.com/windows/512/car-roof-box.png"
                  style={{ width: "40px", height: "40px" }}
                  alt=""
                  onClick={() => handleAddToCart(rental)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
