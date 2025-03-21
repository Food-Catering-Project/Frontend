



// import { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import axios from "axios";

// const AuthSidebar = ({ isOpen, onClose }) => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [loginC, setLoginC] = useState({
//         name: '',
//         password: '',
//     })

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         role: "CUSTOMER",
//         address: "",
//         password: "",
//     });
//     const [error, setError] = useState("");

//     const handleLoginChange = (e) => {
//         setLoginC({ ...loginC, [e.target.name]: e.target.value });
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(
//                 `http://localhost:8004/authenticate/api/auth/login?name=${loginC.name}&password=${loginC.password}`
//             );
//             console.log(response, "response");

//             localStorage.setItem("token", response.data);
//             alert("Login successful!");
//             onClose();
//             setLoginC({
//                 name: "",
//                 password: "",
//             })
//         }

//         catch (err) {
//             setError("Invalid username or password");
//             setTimeout(() => {
//                 setError('')
//             }, 5000);

//             setLoginC({
//                 name: '',
//                 password: '',
//             })
//         }
//     };


//     const handleRegister = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post("http://localhost:8003/action/api/users/addinguser", formData);
//             alert("Registration successful! Please login.");
//             setIsLogin(true);
//             setError(""); // Clear any previous errors
//         } catch (err) {
//             if (err.response && err.response.data && err.response.data.error) {
//                 setError(err.response.data.error); // Display backend error message
//             } else {
//                 setError("Registration failed. Try again.");
//             }

//             setTimeout(() => {
//                 setError("");
//             }, 3000); // Remove error after 3 seconds
//         }
//     };


//     return (
//         <div
//             className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
//                 } z-50`}
//         >
//             <button className="absolute top-4 right-4 text-gray-500 hover:text-red-500" onClick={onClose}>
//                 <FaTimes size={24} />
//             </button>

//             <div className="p-6">
//                 <h2 className="text-2xl font-bold text-orange-600 text-center mb-4">{isLogin ? "Login" : "Create Account"}</h2>


//                 {isLogin ? (
//                     <form onSubmit={handleLogin} className="space-y-4">
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Username"
//                             value={loginC.name}
//                             onChange={handleLoginChange}
//                             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
//                             required
//                         />
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             value={loginC.password}
//                             onChange={handleLoginChange}
//                             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
//                             required
//                         />
//                         <div> {error && <p className="text-red-500 text-center">{error}</p>}</div>
//                         <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300">
//                             Login
//                         </button>
//                     </form>
//                 ) : (
//                     <form onSubmit={handleRegister} className="space-y-4">
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Full Name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
//                             required
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
//                             required
//                         />
//                         <input
//                             type="text"
//                             name="phone"
//                             placeholder="Phone Number"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
//                             required
//                         />
//                         <select
//                             name="role"
//                             value={formData.role}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
//                             required
//                         >
//                             <option value="CUSTOMER">Customer</option>
//                             <option value="ADMIN">Admin</option>
//                             <option value="RESTAURANT_OWNER">Restaurant Owner</option>
//                         </select>
//                         <input
//                             type="text"
//                             name="address"
//                             placeholder="Address"
//                             value={formData.address}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
//                             required
//                         />
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
//                             required
//                         />

//                         {/* 👇 Display error message here */}
//                         {error && <p className="text-red-500 text-center">{error}</p>}

//                         <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300">
//                             Register
//                         </button>
//                     </form>
//                 )}

//                 <p className="text-center text-gray-600 mt-4 cursor-pointer hover:text-orange-500 transition duration-300" onClick={() => setIsLogin(!isLogin)}>
//                     {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default AuthSidebar;

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

const AuthSidebar = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [loginC, setLoginC] = useState({ name: '', password: '' });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "CUSTOMER",
        address: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleLoginChange = (e) => {
        setLoginC({ ...loginC, [e.target.name]: e.target.value });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `http://localhost:8004/authenticate/api/auth/login?name=${loginC.name}&password=${loginC.password}`
            );
            console.log(response, "response");

            localStorage.setItem("token", response.data);
            alert("Login successful!");
            onClose();
            setLoginC({ name: "", password: "" });
        } catch (err) {
            setError("Invalid username or password");
            setTimeout(() => setError(''), 5000);
            setLoginC({ name: '', password: '' });
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8003/action/api/users/addinguser", formData);
            alert("Registration successful! Please login.");
            setIsLogin(true);
            setError(""); // Clear any previous errors
        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else {
                setError("Registration failed. Try again.");
            }
            setTimeout(() => setError(""), 3000);
        }
    };

    return (
        <div
            className={`fixed top-0 right-0 h-full w-full md:w-1/3 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                } z-50`}
        >
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-gray-500 hover:text-red-500" onClick={onClose}>
                <FaTimes size={24} />
            </button>

            {/* Content */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-orange-600 text-center mb-4">
                    {isLogin ? "Login" : "Create Account"}
                </h2>

                {isLogin ? (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input type="text" name="name" placeholder="Username" value={loginC.name} onChange={handleLoginChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" required />
                        <input type="password" name="password" placeholder="Password" value={loginC.password} onChange={handleLoginChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" required />

                        {error && <p className="text-red-500 text-center">{error}</p>}

                        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300">
                            Login
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleRegister} className="space-y-4">
                        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" required />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" required />
                        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" required />
                        <select name="role" value={formData.role} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" required>
                            <option value="CUSTOMER">Customer</option>
                            <option value="ADMIN">Admin</option>
                            <option value="RESTAURANT_OWNER">Restaurant Owner</option>
                        </select>
                        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" required />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" required />

                        {error && <p className="text-red-500 text-center">{error}</p>}

                        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300">
                            Register
                        </button>
                    </form>
                )}

                <p className="text-center text-gray-600 mt-4 cursor-pointer hover:text-orange-500 transition duration-300" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                </p>
            </div>
        </div>
    );
};

export default AuthSidebar;
