const socket = io();
let currentChatUser = null;

const userList = document.getElementById("userList");
const chatHeader = document.getElementById("chatHeader");
const chatBox = document.getElementById("chatBox");

// Example: fetch all users (replace with backend API later)
const users = ["Rahul","Amit","Sanya"];
users.forEach(u => {
  const li = document.createElement("li");
  li.textContent = u;
  li.onclick = () => openChat(u);
  userList.appendChild(li);
});

function openChat(username){
  currentChatUser = username;
  chatHeader.textContent = "Chat with " + username;

  // Clear previous messages
  chatBox.innerHTML = "";

  // Load chat history (fetch from backend)
  fetch(`/messages/Luna/${username}`)
    .then(res => res.json())
    .then(messages => {
      messages.forEach(msg => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.classList.add(msg.sender === "Luna" ? "sent" : "received");
        messageDiv.textContent = msg.message;
        chatBox.appendChild(messageDiv);
      });
      chatBox.scrollTop = chatBox.scrollHeight;
    });
}

function sendMessage(){
  if(!currentChatUser) return alert("Select a user first!");

  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if(text === "") return;

  const data = {
    sender:"Luna",
    receiver:currentChatUser,
    message:text
  };

  socket.emit("chat message", data);
  input.value = "";
}

// Listen for incoming messages
socket.on("chat message", function(data){
  if(data.sender === currentChatUser || data.receiver === currentChatUser){
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.classList.add(data.sender === "Luna" ? "sent" : "received");
    messageDiv.textContent = data.message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});