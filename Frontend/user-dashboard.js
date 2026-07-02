const complaintBody = document.getElementById("userComplaintBody");

const email = localStorage.getItem("userEmail");

async function loadUserComplaints() {


try {
    const response = await fetch(
        `http://localhost:5000/api/complaints/user/${email}`
    );

    const complaints = await response.json();

    complaintBody.innerHTML = "";

    complaints.forEach((complaint) => {

        complaintBody.innerHTML += `
            <tr>
                <td>${complaint.title}</td>
                <td>${complaint.category}</td>
              <td>${complaint.description}</td>

                <td>${complaint.location}</td>
                <td>
        ${
            complaint.image
            ? `
            <a href="http://localhost:5000/uploads/${complaint.image}" target="_blank">
                <img
                    src="http://localhost:5000/uploads/${complaint.image}"
                    width="100"
                    height="70"
                    style="border-radius:8px;cursor:pointer;"
                    title="Click to view full image">
            </a>
            `
            : "No Image"
        }
    </td>
                <td>${complaint.status}</td>
                <td>

${
    complaint.status === "Resolved"

    ?

    complaint.feedback

    ?

    complaint.feedback

    :

    `
    <input
        type="text"
        id="feedback-${complaint._id}"
        placeholder="Enter feedback">

    <button
        onclick="submitFeedback('${complaint._id}')">
        Submit
    </button>
    `

    :

    "-"
}

</td>

    
            </tr>
        `

    });

}

catch(error){

    console.log(error);
    alert("Cannot Load Complaints");

}


}

loadUserComplaints();

async function submitFeedback(id) {

    const feedback =
    document.getElementById(`feedback-${id}`).value;

    if (feedback.trim() === "") {

        alert("Please enter feedback");

        return;

    }

    try {

        const response = await fetch(
            `http://localhost:5000/api/complaints/feedback/${id}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({ feedback })

            }
        );

        const data = await response.json();

        alert(data.message);

        loadUserComplaints();

    }

    catch (error) {

        alert("Feedback Submission Failed");

    }

}
function logout() {

    localStorage.removeItem("userEmail");

    alert("Logged Out Successfully");

    window.location.href = "user-login.html";

}