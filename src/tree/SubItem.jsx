import { useState } from "react";

const SubItem = () => {
  const [subItem, setSubItem] = useState("");
  const [subList, setSubList] = useState([]);

  const handleAddItem = () => {
    const subData = {
      id: Math.random(),
      myItem: subItem,
    };
    setSubList([...subList, subData]);
    setSubItem("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleDelete = (id) => {
    const newList = subList.filter((item) => item.id !== id);
    setSubList(newList);
  };

  return (
    <>
      <input
        style={{ height: "20px", marginLeft: "10px" }}
        width={10}
        type="text"
        placeholder="Add animal..."
        value={subItem}
        onChange={(e) => setSubItem(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div>
        {subList &&
          subList?.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: "lightgray", width: "11rem" }}
            >
              <p style={{ marginLeft: "3rem" }}>
                👉 {item.myItem}{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(item.id)}
                >
                  ❌
                </span>
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default SubItem;
