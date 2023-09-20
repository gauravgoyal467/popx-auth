export const setCurrentUser = (email) => {
    let users = JSON.parse(localStorage.getItem("signedUpUser"));
    if(users!=null){
        let user= users.filter(element => {
             return element.email===email;
         });
         console.log(user);
         localStorage.setItem("currentSignedUser", JSON.stringify(user[0]));     
     }else{
         alert("data doesn't exists")
     }
}