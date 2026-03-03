import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left */}
      <div className="hidden md:flex flex-col justify-center w-1/2 bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] text-white p-16">
        <h1 className="text-4xl font-bold mb-6">aps</h1>
        <h2 className="text-3xl font-semibold mb-6">
          Expert level Cybersecurity in hours not weeks.
        </h2>
        <ul className="space-y-3 text-gray-300">
          <li>✔ AI powered scanning</li>
          <li>✔ Real-time findings</li>
          <li>✔ Enterprise reporting</li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center justify-center w-full md:w-1/2 bg-gray-100 dark:bg-[#111]">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-[#1A1A1A] p-8 rounded-2xl shadow-lg w-[90%] max-w-md"
        >
          <h3 className="text-2xl font-bold mb-6">Create account</h3>

          <input placeholder="First Name" className="input" />
          <input placeholder="Last Name" className="input mt-3" />
          <input placeholder="Email" className="input mt-3" />
          <input type="password" placeholder="Password" className="input mt-3" />

          <div className="mt-4 flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>I agree to Terms & Conditions</span>
          </div>

          <Button className="w-full mt-6">Create account</Button>

          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <span className="text-[#0CC8A8] cursor-pointer">Log in</span>
          </p>
        </form>
      </div>
    </div>
  );
}
