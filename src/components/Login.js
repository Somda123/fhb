// // // src/component/Login.js
// // import React, { useState } from 'react';
// // import './Login.css';
// // import { useNavigate } from 'react-router-dom';

// // function Login() {
// //     const navigate = useNavigate();
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Show success message briefly
// //     setShowSuccessMessage(true);

// //     // Clear email and password fields
// //     setEmail('');
// //     setPassword('');

// //     // Hide success message after 1 second
// //     setTimeout(() => {
// //       setShowSuccessMessage(false);
// //       navigate('/admin')
// //     }, 500);
// //   };

// //   return (
// //     <div className="login-container">
// //       <form className="login-form" onSubmit={handleSubmit}>
// //         <h2>Admin Login Page</h2>
// //         <div className="form-group">
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button  type="submit" className='button'>Login</button>
// //         {showSuccessMessage && <p className="success-message">Login Successfully!</p>}

// //         {/* <button  type="button" className="forgot-password-button">Forgot Password?</button> */}
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;





// // src/component/Login.js
// import React, { useState } from 'react';
// import './Login.css';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false); // New state for toggling password visibility
//     const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Show success message briefly
//         setShowSuccessMessage(true);

//         // Clear email and password fields
//         setEmail('');
//         setPassword('');

//         // Hide success message after 1 second
//         setTimeout(() => {
//             setShowSuccessMessage(false);
//             navigate('/admin')
//         }, 500);
//     };

//     return (
//         <div className="login-container">
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <h2>Admin Login Page</h2>
//                 <div className="form-group">
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <div className="password-wrapper">
//                         <input
//                             type={showPassword ? 'text' : 'password'} // Toggle between text and password
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <span className="eye-icon" onClick={togglePasswordVisibility}>
//                             {showPassword ? '🙈' : '👁️'} {/* Toggle between eye and eye-slash emoji */}
//                         </span>
//                     </div>
//                 </div>
//                 <button type="submit" className='button'>Login</button>
//                 {showSuccessMessage && <p className="success-message">Login Successfully!</p>}
//             </form>
//         </div>
//     );
// }

// export default Login;




// src/component/Login.js
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // New state for toggling password visibility
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show success message briefly
        setShowSuccessMessage(true);

        // Clear email and password fields
        setEmail('');
        setPassword('');

        // Hide success message after 1 second
        setTimeout(() => {
            setShowSuccessMessage(false);
            navigate('/admin')
        }, 500);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Admin Login Page</h2>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'} // Toggle between text and password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /> {/* Toggle between eye and eye-slash */}
                        </span>
                    </div>
                </div>
                <button type="submit" className='button'>Login</button>
                {showSuccessMessage && <p className="success-message">Login Successfully!</p>}
            </form>
        </div>
    );
}

export default Login;
