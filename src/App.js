import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Showcase from "./Components/Showcase/Showcase";
// import AddTask from "./Components/AddTask/AddTask";
// import TaskModal from "./Components/TaskModal/TaskModal";
import Main from "./Pages/Main/Main";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Showcase>
        {/* {console.log("App render")} */}
        <Header />
        <Main />
      </Showcase>

      <Modal />
    </div>
  );
}

export default App;


  //  Sortable => https://codesandbox.io/s/practical-lehmann-lezmu?file=/src/App.js
/* <Home /> */

// return (
//   <>
//     <Link to={"/a"}>/a</Link> <br/> <br/>
//     <Link to={"/b"}>/b</Link> <br/> <br/>
//     <Link to={"/c"}>/c</Link> <br/> <br/>
//     <Link to={"/d"}>/d</Link> <br/> <br/>
//     <Link to={"/e"}>/e</Link> <br/> <br/>

//     <Route path="/a" component={A} />
//     <Route path="/b" component={B} />
//     <Route path="/c" component={C} />
//     <Route path="/d" component={D} />
//     <Route path="/e" component={E} />
//   </>
// );

// const A = () => <h2>A</h2>,
//   B = () => <h2>B</h2>,
//   C = () => <h2>C</h2>,
//   D = () => <h2>D</h2>,
//   E = () => {
//     let [time, setTimer] = useState(5);

//     useEffect(() => {
//       let clearIntervalId = setInterval(() => {
//         setTimer(time - 1);
//       }, 1000);
//       return () => clearInterval(clearIntervalId);
//     }, [time]);

//     return time < 1 ? <Redirect to="/a" /> : <p> {time} </p>;
//   };

// class Router extends React.Component {
//   constructor() {
//     super();
//     this.history = createHistory();
//     this.history.listen(() => this.forceUpdate());
//   }

//   static childContextTypes = {
//     history: PropTypes.object,
//     location: PropTypes.object,
//   };

//   getChildContext() {
//     return {
//       location: window.location,
//       history: this.history,
//     };
//   }
//   render() {
//     return this.props.children;
//   }
// }

// const Redirect = ({ to }, { history }) => {
//   useEffect(() => {
//     history.push(to);
//   });
//   return null;
// };
// Redirect.contextTypes = {
//   history: PropTypes.object,
// };

// const Link = ({ to, children }, { history }) => {
//   return (
//     <a
//       onClick={(ev) => {
//         ev.preventDefault();
//         history.push(to);
//       }}
//       href={to}
//     >
//       {children}
//     </a>
//   );
// };
// Link.contextTypes = {
//   history: PropTypes.object,
// };

// const Route = ({ path, Component }, { location }) => {
//   const pathname = location.pathname;
//   // console.log(pathname);
//   if (pathname.match(path)) {
//     return <Component />;
//   } else return null;
// };
// Route.contextTypes = {
//   location: PropTypes.object,
// };
