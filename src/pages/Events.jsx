import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Users,
  SortAsc,
  Grid,
  List,
} from "lucide-react";
import EventCard from "../component/EventCard";
import eventsData from "../data/events.json";


const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const getCategoryColor = (category) => {
  const colors = {
    Technical: "bg-blue-100 text-blue-800 border-blue-200",
    Cultural: "bg-purple-100 text-purple-800 border-purple-200",
    Sports: "bg-green-100 text-green-800 border-green-200",
    Academic: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Departmental: "bg-orange-100 text-orange-800 border-orange-200",
  };
  return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
};

const isUpcoming = (date) => new Date(date) >= new Date();
const isPast = (date) => new Date(date) < new Date();


const Events = () => {
  const navigate = useNavigate();


  const [category, setCategory] = useState("All");
  const [sortField, setSortField] = useState("date");
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [activeEvent, setActiveEvent] = useState(null);

  const categories = [
    "All",
    "Technical",
    "Cultural",
    "Sports",
    "Academic",
    "Departmental",
  ];

  const events = useMemo(() => {
    const filtered = eventsData.filter((e) => {
      const byCategory = category === "All" || e.category === category;
      const bySearch =
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.description.toLowerCase().includes(search.toLowerCase()) ||
        e.venue.toLowerCase().includes(search.toLowerCase());

      return byCategory && bySearch;
    });

    return filtered.sort((a, b) => {
      if (sortField === "date") return new Date(a.date) - new Date(b.date);
      if (sortField === "name") return a.title.localeCompare(b.title);
      if (sortField === "category") return a.category.localeCompare(b.category);
      return 0;
    });
  }, [category, search, sortField]);

  const upcoming = events.filter((e) => isUpcoming(e.date));
  const past = events.filter((e) => isPast(e.date));

  const resultText = (() => {
    if (!events.length) return "";
    let msg = `Showing ${events.length} events`;
    if (category !== "All") msg += ` in ${category}`;
    if (search) msg += ` matching “${search}”`;
    return msg;
  })();

 
  const handleRegister = (event) => {
    const canRegister =
      event.registrationOpen &&
      isUpcoming(event.date) &&
      event.currentParticipants < event.maxParticipants;

    if (canRegister) {
      navigate(`/contact?event=${encodeURIComponent(event.title)}`);
    }
  };

 
  const EventListView = ({ event }) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex gap-6">
  
      <div className="w-48 h-32 flex-shrink-0">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

 
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition">
            {event.title}
          </h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
              event.category
            )}`}
          >
            {event.category}
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

        <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-green-500" />
            {event.time}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-red-500" />
            {event.venue}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-1" />
            {event.currentParticipants} / {event.maxParticipants} participants
          </div>
          <button
            onClick={() => setActiveEvent(event)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      
      <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Catalog</h1>
          <p className="text-xl">
            Explore our comprehensive collection of campus events
          </p>
        </div>
      </header>

      {/* 🎛️ Filters */}
      <div className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

      
          <div className="flex items-center gap-4">
          
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

          
            <div className="flex items-center space-x-2">
              <SortAsc className="h-5 w-5 text-gray-500" />
              <select
                value={sortField}
                onChange={(e) => setSortField(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="date">Sort by Date</option>
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>

            <div className="flex items-center space-x-1 border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setView("grid")}
                className={`p-2 rounded ${
                  view === "grid"
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 rounded ${
                  view === "list"
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {resultText && (
          <div className="max-w-7xl mx-auto px-4 pb-4 text-sm text-gray-600">
            {resultText}
          </div>
        )}
      </div>

      
      <main className="max-w-7xl mx-auto px-4 py-8">
       
        {upcoming.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Upcoming Events ({upcoming.length})
            </h2>
            <div
              className={
                view === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              }
            >
              {upcoming.map((e) =>
                view === "grid" ? (
                  <EventCard
                    key={e.id}
                    event={e}
                    onLearnMore={() => setActiveEvent(e)}
                  />
                ) : (
                  <EventListView key={e.id} event={e} />
                )
              )}
            </div>
          </section>
        )}

      
        {past.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Past Events ({past.length})
            </h2>
            <div
              className={
                view === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              }
            >
              {past.map((e) =>
                view === "grid" ? (
                  <EventCard
                    key={e.id}
                    event={e}
                    onLearnMore={() => setActiveEvent(e)}
                  />
                ) : (
                  <EventListView key={e.id} event={e} />
                )
              )}
            </div>
          </section>
        )}

      
        {!events.length && (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">
              No events match your filters
            </h3>
            <p className="text-gray-600 mb-6">
              Try a different search or reset filters.
            </p>
            <button
              onClick={() => {
                setCategory("All");
                setSearch("");
                setSortField("date");
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      
      {activeEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="relative">
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setActiveEvent(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {activeEvent.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {activeEvent.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Event Details
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      {formatDate(activeEvent.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-green-500" />
                      {activeEvent.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-red-500" />
                      {activeEvent.venue}
                    </div>
                  </div>
                </div>

              
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Registration
                  </h4>
                  <div className="text-sm text-gray-600">
                    <p>
                      Status:{" "}
                      {activeEvent.registrationOpen ? "Open" : "Closed"}
                    </p>
                    <p>
                      Participants: {activeEvent.currentParticipants} /{" "}
                      {activeEvent.maxParticipants}
                    </p>
                  </div>
                </div>
              </div>

          
              <div className="mt-6 flex space-x-4">
                <button
                  onClick={() => handleRegister(activeEvent)}
                  disabled={
                    !activeEvent.registrationOpen ||
                    activeEvent.currentParticipants >=
                      activeEvent.maxParticipants ||
                    isPast(activeEvent.date)
                  }
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition
                    ${
                      activeEvent.registrationOpen &&
                      isUpcoming(activeEvent.date) &&
                      activeEvent.currentParticipants <
                        activeEvent.maxParticipants
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  {activeEvent.registrationOpen
                    ? isPast(activeEvent.date)
                      ? "Event Ended"
                      : activeEvent.currentParticipants >=
                        activeEvent.maxParticipants
                      ? "No slots left"
                      : "Register Now"
                    : "Registration Closed"}
                </button>

                <button
                  onClick={() => setActiveEvent(null)}
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

export default Events;
