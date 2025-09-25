import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCloseCircle } from "react-icons/ai";
import toast from "react-hot-toast";
import type { User } from "../App";

interface RegisterProps {
  addUser: (user: User) => void;
}

interface InputProps {
  type?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  isPassword?: boolean;
}

const InputField: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
  disabled,
  loading,
  isPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const baseStyle = "w-full rounded-xl border border-gray-300 p-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 text-black";

  return (
    <div className="relative w-full">
      <input
        type={isPassword ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled || loading}
        className={`${baseStyle} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      />

      {/* Password toggle */}
      {isPassword && !disabled && !loading && (
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
        </button>
      )}

      {/* Clear button */}
      {!isPassword && value && !disabled && !loading && (
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition"
          onClick={() => onChange("")}
        >
          <AiOutlineCloseCircle size={20} />
        </button>
      )}
    </div>
  );
};

const Register: React.FC<RegisterProps> = ({ addUser }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    role: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    const missingFields = Object.entries(formData).filter(([_, v]) => !v);
    if (missingFields.length > 0) {
      missingFields.forEach(([key]) => toast.error(`${key} is required`));
      return;
    }

    setLoading(true);

    const newUser: User = {
      id: Date.now(),
      fullName: formData.fullName,
      age: parseInt(formData.age),
      gender: formData.gender,
      role: formData.role,
      email: formData.email,
      password: formData.password,
    };

    addUser(newUser);
    setFormData({ fullName: "", age: "", gender: "", role: "", email: "", password: "" });
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <div className="p-6 rounded-3xl shadow-2xl flex flex-col gap-5 w-full max-w-md mx-auto bg-white text-black">
      <h2 className="text-2xl font-extrabold text-center text-blue-500 tracking-tight">
        Register User
      </h2>
      <p className="text-center text-gray-600 mb-2 text-sm">
        Fill in the details below to add a new user.
      </p>

      {/* Inputs */}
      <InputField
        value={formData.fullName}
        onChange={(val) => handleChange("fullName", val)}
        placeholder="Full Name"
        loading={loading}
      />
      <InputField
        type="number"
        value={formData.age}
        onChange={(val) => handleChange("age", val)}
        placeholder="Age"
        loading={loading}
      />
      <InputField
        type="email"
        value={formData.email}
        onChange={(val) => handleChange("email", val)}
        placeholder="Email"
        loading={loading}
      />
      <InputField
        value={formData.password}
        onChange={(val) => handleChange("password", val)}
        placeholder="Password"
        loading={loading}
        isPassword
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg transition-transform duration-200 hover:scale-105
          ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? "Adding..." : "Register"}
      </button>
    </div>
  );
};

export default Register;
