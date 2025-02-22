export const renderChatbot = () => {
      return `
        <div class="container mx-auto mt-8">
          <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">Consultation</h2>
          <div class="bg-white rounded-xl shadow-md p-4">
            <div id="chatArea" class="mb-4" style="height: 300px; overflow-y: scroll; padding: 10px; border: 1px solid #ccc;">
              <p class="text-gray-600">Welcome to MediCarerHub! How can I assist you today?</p>
            </div>
            <div class="flex items-center">
              <input type="text" id="messageInput" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type your message...">
              <button id="sendButton" class="ml-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Send</button>
            </div>
          </div>
        </div>
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const sendButton = document.getElementById('sendButton');
            const messageInput = document.getElementById('messageInput');
            const chatArea = document.getElementById('chatArea');

            // Replace with your actual API key
            const apiKey = 'YOUR_OPENAI_API_KEY';

            const sendMessage = async () => {
              const message = messageInput.value;
              if (message.trim() !== '') {
                // Display user message
                const userMessage = document.createElement('p');
                userMessage.className = 'text-blue-600 mb-2 text-right';
                userMessage.textContent = 'You: ' + message;
                chatArea.appendChild(userMessage);

                chatArea.scrollTop = chatArea.scrollHeight;
                messageInput.value = '';

                try {
                  const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + apiKey
                    },
                    body: JSON.stringify({
                      model: 'gpt-3.5-turbo',
                      messages: [{ role: 'user', content: message }]
                    })
                  });

                  if (!response.ok) {
                    throw new Error('HTTP error! status: ' + response.status);
                  }

                  const data = await response.json();
                  if (data.choices && data.choices.length > 0) {
                    const botResponse = data.choices[0].message.content;

                    // Display bot message
                    const botMessage = document.createElement('p');
                    botMessage.className = 'text-gray-600 mb-2 text-left';
                    botMessage.textContent = 'MediBot: ' + botResponse;
                    chatArea.appendChild(botMessage);
                  } else {
                    console.error('No choices in the response:', data);
                    chatArea.innerHTML += '<p class="text-red-600">Error: No response from AI.</p>';
                  }

                  chatArea.scrollTop = chatArea.scrollHeight;
                } catch (error) {
                  console.error('Error fetching chatbot response:', error);
                  chatArea.innerHTML += '<p class="text-red-600">Error: Could not retrieve response.</p>';
                }
              }
            };

            sendButton.addEventListener('click', sendMessage);

            messageInput.addEventListener('keypress', (event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                sendMessage();
              }
            });
          });
        </script>
      `;
    };
