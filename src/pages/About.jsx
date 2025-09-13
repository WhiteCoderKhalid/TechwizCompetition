import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Trophy, Calendar, BookOpen, Lightbulb, Heart, Globe } from 'lucide-react';

const About = () => {
  const eventCategories = [
    { 
      title: 'Technical Events',
      icon: Lightbulb,
      description: 'Innovation meets creativity in our technical competitions',
      events: ['TechFest', 'Hackathons', 'Robotics Competition', 'AI Workshops', 'Coding Marathon'],
      timeline: 'September - November',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Cultural Events',
      icon: Heart,
      description: 'Celebrating arts, music, and cultural diversity',
      events: ['Cultural Night', 'Dance Competition', 'Music Festival', 'Drama Festival', 'Art Exhibition'],
      timeline: 'December - February',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Sports Events',
      icon: Trophy,
      description: 'Promoting fitness and team spirit through competition',
      events: ['Inter-College Tournament', 'Sports Meet', 'Marathon', 'Cricket Championship', 'Basketball League'],
      timeline: 'March - May',
      color: 'from-green-600 to-blue-600'
    },
    {
      title: 'Academic Events',
      icon: BookOpen,
      description: 'Fostering research and academic excellence',
      events: ['Symposium', 'Research Conference', 'Paper Presentations', 'Seminars', 'Workshops'],
      timeline: 'Year Round',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const highlights = [
    { number: '50+', label: 'Annual Events', icon: Calendar },
    { number: '5000+', label: 'Students', icon: Users },
    { number: '100+', label: 'Faculty', icon: GraduationCap },
    { number: '25+', label: 'Departments', icon: Globe }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1200')] opacity-20 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About CampusConnect</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Bridging students through engaging experiences and meaningful connections at our vibrant college community.
          </p>
        </div>
      </div>

      {/* Legacy */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Institution Legacy</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                <strong className="text-blue-600">Aptech Computer   Education</strong> has been a beacon of academic excellence since 1985, located in the heart of the many countries including India and Nigeria.
              </p>
              <p>
                Our sprawling 50-acre campus houses state-of-the-art facilities, modern laboratories, a central library with over 100,000 books, sports complexes, and vibrant student spaces and onlive varsity.
              </p>
              <p>
                With a commitment to holistic education, we believe that events and extracurricular activities are integral to student development and aslo pratical making they ready for work field.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="College Campus"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white shadow-xl">
              <h3 className="text-2xl font-bold">39</h3>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Instuition Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index}>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{highlight.number}</h3>
                  <p className="text-gray-600 font-medium">{highlight.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Event Categories</h2>
            <p className="text-xl text-gray-600">Discover the diverse range of events that make our campus vibrant</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`bg-gradient-to-r ${cat.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-20">
                      <Icon className="h-32 w-32" />
                    </div>
                    <div className="relative z-10">
                      <Icon className="h-12 w-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                      <p className="text-white/90">{cat.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                      <p className="text-blue-600 font-medium">{cat.timeline}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Popular Events</h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.events.map((event, eIdx) => (
                          <span key={eIdx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors">
                            {event}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide holistic education that nurtures intellectual growth, creative expression, and technical development to stand out.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be recognized as a premier educational institution that creates global citizens equipped with knowledge, skills, and values.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the vibrant campus life through our diverse events and activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/events" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 text-center">
              Explore Events
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 transform hover:scale-105 text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;




