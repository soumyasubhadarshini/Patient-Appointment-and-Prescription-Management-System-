export const renderLoginPage = (isLoginForm) => {
      return `
        <div class="min-h-screen flex items-center justify-center bg-soft-blue p-4">
          <div class="w-full max-w-md">
            <div class="bg-white rounded-xl shadow-2xl p-8">
              <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-gray-800 mb-2">MediCarerHub</h1>
                <p class="text-gray-600">Your Healthcare Management Solution</p>
              </div>

              <!-- Login Form -->
              <form id="loginForm" class="space-y-4">
                ${!isLoginForm ? `
                  <div>
                    <label class="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
                    <input type="text" id="fullName" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                  </div>
                  <div>
                    <label class="block text-gray-700 text-sm font-semibold mb-2">Profile Type</label>
                    <select id="profileType" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </div>
                ` : ''}
                <div>
                  <label class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                  <input type="email" id="email" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <div>
                  <label class="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                  <input type="password" id="password" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  ${isLoginForm ? 'Login' : 'Sign Up'}
                </button>
              </form>

              <div class="mt-4 text-center">
                <button onclick="toggleForm()" class="text-blue-600 hover:underline">
                  ${isLoginForm ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                </button>
                ${isLoginForm ? `<div class="mt-2"><button onclick="forgotPassword()" class="text-blue-600 hover:underline">Forgot Password?</button></div>` : ''}
              </div>

              <div class="mt-6">
                <div class="relative">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div class="mt-6">
                  <button onclick="googleLogin()" class="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <img src="https://www.google.com/favicon.ico" alt="Google" class="w-5 h-5">
                    Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    };
