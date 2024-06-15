import React from 'react'
export interface IHelloWorld {
  text: string
}
const Helloworld = ({ text }: IHelloWorld) => {
  return <div className="text">Lol This is working: {text}</div>
}

export  {Helloworld};
