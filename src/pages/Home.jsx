import React from "react";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  MapPin,
} from "lucide-react";

import EventCard from "../component/EventCard";
import bannersData from "../data/banner.json";
import eventsData from "../data/events.json";


const parseTimeToTimestamp = (dateStr, timeStr) => {
  if (!dateStr) return Date.now();
  const [y, m, d] = dateStr.split("-").map((n) => parseInt(n, 10));
  if (!y || !m || !d) return Date.now();

  const time = (timeStr || "").trim();
  const match = time.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/i);

  let hours = 0,
    minutes = 0;

  if (match) {
    hours = parseInt(match[1], 10);
    minutes = match[2] ? parseInt(match[2], 10) : 0;
    const ampm = match[3]?.toUpperCase();
    if (ampm === "PM" && hours !== 12) hours += 12;
    if (ampm === "AM" && hours === 12) hours = 0;
  }

  return new Date(y, m - 1, d, hours, minutes).getTime();
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);

  
  const banners = useMemo(() => bannersData, []);
  const upcomingEvents = useMemo(() => {
    return eventsData
      .map((ev) => ({ ...ev, timestamp: parseTimeToTimestamp(ev.date, ev.time) }))
      .filter((ev) => (ev.timestamp ?? 0) >= Date.now())
      .sort((a, b) => (a.timestamp ?? 0) - (b.timestamp ?? 0))
      .slice(0, 3);
  }, []);

  const nextEvent = upcomingEvents[0] ?? null;

 
  useEffect(() => {
    if (!banners.length) return;
    const intervalId = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % banners.length),
      5000
    );
    return () => clearInterval(intervalId);
  }, [banners.length]);

  const handleLearnMore = (event) =>
    setSelectedEvent({ ...event, timestamp: parseTimeToTimestamp(event.date, event.time) });

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + banners.length) % banners.length);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    {banner.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8">{banner.subtitle}</p>
                  <Link
                    to={banner.ctaLink}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    {banner.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentSlide ? "bg-white" : "bg-white/50"
              } transition`}
            />
          ))}
        </div>
      </section>
      {nextEvent && (
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-16 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Next Event</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              {nextEvent.title}
            </h3>
            <Link
              to="/events"
              className="inline-flex items-center mt-8 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition transform hover:scale-105"
            >
              View Event Details
            </Link>
          </div>
        </section>
      )}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Calendar, label: "Annual Events", value: "50+", color: "from-blue-600 to-purple-600" },
            { icon: Users, label: "Active Students", value: "5000+", color: "from-green-600 to-blue-600" },
            { icon: TrendingUp, label: "Satisfaction Rate", value: "95%", color: "from-purple-600 to-pink-600" },
          ].map((stat, i) => (
            <div key={i}>
              <div
                className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss out on these exciting opportunities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} onLearnMore={handleLearnMore} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Image */}
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedEvent.title}</h3>
              <p className="text-gray-600 mb-6">{selectedEvent.longDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Event Info */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Event Details</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      {new Date(selectedEvent.timestamp ?? Date.now()).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-green-500" />
                      {selectedEvent.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-red-500" />
                      {selectedEvent.venue}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Registration</h4>
                  <div className="text-sm text-gray-600">
                    <p>Status: {selectedEvent.registrationOpen ? "Open" : "Closed"}</p>
                    <p>
                      Participants: {selectedEvent.currentParticipants ?? 0} /{" "}
                      {selectedEvent.maxParticipants ?? "—"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition">
                  Register Now
                </button>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
