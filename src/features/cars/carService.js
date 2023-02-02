import axios from "../../axios";

const getCars = async () => {
  const response = await axios.get("/car/fetch");
  if (response) {
    return response.data;
  }
};

const carSevice = { getCars };

export default carSevice;
