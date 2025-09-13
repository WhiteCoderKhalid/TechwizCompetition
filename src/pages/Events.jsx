

// import React, { useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search, Filter, Calendar } from "lucide-react";
// import EventCard from "../component/EventCard";
// import eventsData from "../data/events.json";


// const formatDate = (date) => {
//   return new Date(date).toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });
// };

 
// const getCategoryColor = (category) => {
//   const colors = {
//     Technical: "bg-blue-100 text-blue-800 border-blue-200",
//     Cultural: "bg-purple-100 text-purple-800 border-purple-200",
//     Sports: "bg-green-100 text-green-800 border-green-200",
//     Academic: "bg-yellow-100 text-yellow-800 border-yellow-200",
//     Departmental: "bg-orange-100 text-orange-800 border-orange-200",
//   };
//   return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
// };

// // Date helpers
// const isUpcoming = (date) => new Date(date) >= new Date();
// const isPast = (date) => new Date(date) < new Date();

// const Events = () => {
//   const navigate = useNavigate();

//   const [category, setCategory] = useState("All");
//   const [search, setSearch] = useState("");
//   const [activeEvent, setActiveEvent] = useState(null);

//   const categories = [
//     "All",
//     "Technical",
//     "Cultural",
//     "Sports",
//     "Academic",
//     "Departmental",
//   ];

 
//   const events = useMemo(() => {
//     const filtered = eventsData.filter((e) => {
//       const matchesCategory = category === "All" || e.category === category;
//       const matchesSearch =
//         e.title.toLowerCase().includes(search.toLowerCase()) ||
//         e.description.toLowerCase().includes(search.toLowerCase()) ||
//         e.venue.toLowerCase().includes(search.toLowerCase());

//       return matchesCategory && matchesSearch;
//     });

//     return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
//   }, [category, search]);

//   const upcoming = events.filter((e) => isUpcoming(e.date));
//   const past = events.filter((e) => isPast(e.date));

//   const resultText = (() => {
//     if (!events.length) return "";
//     let message = `Showing ${events.length} events`;
//     if (category !== "All") message += ` in ${category}`;
//     if (search) message += ` matching “${search}”`;
//     return message;
//   })();

//   const handleRegister = (event) => {
//     const eligible =
//       event.registrationOpen &&
//       isUpcoming(event.date) &&
//       event.currentParticipants < event.maxParticipants;

//     if (eligible) {
//       navigate(`/contact?event=${encodeURIComponent(event.title)}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
  
//       <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Catalog</h1>
//           <p className="text-xl">
//             Explore our comprehensive collection of campus events
//           </p>
//         </div>
//       </header>

 
//       <div className="bg-white shadow-md sticky top-16 z-40">
//         <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
//           {/* Search box */}
//           <div className="relative flex-1 max-w-md">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search events..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

      
//           <div className="flex items-center space-x-2">
//             <Filter className="h-5 w-5 text-gray-500" />
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             >
//               {categories.map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {resultText && (
//           <div className="max-w-7xl mx-auto px-4 pb-4 text-sm text-gray-600">
//             {resultText}
//           </div>
//         )}
//       </div>

  
//       <main className="max-w-7xl mx-auto px-4 py-8">
       
//         {upcoming.length > 0 && (
//           <section className="mb-12">
//             <h2 className="text-2xl font-bold mb-6">
//               Upcoming Events ({upcoming.length})
//             </h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {upcoming.map((e) => (
//                 <EventCard
//                   key={e.id}
//                   event={e}
//                   onLearnMore={() => setActiveEvent(e)}
//                   onRegister={() => handleRegister(e)}
//                 />
//               ))}
//             </div>
//           </section>
//         )}

//         {past.length > 0 && (
//           <section>
//             <h2 className="text-2xl font-bold mb-6">
//               Past Events ({past.length})
//             </h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {past.map((e) => (
//                 <EventCard
//                   key={e.id}
//                   event={e}
//                   onLearnMore={() => setActiveEvent(e)}
//                 />
//               ))}
//             </div>
//           </section>
//         )}

       
//         {!events.length && (
//           <div className="text-center py-16">
//             <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
//               <Calendar className="h-12 w-12 text-gray-400" />
//             </div>
//             <h3 className="text-2xl font-bold mb-2">
//               No events match your filters
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Try a different search or reset filters.
//             </p>
//             <button
//               onClick={() => {
//                 setCategory("All");
//                 setSearch("");
//               }}
//               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700"
//             >
//               Reset Filters
//             </button>
//           </div>
//         )}
//       </main>

     
//       {activeEvent && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
           
