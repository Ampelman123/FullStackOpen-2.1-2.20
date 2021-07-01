import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}
const Parts = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}
const Total = ({ parts }) => {
  const sum = parts.map(part => part.exercises) 
  return (
    <strong>Number of exercises {sum.reduce((a,b)=>a+b,0)}</strong>
  )
}
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Parts parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id:4
      }
    ]
  }

  return <Course course={course} />
}

export default App;
