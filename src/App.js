import React, {useState} from 'react';
import './App.css';
import {DragDropContext} from "react-beautiful-dnd";
import {v4} from "uuid";
import List from './components/List';
import Drag from './components/Drag';
import Boxes from './components/Boxes';
import BigBox from './components/BigBox';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const item = {
  id: v4(),
  name: "Clean the house",
  img : "https://static1.smartbear.co/smartbear/media/blog/wp/bake_sale_results.jpg"
}

const item2 = {
  id: v4(),
  name: "Wash the car",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBhRx0NPphU89_Db6LZLiyzC_QIL3Q5XKQL_OdUYUegsqZ4VZJhevpiRYO1IJtr654P4&usqp=CAU"

}
const item3 = {
  id: v4(),
  name: "Go TO Home",
  img : "https://www.monterail.com/hs-fs/hubfs/charts.png,qwidth=840,aname=charts.png.pagespeed.ce.Jxd8ZzT2Pz.png"

}
function App() {
  const [text, setText] = useState("")
  const [state, setState] = useState({
    "todo": {
      title: "Todo",
      items: [item, item2,item3]
    },
    "in-progress": {
      title: "In Progress",
      items: []
    },
    "drag": {
      title: "drag",
      items: []
    },
   
  })

  const handleDragEnd = ({destination, source}) => {
    if (!destination) {
      return
    }
    
    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    
    const itemCopy = {...state[source.droppableId].items[source.index]};
    const desCopy = {...state[destination.droppableId].items[destination.index]};

  

    setState(prev => {
      prev = {...prev}
      // Remove from previous items array
      if(destination.droppableId==='todo' &&destination.droppableId !== source.droppableId){
        prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)
        prev[source.droppableId].items.splice(source.index, 1)
      }
      else if ( destination.droppableId === source.droppableId ) {
        prev[source.droppableId].items.splice(source.index, 1)
        prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)
        
      }
     
      else if(prev[destination.droppableId].items <1 ){
        prev[source.droppableId].items.splice(source.index, 1)
        prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)
      }
      else{
        prev[source.droppableId].items.splice(source.index, 1)
        prev[destination.droppableId].items.splice(destination.index, 1)
        prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)
        prev[source.droppableId].items.splice(source.index, 0, desCopy)

      }
      
      return prev
    })
  }
  const{todo , ...newState} = state;
  
  const addItem = (image) => {
    setState(prev => {
      return {
        ...prev,
        todo: {
          title: "Todo",
          items: [
            {
              id: v4(),
              name: 'hello world',
              img : image
            },
            ...prev.todo.items
          ]
        }
      }
    })

    
  }
  
  return (
   <>

     <Navbar/>
    <div className="App row mt-5">
      
      <DragDropContext onDragEnd={handleDragEnd}>
          <List data={state.todo} keyVal={'todo'} setText = {setText} addItem ={addItem} text ={text} />
            <div className="col-md-10 col-8 row bg-light container" style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <div className='wid'>
                <p>drag a widget into an open dashboard slot</p>
              </div>
              <Drag newState={newState['in-progress']} x={'in-progress'}/> 
              <Drag newState={newState['drag']} x={'drag'}/> 
              <div className="col-md-6 col-12  box-container row">
                  <Boxes/>
                  <Boxes/>
                  <Boxes/>
                  <Boxes/>
                  <Boxes/>
                  <Boxes/>
              </div>
              <div className="col-md-6 col-12 big box-container row">
                  <BigBox/>
                  <BigBox/>
              </div>
              <Footer/>
            </div>

      </DragDropContext>
    </div>
    </> 
  );
}

export default App;