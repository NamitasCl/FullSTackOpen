import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

const Part = (props) => {
  return (
     <div>
      {props.parts.name} {props.parts.exercises}
     </div>
  )
}

const Content = (props) => {
    
  return (
  <div>
  <Part parts = {props.parts[0].parts[0]} />
  <Part parts = {props.parts[0].parts[1]} />
  <Part parts = {props.parts[0].parts[2]} />
  </div>
  )
}

const Header = (props) => {
  return <h1>{props.course[0].name}</h1>
}

const Total = (props) => {
  return (
    <div>
      <p>El total es: {props.total[0].parts[0]['exercises'] + props.total[0].parts[1]['exercises'] + props.total[0].parts[2]['exercises']}</p>
    </div>
  )
}

const App = () => {
  const course = [{
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }]
  
  return (
    <div>
      <Header course={course} />
      <Content parts = {course}/>
      <Total total = {course} />
    </div>
  )
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>)
