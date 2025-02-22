export const renderChat = () => {
      return `
        <div class="bg-white rounded-xl shadow-md p-4">
          <h4 class="text-xl font-semibold text-gray-800">Chat with Doctor</h4>
          <div class="mt-2">
            <!-- Chat messages will go here -->
            <p>Hello, how can I assist you today?</p>
          </div>
          <div class="mt-4">
            <input type="text" placeholder="Type your message..." class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button class="mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Send</button>
          </div>
        </div>
      `;
    };