//             <button
//               onClick={() => setActiveEvent(null)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//             >
//               ✕
//             </button>

            
//             <img
//               src={activeEvent.image}
//               alt={activeEvent.title}
//               className="w-full h-56 object-cover rounded-lg mb-4"
//             />

//             <h2 className="text-2xl font-bold mb-4">{activeEvent.title}</h2>
//             <p className="text-gray-600 mb-2">
//               <strong>Date:</strong> {formatDate(activeEvent.date)}
//             </p>
//             <p className="text-gray-600 mb-2">
//               <strong>Venue:</strong> {activeEvent.venue}
//             </p>
//             <p className="text-gray-700 mb-4">{activeEvent.description}</p>

           
//             <div className="flex space-x-4">
//               {activeEvent.registrationOpen && isUpcoming(activeEvent.date) ? (
//                 <button
//                   onClick={() => {
//                     handleRegister(activeEvent);
//                     setActiveEvent(null);
//                   }}
//                   className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700"
//                 >
//                   Register Now
//                 </button>
//               ) : (
//                 <button
//                   className="bg-gray-400 text-white px-5 py-2 rounded-lg font-medium cursor-not-allowed"
//                   disabled
//                 >
//                   Event Closed / Hosted
//                 </button>
//               )}
              
//               <button
//                 onClick={() => setActiveEvent(null)}
//                 className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg font-medium hover:bg-gray-300"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, Calendar } from "lucide-react";
import EventCard from "../component/EventCard";
import eventsData from "../data/events.json";

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const Events = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(null);

  const categories = ["All", "Technical", "Cultural", "Sports", "Academic", "Departmental"];

  // quick filters
  const filtered = eventsData
    .filter((e) => {
      if (category !== "All" && e.category !== category) return false;
      if (
        search &&
        !(
          e.title.toLowerCase().includes(search.toLowerCase()) ||
          e.description.toLowerCase().includes(search.toLowerCase()) ||
          e.venue.toLowerCase().includes(search.toLowerCase())
        )
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const upcoming = filtered.filter((e) => new Date(e.date) >= new Date());
  const past = filtered.filter((e) => new Date(e.date) < new Date());

  const handleRegister = (ev) => {
    if (
      ev.registrationOpen &&
      new Date(ev.date) >= new Date() &&
      ev.currentParticipants < ev.maxParticipants
    ) {
      navigate(`/contact?event=${encodeURIComponent(ev.title)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* header */}
      <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Events</h1>
          <p className="text-lg">Find what’s happening on campus</p>
        </div>
      </header>

      {/* filters */}
      <div className="bg-white shadow sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-500"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* events */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {upcoming.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Upcoming ({upcoming.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((ev) => (
                <EventCard
                  key={ev.id}
                  event={ev}
                  onLearnMore={() => setActive(ev)}
                  onRegister={() => handleRegister(ev)}
                />
              ))}
            </div>
          </section>
        )}

        {past.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Past ({past.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {past.map((ev) => (
                <EventCard
                  key={ev.id}
                  event={ev}
                  onLearnMore={() => setActive(ev)}
                />
              ))}
            </div>
          </section>
        )}

        {!filtered.length && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold">Nothing found</h3>
            <button
              onClick={() => {
                setCategory("All");
                setSearch("");
              }}
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Reset
            </button>
          </div>
        )}
      </main>

      {/* modal */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-5 relative">
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {active.image && (
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-52 object-cover rounded mb-4"
              />
            )}

            <h2 className="text-2xl font-bold mb-3">{active.title}</h2>
            <p className="text-gray-600 mb-1">
              <b>Date:</b> {formatDate(active.date)}
            </p>
            <p className="text-gray-600 mb-1">
              <b>Venue:</b> {active.venue}
            </p>
            <p className="text-gray-700 mb-4">{active.description}</p>

            <div className="flex space-x-3">
              {active.registrationOpen && new Date(active.date) >= new Date() ? (
                <button
                  onClick={() => {
                    handleRegister(active);
                    setActive(null);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Register
                </button>
              ) : (
                <button
                  disabled
                  className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
                >
                  Closed
                </button>
              )}

              <button
                onClick={() => setActive(null)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
