import React from 'react'
import {useState} from 'react';

export default function AddEventForm(){

  //The event form. Contains every information about the event. 
  const [eventForm, setEventForm] = useState(
    {
      id : '', 
      organization_id : '', 
      title : '', 
      icon : '',
      description: '',
      price : '',
      capacity : '',
      date : '',
      location : '',
      time : '',
      typeOfEvent: '',
      image: ''
    }
  );

  //Allows to change data in the eventForm
  const editEventForm = (event) => {

    const {name, value} = event.target; 
    
    setEventForm({...eventForm, [name] : value });

  }


  return(

    
    <form>
      <h3 style={{textAlign : "center"}}>Please enter event details</h3>


      <label>Title: <br/>
        <input className='inputStyle' type="text" id ="title" name ="title" value ={eventForm.name} onChange={editEventForm} placeholder='Hackathon 2025'/> 
      </label>

      <br/>

      <label>Description: <br/>
        <textarea className='inputStyle' type="text" id="description" name='description' value= {eventForm.name} onChange = {editEventForm} placeholder='A beginner friendly programming competition'/>
      </label>

      <br/>

      <label>Upload an Image: <br/>
        <input type='file' id="image" name="image" value={eventForm.name} accept='image/*' onChange={editEventForm}/>
      </label>

      <br/>

      <label>Date:<br/>
        <input className='inputStyle' type="text" id="description" name='description' value= {eventForm.name} onChange = {editEventForm} placeholder='day/month/year'/>

      </label>                 

      <br/>
      

      <label>Time: <br/>
        <input className='inputStyle' type="text" id="description" name='description' value= {eventForm.name} onChange = {editEventForm} placeholder='00:00'/>

      </label>

      <br/>

      <label>Location: <br/>
        <input className='inputStyle' type="text" id="location" name='location' value= {eventForm.name} onChange = {editEventForm} placeholder='1455 Blvd. De Maisonneuve Ouest, Montreal, Quebec H3G 1M8'/>

      </label>

      <br/>

      <label>Venue's capacity: <br/>
        <input className='inputStyle' type="text" id="capacity" name='capacity' value= {eventForm.name} onChange = {editEventForm} placeholder='1000'/>

      </label>

      <br/>
      <label >
      
        {"Paid "}
        <input type='radio'name='typeOfEvent' id='paidEvent' value="paid" onClick={editEventForm}/>
        {" "}
        {"Free "}
        <input type='radio'name='typeOfEvent' id='paidEvent' value="free" onClick={editEventForm}/>
        
      </label>
      
      {/* This only appears if the user selects the event to be a paid event in the form*/}
      <div>
          {eventForm.typeOfEvent === "paid"? (

            <label> Ticket price:<br/>
              <input className='inputStyle' type='text' id='price' name='price' value ={eventForm.price} onChange = {editEventForm} placeholder='50'/>
            </label>

          ):(

            <p></p>
          )

          }
      </div>
      


    </form>
    

  );
  

}



