// Select DOM elements
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input input');
const chatForm = document.querySelector('.chat-input');
const sendButton = document.querySelector('.chat-input button');

// Event listener for sending messages
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = chatInput.value.trim();
  if (message !== '') {
    sendMessage(message);
    chatInput.value = '';
  }
});

// Function to send user message and receive bot response
function sendMessage(message) {
  appendMessage('user', message);

  // Simulate AI processing time
  setTimeout(() => {
    const response = generateResponse(message);
    appendMessage('bot', response);
  }, 1000);
}

// Function to generate bot response
function generateResponse(message) {
  // Your AI logic to generate responses goes here
  // This can include natural language processing, machine learning models, etc.
  // For simplicity, we'll just return a static response
  return 'I am an AI-powered chat bot. How can I assist you?';
}

// Function to append messages to the chat window
function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initial bot greeting
setTimeout(() => {
  appendMessage('bot', 'Hello, how can I assist you today?');
}, 1000);
