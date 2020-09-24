import { useState } from "react";
const List = () => {
  const wafclasses = [55, 60, 65, 70, 75, 80, 85, 90, 100, 110, 2000];
  const ifaclasses = [57, 63, 70, 78, 86, 95, 105, 2000];
  const walclasses = [75, 91, 2000];
  const [filter, setFilter] = useState("all");
  const [unit, setUnit] = useState("lb");
  const [fed, setFed] = useState(walclasses);
  const dummy = [{ name: "john", weight: 77 }];
  const toPounds = (arr) => {
    let newArr = arr;
  };
  return (
    <div>
      <div>
        <ul>{}</ul>
      </div>
    </div>
  );
};
