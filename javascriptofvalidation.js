 if (name !=="") {
        document.getElementById('name').style.backgroundColor="white";
        document.getElementById('name').style.border="4px solid";
        document.getElementById('name').style.borderColor="green";
        } 
        
        else if ( address !=="") {
        document.getElementById('address').style.backgroundColor="white";
        document.getElementById('address').style.border="4px solid";
        document.getElementById('address').style.borderColor="green";
        }
        if (contact !=="") {
        document.getElementById('contact').style.backgroundColor="white";
        document.getElementById('contact').style.border="4px solid";
        document.getElementById('contact').style.borderColor="green";
        let regxcontact=document.getElementById('contact');
        contact.match(/^\b\d{3}[-.]?\d{3}[-.]?\d{4}\b$/);
        }else 
        if (email !=""){
        document.getElementById('email').style.backgroundColor="white";
        document.getElementById('email').style.border="4px solid";
        document.getElementById('email').style.borderColor="green";   
        }else
        if (studid !=""){
        document.getElementById('studid').style.backgroundColor="white";
        document.getElementById('studid').style.border="4px solid";
        document.getElementById('studid').style.borderColor="green";
        }else
        if (mother !=""){
        document.getElementById('mother').style.backgroundColor="white";
        document.getElementById('mother').style.border="4px solid";
        document.getElementById('mother').style.borderColor="green";
        }else 
        if (father !=""){
        document.getElementById('father').style.backgroundColor="white";
        document.getElementById('father').style.border="4px solid";
        document.getElementById('father').style.borderColor="green";
        }else 
        if (adhar !=""){
        document.getElementById('adhar').style.backgroundColor="white";
        document.getElementById('adhar').style.border="4px solid";
        document.getElementById('adhar').style.borderColor="green";
        }