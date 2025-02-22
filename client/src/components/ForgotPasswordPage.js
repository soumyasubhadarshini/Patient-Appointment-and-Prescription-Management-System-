export const renderForgotPasswordPage = () => {
      return `
        <div class="min-h-screen flex items-center justify-center bg-soft-blue p-4">
          <div class="w-full max-w-md">
            <div class="bg-white rounded-xl shadow-2xl p-8">
              <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-gray-800 mb-2">Forgot Password</h1>
                <p class="text-gray-600">Enter your email to reset your password.</p>
              </div>

              <form id="forgotPasswordForm" class="space-y-4">
                <div>
                  <label class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                  <input type="email" id="email" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      `;
    };
