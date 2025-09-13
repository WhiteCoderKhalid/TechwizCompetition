import React from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

function EventCard ({ event, onLearnMore })  {
 
  function formatDate (dateString) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

 
  function getCategoryStyle  (category) {
    const styles = {
      Technical: 'bg-blue-100 text-blue-800 border-blue-200',
      Cultural: 'bg-purple-100 text-purple-800 border-purple-200',
      Sports: 'bg-green-100 text-green-800 border-green-200',
      Academic: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      Departmental: 'bg-orange-100 text-orange-800 border-orange-200',
    };
    return styles[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  
  const participationPercentage = (event.currentParticipants / event.maxParticipants) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryStyle(event.category)}`}>
            {event.category}
          </span>
        </div>
        {event.registrationOpen && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
              Open
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {event.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-2 text-green-500" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2 text-red-500" />
            {event.venue}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
            <span className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              Participants
            </span>
            <span>{event.currentParticipants} / {event.maxParticipants}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                participationPercentage > 80 ? 'bg-red-500' :
                participationPercentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${participationPercentage}%` }}
            ></div>
          </div>
        </div>

        <button
          onClick={() => onLearnMore(event)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
        >
          <span>Learn More</span>
          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default EventCard;
