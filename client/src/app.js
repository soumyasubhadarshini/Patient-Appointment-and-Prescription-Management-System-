import './style.css';
    import { renderLoginPage } from './components/LoginPage';
    import { renderUserPage } from './components/UserPage';
    import { renderAppointmentForm } from './components/AppointmentForm';
    import { renderPrescriptionPage } from './components/PrescriptionPage';
    import { renderTrackDoctor } from './components/TrackDoctor';
    import { renderTrackPrescription } from './components/TrackPrescription';
    import { renderChatbot } from './components/Chatbot';
    import { renderForgotPasswordPage } from './components/ForgotPasswordPage';

    let isLoginForm = true;
    let userData = null; // Store user data after login
    let appointmentDetails = null;
    let users = []; // Simulate user database

    const renderApp = () => {
      document.querySelector('#root').innerHTML = renderLoginPage(isLoginForm);

      window.toggleForm = () => {
        isLoginForm = !isLoginForm;
        document.querySelector('#root').innerHTML = renderLoginPage(isLoginForm);
      };

      window.googleLogin = () => {
        console.log('Google login clicked');
        userData = { name: 'Google User', email: 'google@example.com', profileType: 'patient' }; // Simulate user data
        document.querySelector('#root').innerHTML = renderUserPage();
      };

      window.logout = () => {
        console.log('Logout clicked');
        userData = null;
        document.querySelector('#root').innerHTML = renderLoginPage(true);
      };

      window.bookAppointment = (doctorName) => {
        console.log('Book appointment clicked for:', doctorName);
        document.querySelector('#root').innerHTML = renderAppointmentForm(doctorName, (details) => {
          appointmentDetails = details;
          // Simulate storing appointment details
          console.log('Appointment details:', appointmentDetails);
          // Estimate doctor arrival time
          const arrivalTime = new Date();
          arrivalTime.setMinutes(arrivalTime.getMinutes() + 30); // Arriving in 30 minutes
          alert(`Dr. ${doctorName} will reach your home around ${arrivalTime.toLocaleTimeString()}`);
          // Redirect to user page
          document.querySelector('#root').innerHTML = renderUserPage();
        });
      };

      window.trackDoctor = () => {
        console.log('Track doctor clicked');
        document.querySelector('#root').innerHTML = renderTrackDoctor();
      };

      window.trackPrescription = () => {
        console.log('Track prescription clicked');
        document.querySelector('#root').innerHTML = renderTrackPrescription();
      };

      window.startConsultation = () => {
        console.log('Start consultation clicked');
        document.querySelector('#root').innerHTML = renderChatbot();
      };

      window.forgotPassword = () => {
        console.log('Forgot password clicked');
        document.querySelector('#root').innerHTML = renderForgotPasswordPage();
      };
    };

    document.addEventListener('DOMContentLoaded', () => {
      renderApp();

      document.addEventListener('submit', (event) => {
        if (event.target.id === 'loginForm') {
          event.preventDefault();

          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;

          if (isLoginForm) {
            // Simulate login
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
              userData = user;
              console.log('Login successful', userData);
              document.querySelector('#root').innerHTML = renderUserPage();
            } else {
              alert('Invalid credentials');
            }
          } else {
            // Simulate signup
            const fullName = document.getElementById('fullName').value;
            const profileType = document.getElementById('profileType').value;

            // Check if email already exists
            if (users.find(u => u.email === email)) {
              alert('Email already exists');
              return;
            }

            const newUser = { name: fullName, email: email, password: password, profileType: profileType };
            users.push(newUser);
            userData = newUser;
            console.log('Signup successful', userData);
            document.querySelector('#root').innerHTML = renderUserPage();
          }
        }
      });
    });
