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
const Courses = ({courses}) =>{
  return (
    <div>
      {courses.map((course)=><Course key={course.id} course={course}/>)}
    </div>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}

export default App;
