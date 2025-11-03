import "./style.css";

//!task-1

const name: string = "Alice";
const age: number = 30;
const isOnline: boolean = true;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Online: ${isOnline}`);

//!task-2

interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);

//!task-3

const usernames: string[] = ["alice", "bob", "charlie"];

const ratings: number[] = [4.5, 3.8, 5];

interface Products {
  id: number;
  title: string;
}

const products: Products[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);

//!task-4

function printUserInfo(name: string, age: number, email?: string): void {
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
}

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");

//!task-5

type Status = "loading" | "success" | "error";

function logStatus(status: Status) {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("error");

//!task-6

function getFirstElement(arr: any[]) {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([true, false, true])); // true

//!task-7

//!task-7

function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));

// //!task-8

// import axios from "axios";

// async function fetchPosts() {
//   const response = await axios.get(
//     "<https://jsonplaceholder.typicode.com/posts>"
//   );
//   return response.data;
// }

// fetchPosts().then((posts) => {
//   console.log(posts[0].title);
// });
