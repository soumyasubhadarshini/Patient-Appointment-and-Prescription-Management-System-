export const renderPrescriptionPage = (doctorName, appointmentDetails) => {
      return `
        <div class="container mx-auto mt-8">
          <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">Prescription</h2>
          <div class="bg-white rounded-xl shadow-md p-4">
            <h3 class="text-2xl font-semibold text-gray-700 mb-4">Doctor: ${doctorName}</h3>
            <p class="text-gray-600">Name: ${appointmentDetails.name}</p>
            <p class="text-gray-600">Health Issue: ${appointmentDetails.healthIssue}</p>
            <h4 class="text-xl font-semibold text-gray-800">Medication Details</h4>
            <p class="text-gray-600">Medicine 1: Dosage - 1 tablet twice a day</p>
            <p class="text-gray-600">Medicine 2: Dosage - 10ml after meals</p>
            <h4 class="text-xl font-semibold text-gray-800">Checkup Bill</h4>
            <p class="text-gray-600">Total: $100</p>
            <div class="mt-4">
              <p class="text-gray-600">Doctor's Signature</p>
              <img src="https://via.placeholder.com/100x50" alt="Signature" class="w-24">
            </div>
          </div>
        </div>
      `;
    };
