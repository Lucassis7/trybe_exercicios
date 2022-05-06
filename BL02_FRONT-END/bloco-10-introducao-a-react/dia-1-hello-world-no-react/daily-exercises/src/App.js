import './App.css';

// const Task = ({ value }) => {
//   console.log(value);
//   return (
//     <li>{value}</li>
//   );
// }

// function App() {
  
//   return (
//     <div className="App">
//       <Task value={'Acordar'} />
//     </div>
//   );
// }

const arrayTasks = ['Acordar', 'Jogar um fut', 'Tomar café', 'Chorar vendo react']

function App() {
  const task = (value) => {
      return (
        <li key={value}>{value}</li>
      );
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div>
        {arrayTasks.map((tarefas) => task(tarefas))}
      </div>
    </div>
  );
}


export default App;
