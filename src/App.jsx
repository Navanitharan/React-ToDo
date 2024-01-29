import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Head from './head'
import Filter from './Filter'
import Card from './Card'
function App() {
    const [todoName, setToDoName] = useState("Todo Name")
    const [todoDesc, setToDoDesc] = useState('Todo Description')
    const [cards, setCards] = useState([]);
    const [id,setId] = useState(1);
    const [edit,setEdit] = useState(false);
    const [updateCard,setUpdateCard] = useState({});
    const [filterby, setFilterBy] = useState("All")

    
    let newArray;
  //Adding the cards 
  let addtoDO =(name,decs) =>{
    console.log(name,decs)
    newArray = [...cards,{id,name,decs,status:"Not Completed"}]
    setCards(newArray);
    console.log(newArray)
    setToDoName("Todo Name");
    setToDoDesc("Todo Description");
    setId(id+1);
  }
  

     //for editing the todo details
     let editToDo = (card) => {
      setToDoName(card.name);
      setToDoDesc(card.decs);
      setUpdateCard(card)
      console.log(updateCard,"edit function..")
      setEdit(true);
    }
    //saving the updated data of the todo
    let savetodo = (name,decs)=>{
      console.log("save....",name,decs)
      console.log(updateCard,"save function..")
      updateCard.name=name;
      updateCard.decs=decs;
      newArray=[...cards];
      setCards(newArray)
      setEdit(false)
    }

    const deleteToDo = (deleteCard)=>{
      let newArray = cards.filter((card)=>{return (card.id!== deleteCard.id)});
      setCards(newArray);
    }

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12">

          {/* Head-Scetion */}
          <Head Name={todoName} setName={setToDoName} Desc={todoDesc} setDesc={setToDoDesc} add={addtoDO} edit={edit} save={savetodo}></Head>

          {/* FIlter-Section */}
          <Filter filter = {setFilterBy}></Filter>

          {/* Card-Section */}
          <div className="todo-Card">
            <div className="d-flex justify-content-center row gap-4">

              {/* conditional rendering to render the cards by status of the card */}
              {cards.map((card)=>{return (filterby)==="All" ? <Card key={card.id} status="Not completed" card={card} edit={editToDo} del={deleteToDo} ></Card>:
              ((filterby)===card.status ?<Card key={card.id} status={filterby} card={card} edit={editToDo} del={deleteToDo} ></Card>:"")})}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }

export default App;