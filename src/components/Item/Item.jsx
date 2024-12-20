import { Link } from "react-router-dom";

export default function Item({ data }) {
  return (
    <li className="flex flex-col w-[320px] shadow-2xl rounded-xl pt-4 pl-4 pr-4 pb-4">
      <img
        src={data.imageCarousel.images[0].url}
        alt="food photo"
        className="w-[300px] rounded-xl"
      />
      <p className="text-lg mt-2 text-gray-700 font-semibold">
        {data.restaurant.name}
      </p>
      <span className="text-gray-700 mb-2 mt-2">
        {data.restaurant.address.line1}
      </span>
      <span className="text-gray-700 mb-2">
        {data.restaurant.address.line2}
      </span>
      <span className="text-gray-700 mb-2">{data.restaurant.hours}</span>
      <div className="flex gap-4">
        <button className="pt-2 pb-2 pl-3 pr-3 bg-yellow-500 text-white rounded">
          {data.timeSlots[0].time}
        </button>
        <button className="pt-2 pb-2 pl-3 pr-3 bg-yellow-500 text-white rounded">
          {data.timeSlots[3].time}
        </button>
        <Link
          to={`/${data.id}`}
          className="pt-2 pb-2 pl-3 pr-3 bg-gray-500 text-white rounded"
        >
          MORE
        </Link>
      </div>
    </li>
  );
}
