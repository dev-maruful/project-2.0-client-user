"use client";
import { Dropdown } from "keep-react";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { RxDividerVertical } from "react-icons/rx";

const books = [
  { id: 1, name: "To Kill a Mockingbird" },
  { id: 2, name: "Pride and Prejudice" },
  { id: 3, name: "1984" },
  { id: 4, name: "The Great Gatsby" },
  { id: 5, name: "Moby Dick" },
  { id: 6, name: "The Catcher in the Rye" },
  { id: 7, name: "Jane Eyre" },
  { id: 8, name: "The Lord of the Rings" },
  { id: 9, name: "To the Lighthouse" },
  { id: 10, name: "Brave New World" },
];

export const SearchBarComponent = () => {
  const [data, setData] = useState([]);
  const handleOnChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const results = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm)
    );

    console.log(data);

    if (searchTerm === "") {
      setData([]);
    } else {
      setData(results);
    }
  };

  return (
    <div className="flex border border-gray-200 rounded-md">
      <div className="w-1/5">
        <Dropdown
          label="All Categories"
          size="sm"
          type="outline"
          dismissOnClick={true}
        >
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      <div className="relative w-4/5">
        <input
          className="relative w-full px-6 py-2 outline-none"
          placeholder="Search Anything"
          onChange={handleOnChange}
        />
        <RxDividerVertical className="absolute text-3xl text-gray-300 right-8 top-1.5" />
        <HiOutlineSearch className="absolute w-5 h-5 top-2.5 text-[#5D5FEF] right-4" />
        {data.length > 0 && (
          <div className="absolute z-50 w-full px-4 py-2 bg-white shadow-md top-11">
            {data.map((book) => (
              <Dropdown.Item key={book.id}>{book.name}</Dropdown.Item>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
