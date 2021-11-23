import "./App.css";
import Room from "./components/Room";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [data, setData] = useState([
    { adults: "1", children: "0" },
    { adults: "1", children: "0" },
    { adults: "1", children: "0" },
    { adults: "1", children: "0" },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index, isChecked) => {
    if (isChecked) setSelectedIndex(index);
    else {
      setSelectedIndex(index - 1);
      for (let i = index; i <= data.length - 1; i++) {
        let newData = [...data];
        newData[i].adults = "1";
        newData[i].children = "0";
        setData(newData);
      }
    }
  };

  const handleChange = (index, key, value) => {
    let newData = [...data];
    newData[index][key] = value;
    setData(newData);
  };

  const handleSubmit = () => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("rooms", selectedIndex);
    window.alert("data has been save!");
  };

  useEffect(() => {
    const result = localStorage.getItem("data");
    const rooms = localStorage.getItem("rooms");
    if (result) {
      const saveData = JSON.parse(result);
      setData(saveData);
    }
    setSelectedIndex(rooms || 0);
  }, []);

  return (
    <div className="App p-8">
      <main className="flex flex-wrap gap-3">
        {data.map((room, index) => (
          <Room
            key={index}
            index={index}
            data={room}
            selectedIndex={selectedIndex}
            handleSelect={handleSelect}
            handleChange={handleChange}
          />
        ))}
      </main>
      <button
        className="mt-4 bg-gray-200 px-4 py-1 border border-gray-400 rounded-sm"
        aria-label="submit"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
