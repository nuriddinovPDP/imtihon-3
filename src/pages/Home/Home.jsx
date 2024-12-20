import { useEffect, useState } from "react";
import Item from "../../components/Item/Item";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("./restaurant.json").then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <div>
      <div className="w-[1280px] mx-auto px-1">
        <div className="">
          <div>
            <h2>Our Resturants</h2>
          </div>
          <ul className="flex w-[1000px] flex-wrap gap-5 ml-24">
            {data?.map((data) => (
              <Item data={data} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
