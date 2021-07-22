import React from 'react';
import ContactCard from './ContactCard'


function Vezba (){
return(
    
   <div className="contacts">
   <ContactCard
    name = "Koko"
    imgUrl = "http://placekitten.com/300/200"
    phone = "(212) 555-1234" 
    email = "mr.whiskaz@catnap.meow" 
    />

   <ContactCard 
    name = "Mackica" 
   imgUrl = "http://placekitten.com/400/200" 
   phone = "(212) 555-2345" 
   email = "fluff@me.com"
   />

   <ContactCard
    name = "Cupo" 
   imgUrl = "http://placekitten.com/400/300"
    phone = "(212) 555-3456" 
    email = "ofworlds@yahoo.com"
   />

   <ContactCard 
    name = "Zuca" 
   imgUrl = "http://placekitten.com/200/100" 
   phone = "(212) 555-4567" 
   email = "thecat@hotmail.com"
   />
           
    </div>
   )
};




export default Vezba;