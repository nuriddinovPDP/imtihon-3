import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoLocation, IoLogIn } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function SinglePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("./restaurant.json").then((res) => setData(res.data[id]));
  }, []);
  console.log(data);
  return (
    <div>
      <div className="w-[1280px] mx-auto px-1">
        <div>
          <div>
            <Link to={"/"}> Go back </Link>
          </div>
          <img
            src={data?.imageCarousel.images[0].url}
            alt=""
            className="w-[992px] h-[415px]"
          />
          <div>
            <div>
              <h2>Vilagio Restaurant & Bar</h2>
            </div>
            <div className="flex gap-4">
              <div className=" ">
                <span className="flex">
                  <IoLocation className="text-yellow-500" />{" "}
                  {data?.restaurant.address.line1}
                </span>
                <span className="flex items-center">
                  {data?.restaurant.address.line1} |{" "}
                  <FaLocationArrow className="text-yellow-500" /> Get Direction
                </span>
                <span className="flex">
                  <BiSolidFoodMenu /> Show Menu
                </span>
              </div>
              <div className="flex gap-4">
                <GiHamburgerMenu />
                <p className="w-[500px]">{data?.restaurant.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
