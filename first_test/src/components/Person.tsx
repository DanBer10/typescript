import React from "react";

interface PersonInterface {
  name: string;
  email: string;
  age: number;
  friends: string[];
  country: Country;
}

export enum Country {
  Sweden = "Sweden",
  Canada = "Canada",
  France = "France",
}

export const Person = (props: PersonInterface) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h2>Friends:</h2>
      {props.friends.map((friend: string) => (
        <p>{friend}</p>
      ))}
      <h1>Country: {props.country}</h1>
    </>
  );
};
