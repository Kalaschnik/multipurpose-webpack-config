import "./style.scss";
import "./foo.css";

import getClasses from "./getClasses";

console.log("ran from index.js");

const obj = { a: "alpha", b: "bravo" };

const newObj = { ...obj, c: "charlie" };
console.log(newObj);

getClasses();
