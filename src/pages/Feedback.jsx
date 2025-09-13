import React, { useState } from "react";
import {
  MessageSquare,
  Star,
  Send,
  CheckCircle,
  User,
  Calendar,
} from "lucide-react";

// ⭐ Configs (for readability & reuse)
const USER_TYPES = ["Student", "Faculty", "Alumni", "Guest"];
const RECENT_EVENTS = [
  "Cultural Extravaganza",
  "Sports Championship",
  "Entrepreneurship Workshop",
];

// -----------------------------
// ⭐ Small Reusable Components
// -----------------------------

// Star rating component
const StarRating = ({ rating, onRate }) => {
  const ratingLabels = {
    1: "1 -Poor",
    2: "2 -Fair",
    3: "3 -Good",
    4: "4 -Very Good",
    5: "5 -Excellent",
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          type="button"
          onClick={() => onRate(num)}
          className={`transition-colors ${
            num <= rating
              ? "text-yellow-400 hover:text-yellow-500"
              : "text-gray-300 hover:text-gray-400"
          }`}
        >
          <Star
            className={`h-8 w-8 ${num <= rating ? "fill-current" : ""}`}
          />
        </button>
      ))}
      <span className="ml-2 text-sm text-gray-600">{ratingLabels[rating]}</span>
    </div>
  );
};


const InfoBox = ({ icon: Icon, color, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${color}`}
    >
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

// Thank you screen
const ThankYouScreen = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md">
      <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="h-12 w-12 text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
      <p className="text-gray-600 mb-6">
        Your feedback has been submitted. We appreciate your input!
      </p>
      <div className="animate-pulse">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"></div>
      </div>
      <p className="text-sm text-gray-500 mt-4">Redirecting...</p>
    </div>
  </div>
);


const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "Student",
    eventAttended: "",
    rating: 5,
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRating = (star) => {
    setFormData((prev) => ({ ...prev, rating: star }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        userType: "Student",
        eventAttended: "",
        rating: 5,
        comments: "",
      });
    }, 3000);
  };

  if (submitted) return <ThankYouScreen />;

  return (
    <div className="min-h-screen bg-gray-50">
     
      <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-white/20 backdrop-blur-md w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Share Your Feedback
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Help us improve our events by sharing your thoughts and suggestions.
          </p>
        </div>
      </header>

      {/* Feedback Form */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">
              Event Feedback Form
            </h2>
            <p className="text-white/90 mt-2">
              Please take a moment to share your experience with us.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Info */}
              <section className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Information
                </h3>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="userType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    You are a
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {USER_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              {/* Event Info */}
              <section className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                  Event Information
                </h3>

                <div>
                  <label
                    htmlFor="eventAttended"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Event Attended
                  </label>
                  <select
                    id="eventAttended"
                    name="eventAttended"
                    value={formData.eventAttended}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select an event</option>
                    {RECENT_EVENTS.map((evt) => (
                      <option key={evt} value={evt}>
                        {evt}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Overall Rating
                  </label>
                  <StarRating
                    rating={formData.rating}
                    onRate={handleRating}
                  />
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Feedback Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">4.8</div>
                      <div className="text-sm text-gray-600">Avg Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">
                        1,247
                      </div>
                      <div className="text-sm text-gray-600">Reviews</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

           
            <div className="mt-8">
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Additional Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                rows="6"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Write your feedback..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
              >
                <Send className="h-5 w-5" />
                <span>Submit Feedback</span>
              </button>
            </div>
          </form>
        </div>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoBox
            icon={MessageSquare}
            color="bg-blue-100 text-blue-600"
            title="Anonymous Option"
            description="You can also submit feedback without your name."
          />
          <InfoBox
            icon={CheckCircle}
            color="bg-purple-100 text-purple-600"
            title="Quick Response"
            description="We check all feedback within 48 hours and take action."
          />
          <InfoBox
            icon={Star}
            color="bg-green-100 text-green-600"
            title="Continuous Improvement"
            description="Your suggestions shape future events."
          />
        </section>
      </main>
    </div>
  );
};

export default Feedback;

