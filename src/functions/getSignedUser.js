export const getSignedUser = () => {
    let def={
        name:"Mary Doe",
        email:"Marry@Gmail.com"
    }

    let user = JSON.parse(localStorage.getItem("currentSignedUser"));
    if(user!=null){
       return user        
    }else{
        return def; 
    }
  } 