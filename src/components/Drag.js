import React,{useState} from 'react';
import { Droppable, Draggable} from "react-beautiful-dnd";
import { Resizable } from "re-resizable";
import './Drag.css';

const Drag = ({newState ,x}) => {
  const [state, setState] = useState({ width: '100%', height: '700px' });

    return (
       
        <div className="wrap col-md-6 col-12  ">
            
            <Droppable droppableId={x} >
              {(provided, snapshot) => {
              
                return(
                  <Resizable
                      size={{ width: state.width, height: state.height }}
                      className='resize both bg-white  '
                      onResizeStop={(e, direction, ref, d) => {
                     setState({
                        width: state.width + d.width, height: state.height + d.height,});
                     }}>
                       <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          {...provided.dragHandleProps}
                          isDragging={snapshot.isdragging && !snapshot.isDropAnimating}  
                       >
                            {newState.items.map((el, index) => {
                                 return(
                                      
                                  <Draggable key={el.id} index={index} draggableId={el.id} >
                                  {(provided, snapshot) => {
                                      
                                      return(
                                      <div
                                          className={`item ${snapshot.isDragging && "dragging  "}`}
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                      >
                                          <img className= "img-flui" srcSet="baby-highres.jpg 2x" src={el.img} alt="Bologna" draggable="true"/>
                                          <h4 className="card-title text-center text-info">{el.name}</h4>
                                          
                                      </div>
                                      )
                                  }}
                                  </Draggable>
                                )         
                              })}            
                                      
                              {provided.placeholder}
                         </div>
                  </Resizable>
                )
              }}
            </Droppable>
           
      </div>
      
         
        
      
    )
}

export default Drag
