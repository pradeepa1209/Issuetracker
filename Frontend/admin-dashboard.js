const complaintTableBody = document.getElementById("complaintTableBody");
let allComplaints = [];
if (complaintTableBody) {

    loadComplaints();

}

async function loadComplaints() {

    try {

        const response = await fetch("http://localhost:5000/api/complaints/all");

        const complaints = await response.json();

        allComplaints = complaints;

        document.getElementById("totalCount").innerText = complaints.length;

document.getElementById("pendingCount").innerText =
complaints.filter(c => c.status === "Pending").length;

document.getElementById("progressCount").innerText =
complaints.filter(c => c.status === "In Progress").length;

document.getElementById("resolvedCount").innerText =
complaints.filter(c => c.status === "Resolved").length;

        complaintTableBody.innerHTML = "";

        complaints.forEach((complaint) => {

            complaintTableBody.innerHTML += `
                <tr>
                   <!-- <td>${complaint._id}</td>-->
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
                width="120"
                height="80"
                style="border-radius:8px;cursor:pointer;"
                title="Click to view full image">
        </a>
        `
        : "No Image"
    }
</td>


                 <td>
                        <select id="status-${complaint._id}">
                            <option value="Pending" ${complaint.status=="Pending"?"selected":""}>Pending</option>
                            <option value="In Progress" ${complaint.status=="In Progress"?"selected":""}>In Progress</option>
                            <option value="Resolved" ${complaint.status=="Resolved"?"selected":""}>Resolved</option>
                        </select>
                    </td>
                    

                    <td>
                        <button onclick="updateStatus('${complaint._id}')">
                            Update
                        </button>
                    </td>
<td>
    ${
        complaint.feedback
        ? complaint.feedback
        : "No Feedback"
    }
</td>
                </tr>
            `;

        });

    }

    catch(error){

        console.log(error);
        alert("Cannot Load Complaints");

    }

}

async function updateStatus(id){

    const status=document.getElementById(`status-${id}`).value;

    try{

        const response=await fetch(`http://localhost:5000/api/complaints/update/${id}`,{

            method:"PUT",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({status})

        });

        const data=await response.json();

        alert(data.message);

        loadComplaints();

    }

    catch(error){

        alert("Update Failed");

    }

}

function searchComplaints() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    complaintTableBody.innerHTML = "";

    const filtered = allComplaints.filter((complaint) => {

        return (
            complaint.title.toLowerCase().includes(search) ||
            complaint.category.toLowerCase().includes(search)
        );

    });

    filtered.forEach((complaint) => {

        complaintTableBody.innerHTML += `
        <tr>

            <td>${complaint.title}</td>

            <td>${complaint.category}</td>

            <td>${complaint.description}</td>
             <td>${complaint.location}</td>

            <td>
                ${
                    complaint.image
                    ?
                    `<a href="http://localhost:5000/uploads/${complaint.image}" target="_blank">
                    <img src="http://localhost:5000/uploads/${complaint.image}"
                    width="120"
                    height="80"
                    style="border-radius:8px;">
                    </a>`
                    :
                    "No Image"
                }
            </td>

            <td>
                <select id="status-${complaint._id}">
                    <option value="Pending" ${complaint.status=="Pending"?"selected":""}>Pending</option>
                    <option value="In Progress" ${complaint.status=="In Progress"?"selected":""}>In Progress</option>
                    <option value="Resolved" ${complaint.status=="Resolved"?"selected":""}>Resolved</option>
                </select>
            </td>
            

            <td>
                <button onclick="updateStatus('${complaint._id}')">
                    Update
                </button>
            </td>
<td>
    ${
        complaint.feedback
        ? complaint.feedback
        : "No Feedback"
    }
</td>
        </tr>
        `;

    });

}
function filterComplaints() {

    const status =
        document.getElementById("statusFilter").value;

    complaintTableBody.innerHTML = "";

    let filtered = allComplaints;

    if (status !== "All") {

        filtered = allComplaints.filter(
            complaint => complaint.status === status
        );

    }

    filtered.forEach((complaint) => {

        complaintTableBody.innerHTML += `
        <tr>

            <td>${complaint.title}</td>

            <td>${complaint.category}</td>

            <td>${complaint.description}</td>
            <td>${complaint.location}</td>

            <td>
            ${
                complaint.image
                ?
                `<a href="http://localhost:5000/uploads/${complaint.image}" target="_blank">
                <img src="http://localhost:5000/uploads/${complaint.image}"
                width="120"
                height="80"
                style="border-radius:8px;">
                </a>`
                :
                "No Image"
            }
            </td>

            <td>
                <select id="status-${complaint._id}">
                    <option value="Pending" ${complaint.status=="Pending"?"selected":""}>Pending</option>
                    <option value="In Progress" ${complaint.status=="In Progress"?"selected":""}>In Progress</option>
                    <option value="Resolved" ${complaint.status=="Resolved"?"selected":""}>Resolved</option>
                </select>
            </td>
            
            <td>
                <button onclick="updateStatus('${complaint._id}')">
                    Update
                </button>
            </td>
<td>
    ${
        complaint.feedback
        ? complaint.feedback
        : "No Feedback"
    }
</td>
        </tr>
        `;

    });

}
  
function adminLogout() {

    alert("Logged Out Successfully");

    window.location.href = "admin-login.html";

}