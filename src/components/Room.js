import React, { useEffect, useState } from "react";

function Room({ data, index, selectedIndex, handleSelect, handleChange }) {
  const { adults, children } = data;
  const [selectedAdults, setSelectedAdults] = useState(adults);
  const [selectedChildren, setSelectedChildren] = useState(children);

  const isActive = () => {
    return selectedIndex >= index;
  };

  const handleCheck = (e) => {
    const isChecked = e.target.checked;
    handleSelect(index, isChecked);
  };

  const selectChange = (e) => {
    handleChange(index, e.target.name, e.target.value);
  };

  useEffect(() => {
    setSelectedAdults(adults);
    setSelectedChildren(children);
  }, [adults, children]);

  return (
    <div
      className={`w-48 ${
        isActive() ? "bg-gray-100" : "bg-gray-200"
      }  border-2 border-gray-200 rounded-md overflow-hidden`}
    >
      <header className="py-1 px-2 flex items-center space-x-2">
        {index !== 0 && (
          <input type="checkbox" checked={isActive()} onChange={handleCheck} />
        )}
        <h1>Room {index + 1}</h1>
      </header>
      <div
        className={`${
          isActive() ? "bg-white" : "bg-gray-200"
        } flex items-center justify-evenly py-4`}
      >
        <div>
          <p>
            Adults
            <br />
            (18+)
          </p>
          <select
            className={`${
              !isActive() && "opacity-50"
            } w-10 border border-gray-400 mt-1`}
            name="adults"
            aria-label="adults"
            disabled={selectedIndex < index}
            value={selectedAdults}
            onChange={selectChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div>
          <p>
            Children
            <br />
            (0-17)
          </p>
          <select
            className={`${
              !isActive() && "opacity-50"
            } w-10 border border-gray-400 mt-1`}
            name="children"
            aria-label="children"
            disabled={selectedIndex < index}
            value={selectedChildren}
            onChange={selectChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Room);
