// import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';
import ListStudent from './Components/ListStudent';
import Welcome from './Components/Welcome'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//}

// import './App.css';

// const App = () => {
//   const student1 = "John Doe";

//   return (
//     <div className="Container">

//       <h1>Hello World</h1>
//       <h1>Welcome {student1}</h1>
//       <h1>Welcome {student1}</h1>
//       <h1>Welcome {student1}</h1>
//       <h1>Bye World</h1>

//     </div>
//   );
// }

// class Header extends Component {
//   render () {
//     return <h1>This is header</h1>
//   }
// }

// class App extends Component {
//   render () {
//     //const fullName = "John Doe";
//     return (
 
//       <div className="Container">

//         <h1>Hello World</h1>
//         <Header/>
//         <Welcome />

//        </div> 
//     );
//   }
// }

class App extends Component {
  state={
    isShow: false,
  };

  toggleButton = () => {
    this.setState({isShow: !this.state.isShow});
  };

  render () {
    const Backend = [
      {
        Name: 'John',
        Adress: 'Manado'
      },
      {
        Name: 'Jane',
        Adress: 'Bitung'
      },
      {
        Name: 'Bob',
        Adress: 'Aermadidi'
      }
    ];

    const WebProgramming = [
      {
        Name: 'Ferren',
        Adress: 'Manado'
      },
      {
        Name: 'Carol',
        Adress: 'Bitung'
      },
      {
        Name: 'Shania',
        Adress: 'Aermadidi'
      }
    ];
    
    return(
      <>
      {
        this.state.isShow && (
          <ListStudent title="BackEnd Programming Class" students={Backend}/>
        )
      }
     {/* <ListStudent title="BackEnd Programming Class" students={Backend}/> */}
     {/* <ListStudent title = "Web Programming Class" students={WebProgramming}/> */}
     <button onClick={this.toggleButton}>Toggle List Student</button>
      </>
    );
  }
}


export default App;
