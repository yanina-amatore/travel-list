// import logo from './logo.svg';
import './App.css';


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 1, description: "T-shirts", quantity: 2, packed: false },
  { id: 2, description: "Shoes", quantity: 12, packed: false },

];


export default function App() {
  return (
    <div className="App">
       <Logo />
       <Form />
       <PackingList />
       <Stats/>
    </div>
  );
}

function Logo () {
  return (
    <h1 className="">
     Far Away
    </h1>
  );
}

function Form() {
  return (
    <div className="add-form">
     <h3> What do you need for your trip</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div  className="list">
      <li>
      {initialItems.map(item => (<Item item= {item} />)) }
      </li>
    </div>
  );
}

function Item ({item}) {
 return(
  <ui>{item.description} {item.quantity}</ui>
 )
}

function Stats() {

  return (
    <footer className="stats">
        <em> You have  X items on yhour list, and you already packed X (X%)</em>
    </footer>
  );
}
