export const renderAppointmentForm = (doctorName, onSubmit) => {
      return `
        <div class="container mx-auto mt-8">
          <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">Appointment Booking for ${doctorName}</h2>
          <form id="appointmentForm" class="space-y-4">
            <div>
              <label class="block text-gray-700 text-sm font-semibold mb-2">Name</label>
              <input type="text" id="name" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-semibold mb-2">Address</label>
              <input type="text" id="address" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-semibold mb-2">Gender</label>
              <select id="gender" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-semibold mb-2">Health Issue</label>
              <textarea id="healthIssue" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-semibold mb-2">Image URL</label>
              <input type="url" id="image" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-semibold mb-2">State</label>
              <input type="text" id="state" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-semibold mb-2">Street</label>
              <input type="text" id="street" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-semibold mb-2">Country</label>
              <input type="text" id="country" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-semibold mb-2">Mobile Number</label>
              <input type="tel" id="mobileNumber" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Book Appointment
            </button>
          </form>
        </div>
      `;
    };
