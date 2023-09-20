export const doUserExists = (email) => {
    let users = JSON.parse(localStorage.getItem("signedUpUser"));
    if(users!=null){
       let user= users.filter(element => {
            return element.email===email;
        });
        if(user.length>0){
            return true;
        }else{
            return false;
        }        
    }else{
        return false; 
    }
  }