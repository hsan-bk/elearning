// import React, { useState } from 'react';
// import axios from 'axios';

// function UpdatePassword() {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Perform validation checks
//     if (newPassword !== confirmPassword) {
//       setMessage('Passwords do not match');
//       return;
//     }

//     try {
//       // Make an API call to update the password
//       const response = await axios.post('/api/update-password', {
//         currentPassword,
//         newPassword,
//       });

//       // Reset form fields and display success message
//       setCurrentPassword('');
//       setNewPassword('');
//       setConfirmPassword('');
//       setMessage(response.data.message);
//     } catch (error) {
//       // Handle API errors
//       setMessage('An error occurred');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Update Password</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="current-password">Current Password:</label>
//           <input
//             type="password"
//             id="current-password"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="new-password">New Password:</label>
//           <input
//             type="password"
//             id="new-password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="confirm-password">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirm-password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Update Password</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default UpdatePassword;
