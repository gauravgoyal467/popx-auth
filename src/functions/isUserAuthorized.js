export const isUserAuthorized = (email,password)=> {
    let users = JSON.parse(localStorage.getItem("signedUpUser"));
    if(users!=null){
       let user= users.filter(element => {
            return element.email===email;
        });
        if(user.length<1){
            alert("Enter correct email");
            return false;
        }else{
            if(user[0].password===password){
                return true;
            }else{
                alert("password doesn't matches");
                return false;
            } 
        }     
    }else{
       alert("data doesn't exists");
    }
}