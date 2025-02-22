export const renderUserPage = () => {
      return `
        <div class="container mx-auto mt-8">
          <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">Welcome to MediCarerHub!</h2>

          <!-- Doctor Booking Section -->
          <section class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-700 mb-4">Book a Doctor</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Doctor Card 1 -->
              <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/300x200" alt="Doctor" class="w-full h-48 object-cover">
                <div class="p-4">
                  <h4 class="text-xl font-semibold text-gray-800">Dr. John Doe</h4>
                  <p class="text-gray-600">Cardiologist</p>
                  <button onclick="bookAppointment('Dr. John Doe')" class="mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Book Appointment</button>
                </div>
              </div>

              <!-- Doctor Card 2 -->
              <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/300x200" alt="Doctor" class="w-full h-48 object-cover">
                <div class="p-4">
                  <h4 class="text-xl font-semibold text-gray-800">Dr. Jane Smith</h4>
                  <p class="text-gray-600">Pediatrician</p>
                  <button onclick="bookAppointment('Dr. Jane Smith')" class="mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Book Appointment</button>
                </div>
              </div>

              <!-- Doctor Card 3 -->
              <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/300x200" alt="Doctor" class="w-full h-48 object-cover">
                <div class="p-4">
                  <h4 class="text-xl font-semibold text-gray-800">Dr. David Lee</h4>
                  <p class="text-gray-600">Dermatologist</p>
                  <button onclick="bookAppointment('Dr. David Lee')" class="mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Book Appointment</button>
                </div>
              </div>
            </div>
          </section>

          <!-- Tracking Features -->
          <section class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-700 mb-4">Tracking</h3>
            <button onclick="trackDoctor()" class="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors mr-4">Track Your Doctor</button>
            <button onclick="trackPrescription()" class="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">Track Your Prescription</button>
          </section>

          <!-- Other Features Section -->
          <section class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-700 mb-4">Explore Our Services</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white rounded-xl shadow-md p-4">
                <h4 class="text-xl font-semibold text-gray-800">Medical Records</h4>
                <p class="text-gray-600">Access your medical history and records securely.</p>
                <a href="#" class="mt-2 text-blue-600 hover:underline">View Records</a>
              </div>
              <div class="bg-white rounded-xl shadow-md p-4">
                <h4 class="text-xl font-semibold text-gray-800">Online Consultation</h4>
                <p class="text-gray-600">Consult with doctors online from the comfort of your home.</p>
                <button onclick="startConsultation()" class="mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Start Consultation</button>
              </div>
            </div>
          </section>

          <button onclick="logout()" class="mt-6 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors block mx-auto">
            Logout
          </button>
        </div>
      `;
    };
