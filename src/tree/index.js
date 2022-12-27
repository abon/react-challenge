import animalList from "./data.json";
import SubItem from "./SubItem.jsx";

import "./index.css";

export default function Tree() {
  const renderedAnimals = Object.entries(animalList).map(([key, names]) => (
    <div className="tree">
      <div className="mammals">
        {key} <SubItem />
      </div>
      <div className="near" key={names[0].id}>
        {names[0].name}
        <SubItem />
      </div>
      <div className="near" key={names[1].id}>
        {names[1].name}
        <SubItem />
      </div>
      <div className="far" key={names[2].id}>
        {names[2].name} <SubItem />
      </div>
      <div className="far" key={names[3].id}>
        {names[3].name} <SubItem />
      </div>
      <div className="farther" key={names[4].id}>
        {names[4].name} <SubItem />
      </div>
      <div className="near" key={names[5].id}>
        {names[5].name} <SubItem />
      </div>
    </div>
  ));

  return <>{renderedAnimals}</>;
}
