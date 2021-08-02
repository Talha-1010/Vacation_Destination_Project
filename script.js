(function(){

    "use strict"
    var myForm = document.getElementById("destination_details_form");
    myForm.addEventListener('submit',formSubmit);
    
        //performs actions on pressing submit button
        function formSubmit(event)
        {
            event.preventDefault();
            var destName = event.target.elements['name'].value;
            var destLocation = event.target.elements['location'].value;
            var destPhoto = event.target.elements['photo'].value;
            var destDesc =event.target.elements['description'].value;
    
        
            //clearing all fields
            for(var i=0; i<myForm.length;i++)
            {
                myForm.elements[i].value="";
            }
    
            var card=createNewCard(destName,destLocation,destPhoto,destDesc);
            if(card.children.length!=0)
            {
                document.getElementById("title").innerHTML="My Whish List";
            }
            var destDetails= document.getElementById("Destination_details");
            destDetails.appendChild(card);
    
        }
    
        //creates a new destination card
        function createNewCard(destName,destLocation,destPhoto,destDesc)
        {
            var card = document.createElement("div");
            card.setAttribute("class","card");
    
    
            var img = document.createElement("img");
            if(destPhoto.length>0)
            {
                img.setAttribute("src",destPhoto);
            }
            else{
                img.setAttribute("src","images/signpost.jpg")
            }
            img.setAttribute("class","grow");
    
            card.appendChild(img);
    
    
            var card_body =document.createElement("div");
            card_body.setAttribute("class","card_body");
    
            var heading3 = document.createElement("h3");
            if(destName.length>0)
            {
                heading3.innerHTML=destName;
            }
            else{
                heading3.innerHTML="Destination Name";
            }
            card_body.appendChild(heading3);
    
            var heading4 =document.createElement("h4");
            if(destLocation.length>0)
            {
                heading4.innerHTML=destLocation;
            }
            else
            {
                heading4.innerHTML="Destination Location";
            }
            card_body.appendChild(heading4);
    
            var paragraph = document.createElement("p");
            if(destDesc.length>0)
            {
                paragraph.innerHTML=destDesc;
            }
            else
            {
                paragraph.innerHTML="Destination description";
            }
            card_body.appendChild(paragraph);
            
            
            var button = document.createElement("button");
            button.innerText ="remove";
            button.addEventListener('click',removeDestination);
            card_body.appendChild(button);
    
    
            card.appendChild(card_body);
    
            return card;
    
        }
    
    
        //Removes the destination card from wishlist
        function removeDestination(event)
        {   
            var myobj = event.target.parentElement.parentElement;
            myobj.remove();
        }
    
    
    
    })();