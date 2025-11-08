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

function logStatus(status: Status): void {
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

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3])); // 1
console.log(getFirstElement<string>(["a", "b", "c"])); // "a"
console.log(getFirstElement<boolean>([true, false, true])); // true

//!task-7

//!task-7

function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));

// //!task-8

import axios from "axios";

interface Response {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts() {
  const response = await axios.get<Response>(
    "<https://jsonplaceholder.typicode.com/posts>"
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});

//!

function foo<T>(value: T) {
  console.log(value);
}

foo<number>(5);

foo<string>("heiio");

foo<boolean>(false);

foo([1, 2]);

foo({});

//?

interface List<T> {
  items: T[];
  getItem: (index: number) => T;
}

const numberList: List<number> = {
  items: [1, 2, 3],
  getItem(index) {
    return this.items[index];
  },
};

const stringList: List<string> = {
  items: ["Alice", "Bob"],
  getItem(index) {
    return this.items[index];
  },
};

//?

interface ApiResponse<T> {
  data: T;
  status: number;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: {
    id: 1,
    name: "Alice",
  },
  status: 200,
};

const invoiceResponse: ApiResponse<{ email: string; amount: number }> = {
  data: {
    email: "alice@mail.com",
    amount: 150,
  },
  status: 201,
};
