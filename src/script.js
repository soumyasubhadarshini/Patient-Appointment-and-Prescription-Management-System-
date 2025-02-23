let currentRole = null;
    let isLoginForm = true;

    function setRole(role) {
        currentRole = role;
        document.getElementById('patientBtn').dataset.selected = role === 'patient';
        document.getElementById('doctorBtn').dataset.selected = role === 'doctor';
        
        // Update button styles
        document.querySelectorAll('[data-selected]').forEach(btn => {
            if(btn.dataset.selected === 'true') {
                btn.classList.add('bg-blue-100', 'border-blue-500');
            } else {
                btn.classList.remove('bg-blue-100', 'border-blue-500');
            }
        });

        document.getElementById('authForms').classList.remove('hidden');
    }

    function toggleForm() {
        isLoginForm = !isLoginForm;
        const form = document.getElementById('loginForm');
        if(!isLoginForm) {
            form.innerHTML = `
                <div>
                    <label class="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
                    <input type="text" id="fullName" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                    <input type="email" id="email" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                    <input type="password" id="password" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-semibold mb-2">Confirm Password</label>
                    <input type="password" id="confirmPassword" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Sign Up
                </button>
            `;
        } else {
            form.innerHTML = `
                <div>
                    <label class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                    <input type="email" id="email" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                    <input type="password" id="password" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Login
                </button>
            `;
        }

        const toggleButton = document.querySelector('button[onclick="toggleForm()"]');
        toggleButton.textContent = isLoginForm ? "Don't have an account? Sign Up" : "Already have an account? Login";
    }

    function googleLogin() {
        // Simulate Google Login
        console.log('Google login clicked for role:', currentRole);
        showHomePage(); // Directly go to homepage after "Google login"
    }

    // Form submission handling
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (isLoginForm) {
            // Simulate Login
            console.log('Login submitted for role:', currentRole, 'Email:', email);
            // For demonstration purposes, consider any non-empty email and password as valid
            if (email && password) {
                showHomePage();
            } else {
                alert('Invalid credentials');
            }
        } else {
            // Simulate Sign Up
            const fullName = document.getElementById('fullName').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            console.log('Sign Up submitted for role:', currentRole, 'Email:', email, 'Full Name:', fullName);

            if (password === confirmPassword && email && fullName) {
                showHomePage();
            } else {
                alert('Sign up failed: Passwords do not match or missing information.');
            }
        }
    });

    function showHomePage() {
        document.getElementById('authForms').classList.add('hidden');
        document.getElementById('homePage').classList.remove('hidden');
    }

    function logout() {
        document.getElementById('homePage').classList.add('hidden');
        document.getElementById('authForms').classList.remove('hidden');
        // Reset the form to login
        if (!isLoginForm) {
            toggleForm();
        }
        document.getElementById('loginForm').reset();
    }

    // Show loading
    function showLoading() {
        document.getElementById('loadingAnimation').classList.remove('hidden');
    }

    // Hide loading
    function hideLoading() {
        document.getElementById('loadingAnimation').classList.add('hidden');
    }
