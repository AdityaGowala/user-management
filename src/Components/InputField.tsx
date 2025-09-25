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

  return (
    <div className="relative w-full">
      <input
        type={isPassword ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled || loading}
        className={`w-full p-4 rounded-2xl border border-white/30 bg-blue-500/90 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 shadow-sm transition-all ${
          disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-500"
        }`}
      />

      {/* Password toggle */}
      {isPassword && !disabled && !loading && (
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
        </button>
      )}

      {/* Clear button */}
      {!isPassword && value && !disabled && !loading && (
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition"
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
    <div
      className="p-6 md:p-10 rounded-3xl flex flex-col gap-5 w-full max-w-xl mx-auto bg-blue-600 shadow-2xl"
      style={{ minHeight: "550px" }}
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white tracking-tight">
        Register User
      </h2>
      <p className="text-center text-white/80 mb-4 text-sm md:text-base">
        Fill in the details below to add a new user.
      </p>

      <div className="flex flex-col gap-4">
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
        <select
          value={formData.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
          disabled={loading}
          className="rounded-2xl p-4 border border-white/30 bg-blue-500/90 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white w-full transition"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <select
          value={formData.role}
          onChange={(e) => handleChange("role", e.target.value)}
          disabled={loading}
          className="rounded-2xl p-4 border border-white/30 bg-blue-500/90 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white w-full transition"
        >
          <option value="">Select Role</option>
          <option value="User">User</option>
          <option value="Employee">Employee</option>
          <option value="Admin">Admin</option>
        </select>
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
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`mt-6 bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 rounded-2xl shadow-lg transition-transform duration-200 hover:scale-105 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Adding..." : "Register"}
      </button>
    </div>
  );
};

export default Register;
