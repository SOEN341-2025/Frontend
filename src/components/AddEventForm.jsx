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
      typeOfEvent: ''

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
      <label>title: 
        <input type="text" id ="title" name ="title" value ={eventForm.name} onChange={editEventForm} placeholder='Hackathon 2025'/> 
      </label>

      <br/>

      <label>description: 
        <textarea type="text" id="description" name='description' value= {eventForm.name} onChange = {editEventForm} placeholder='A beginner friendly programming competition'/>
      </label>

      <br/>

      <label>date:
        <input type="text" id="description" name='description' value= {eventForm.name} onChange = {editEventForm} placeholder='day/month/year'/>

      </label>                 

      <br/>
      

      <label>time: 
        <input type="text" id="description" name='description' value= {eventForm.name} onChange = {editEventForm} placeholder='00:00'/>

      </label>

      <br/>

      <label>location: 
        <input type="text" id="location" name='location' value= {eventForm.name} onChange = {editEventForm} placeholder='1455 Blvd. De Maisonneuve Ouest, Montreal, Quebec H3G 1M8'/>

      </label>

      <br/>

      <label>venue's capacity: 
        <input type="text" id="capacity" name='capacity' value= {eventForm.name} onChange = {editEventForm} placeholder='1000'/>

      </label>

      <br/>

      <label>Type of event:
        <select id="typeOfEvent" name="typeOfEvent" value ={eventForm.typeOfEvent} onChange = {editEventForm}>
          <option value="paid">Paid</option>
          <option value="free">Free</option>
          
        </select>

      </label>

      <div>
          {eventForm.typeOfEvent === "paid"? (

            <label> ticket price:
              <input type='text' id='price' name='price' value ={eventForm.price} onChange = {editEventForm} placeholder='50'/>
            </label>

          ):(

            <p></p>
          )

          }
      </div>
      


    </form>
    

  );
  

}



