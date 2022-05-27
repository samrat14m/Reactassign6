import React, { createContext, useState } from "react";

export const store = createContext();

const Detail = (props) => {
  const [students, setStudents] = useState([
    { name: "Saurabh", age: 21, course: "MERN", batch: "October", id: "1" },
    { name: "Rakesh", age: 25, course: "MEAN", batch: "November", id: "2" },
    { name: "Saiket", age: 23, course: "MEaN", batch: "September", id: "3" },
    { name: "Krishna", age: 22, course: "MERN", batch: "September", id: "4" },
  ]);
  return (
    <div>
      <store.Provider value={[students, setStudents]}>
        {props.children}
      </store.Provider>
    </div>
  );
};

export default Detail;
