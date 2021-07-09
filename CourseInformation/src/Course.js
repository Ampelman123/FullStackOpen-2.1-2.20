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

  export default Course