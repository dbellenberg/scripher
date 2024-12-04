import { SignInButton, SignUpButton, useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LandingPage = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Scripher</h1>
          <p className="text-xl text-gray-300 mb-8">
            Your secure platform for seamless collaboration and productivity
          </p>
          <div className="space-x-4">
            <SignUpButton mode="modal">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                Get Started
              </button>
            </SignUpButton>
            <SignInButton mode="modal">
              <button className="bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-bold py-2 px-6 rounded-lg">
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Secure</h3>
            <p className="text-gray-300">
              Enterprise-grade security for your data and communications
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Collaborative</h3>
            <p className="text-gray-300">
              Work together seamlessly with your team in real-time
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Intuitive</h3>
            <p className="text-gray-300">
              User-friendly interface designed for productivity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 