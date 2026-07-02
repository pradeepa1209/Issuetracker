// ======================
// USER REGISTRATION
// ======================

const registerUser = document.getElementById("registerUser");

if (registerUser) {


registerUser.addEventListener("submit", async function(event) {

    event.preventDefault();
if (
document.getElementById("name").value.trim() === "" ||
document.getElementById("email").value.trim() === "" ||
document.getElementById("mobile").value.trim() === "" ||
document.getElementById("password").value.trim() === ""
) {
alert("Please fill all fields");
return;
}

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("mobile").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch(
            "http://localhost:5000/api/users/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }
        );

        const data = await response.json();

        alert(data.message);
        window.location.href =
            "complaint.html";


    } catch (error) {

        console.log(error);
        alert("Registration Failed");

    }

});


}

// ======================
// USER LOGIN
// ======================

const loginForm = document.getElementById("loginForm");

if (loginForm) {


loginForm.addEventListener("submit", async function(event) {

    event.preventDefault();
if (
document.getElementById("email").value.trim() === "" ||
document.getElementById("password").value.trim() === ""
) {
alert("Please enter Email and Password");
return;
}

    const loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch(
            "http://localhost:5000/api/users/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            }
        );

        const data = await response.json();

        
       if (data.success) {


localStorage.setItem("userEmail", loginData.email);

alert("Login Successful");

window.location.href = "user-dashboard.html";


} else {


alert("Invalid Email or Password");


}


    } catch (error) {

        console.log(error);
        alert("Login Failed");

    }

});


}



// ======================
// ADMIN LOGIN
// ======================

const adminLoginForm =
document.getElementById("adminLoginForm");

if (adminLoginForm) {


adminLoginForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch(
            "http://localhost:5000/api/admin/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            }
        );

        const data = await response.json();

        if (data.success) {

            alert("Admin Login Successful");

            window.location.href =
            "dashboard.html";

        } else {

            alert("Invalid Admin Credentials");

        }

    } catch (error) {

        console.log(error);
        alert("Admin Login Failed");

    }

});
}



// ======================
// COMPLAINT SUBMISSION
// ======================

const complaintForm = document.getElementById("complaintForm");

if (complaintForm) {


complaintForm.addEventListener("submit", async function(event){

    event.preventDefault();
    if (
document.getElementById("title").value.trim() === "" ||
document.getElementById("description").value.trim() === "" ||
document.getElementById("location").value.trim() === ""
) {
alert("Please fill all complaint details.");
return;
}

    const formData = new FormData();

    formData.append("title", document.getElementById("title").value);
    formData.append("description", document.getElementById("description").value);
    formData.append("category", document.getElementById("category").value);
    formData.append("location", document.getElementById("location").value);
    formData.append("email", localStorage.getItem("userEmail"));

    const image = document.getElementById("image").files[0];

    if(image){
        formData.append("image", image);
    }

    try{

        const response = await fetch(
            "http://localhost:5000/api/complaints/add",
            {
                method:"POST",
                body:formData
            }
        );

        const data = await response.json();

        if(data.success){

            alert("Complaint Submitted Successfully");

            window.location.href="user-dashboard.html";

        }
        else{

            alert(data.message);

        }

    }
    catch(error){

        console.log(error);

        alert("Complaint Submission Failed");

    }

});


}
