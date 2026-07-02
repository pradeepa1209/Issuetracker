const communityBody = document.getElementById("communityBody");

async function loadCommunityFeedback() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/complaints/community"
        );

        const complaints = await response.json();

        communityBody.innerHTML = "";

        complaints.forEach((complaint) => {

            communityBody.innerHTML += `
            <tr>

                <td>${complaint.title}</td>

                <td>
                    ${
                        complaint.image
                        ?
                        `<a href="http://localhost:5000/uploads/${complaint.image}" target="_blank">
                            <img
                                src="http://localhost:5000/uploads/${complaint.image}"
                                width="120"
                                height="80"
                                style="border-radius:8px;cursor:pointer;">
                        </a>`
                        :
                        "No Image"
                    }
                </td>

                <td>${complaint.feedback}</td>

            </tr>
            `;

        });

    }

    catch(error){

        console.log(error);

        alert("Cannot Load Community Feedback");

    }

}

loadCommunityFeedback();