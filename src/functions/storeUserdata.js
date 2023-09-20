export const storeUserData = (name,email,password,phone,companyName,agency) => {
    let user={
        name:name,
        email:email,
        password:password,
        phone:phone,
        companyName:companyName,
        agency:agency
    }
    let users = JSON.parse(localStorage.getItem("signedUpUser"));
    
    if (users != null) {
        users.push(user);
        localStorage.setItem("signedUpUser", JSON.stringify(users));
    } else {
        let users = [];
        users.push(user);
        localStorage.setItem("signedUpUser", JSON.stringify(users));
    }
    alert("created Successfully");
}