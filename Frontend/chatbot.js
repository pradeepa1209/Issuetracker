function toggleChat(){

const chat=document.getElementById("chatWindow");

if(chat.style.display==="flex"){

chat.style.display="none";

}

else{

chat.style.display="flex";

}

}

async function sendMessage() {

    const input = document.getElementById("message");
    const chatBox = document.getElementById("chatBox");

    const message = input.value.trim();

    if (message === "") return;

    // Show user message
    chatBox.innerHTML += `
        <div class="user">
            ${message}
        </div>
    `;

    input.value = "";

    // Show typing message
    chatBox.innerHTML += `
        <div class="bot" id="typing">
            Thinking...
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        const response = await fetch("http://localhost:5000/api/chatbot", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });

        const data = await response.json();

        document.getElementById("typing").remove();

        chatBox.innerHTML += `
            <div class="bot">
                ${data.reply}
            </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {

        document.getElementById("typing").remove();

        chatBox.innerHTML += `
            <div class="bot">
                ❌ Unable to connect to AI Assistant.
            </div>
        `;

        console.log(error);

    }

}