import React from "react";

const Category = [
  {
    type: "Luxe",
  },
  {
    type: "Countryside",
  },
  {
    type: "Islands",
  },
  {
    type: "Private Rooms",
  },
  {
    type: "Condo",
  },
  {
    type: "cabin",
  },
  {
    type: "Lake house",
  },
  {
    type: "beach house",
  },
];

const Categories = () => {
  return (
    <div className="flex justify-between w-[700px] mt-4">
      {Category.map((cat) => (
        <ul className="">
          <li className="font-extralight text-gray-400">{cat.type}</li>
        </ul>
      ))}
    </div>
  );
};

export default Categories;
