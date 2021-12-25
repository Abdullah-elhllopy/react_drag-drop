/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Droppable, Draggable} from "react-beautiful-dnd";
import './List.css'

const List = ({data,keyVal ,setText ,addItem ,text}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    
    }
  }, [ selectedImage]);
  useEffect(() => {
    if (imageUrl) {
      addItem(imageUrl);
      setSelectedImage(null)
      setImageUrl(null)
    }
  },[imageUrl]);

    return (
    <div className={"List col-md-2 col-4"} >
       <div className='mb-3'>
          <input
            accept="image/*"
            type="file"
            id="select-image"
            style={{ display: 'none' }}
            onChange={e => setSelectedImage(e.target.files[0])}
          />
           <label htmlFor="select-image" className='upload'>
              <a  className="btn btn-white border text-dark "  >
              <i className="fas fa-plus "></i>
                New Widget
              </a>
           </label>
        
      </div>
        <Droppable droppableId={keyVal}>
          {(provided, snapshot) => {
            return(
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
            
              >
                {data.items.map((el, index) => {
                  return(
                    <div className="mb-5"key={el.id}>
                        <Draggable key={el.id} index={index} draggableId={el.id} >
                        {(provided, snapshot) => {
                            
                            return(
                            <div
                                className={`item ${snapshot.isDragging && "dragging list-group-item "}`}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                <img className="card-img-top " srcSet="baby-highres.jpg 2x" src={el.img} alt="Bologna" draggable="true"/>
                                <h4 className="card-title text-center text-info">{el.name}</h4>
                                
                            </div>
                            )
                        }}
                        </Draggable>
                    </div>
                  )
                })}
              
                {provided.placeholder}
              </div>
            )
          }}
          
        </Droppable>
      </div>
    )
}

export default List
