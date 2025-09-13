import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import contactsData from "../data/contact.json";


const ContactCard = ({ contact }) => (
  <div className="p-4 border rounded-lg bg-white text-center shadow-sm">
    <img
      src={contact.image}
      alt={contact.name}
      className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
    />
    <h3 className="text-lg font-semibold">{contact.name}</h3>
    <p className="text-sm text-gray-600">{contact.designation}</p>
    <p className="text-sm text-gray-500">{contact.department}</p>

    <div className="mt-3 space-y-1 text-sm">
      <a href={`tel:${contact.phone}`} className="block text-blue-600">
        {contact.phone}
      </a>
      <a href={`mailto:${contact.email}`} className="block text-blue-600">
        {contact.email}
      </a>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <header className="bg-blue-900 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Get in Touch</h1>
          <p className="mt-2 text-base">
            Have questions about our events or services? We’d love to hear from
            you.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
       
        <div className="lg:col-span-2 space-y-8">
          {/* Information side */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white border rounded-lg text-center">
              <MapPin className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <h3 className="font-semibold">Our Office</h3>
              <p className="text-sm text-gray-600">
              22 Quarry Road, Old Savannah Bank Building,
              </p>
            </div>
            <div className="p-4 bg-white border rounded-lg text-center">
              <Phone className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold">Call</h3>
              <p className="text-sm text-gray-600">
                +234 801 234 5678 <br /> +234 809 876 5432
              </p>
            </div>
            <div className="p-4 bg-white border rounded-lg text-center">
              <Clock className="h-6 w-6 mx-auto mb-2 text-purple-600" />
              <h3 className="font-semibold">Hours</h3>
              <p className="text-sm text-gray-600">
                Mon–Fri: 9am – 5pm <br /> Sat: 10am – 2pm
              </p>
            </div>
          </section>

         
          <section>
            <h2 className="text-xl font-bold mb-4">Event Coordinators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactsData.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
            </div>
          </section>

        
          <section className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-bold mb-3">We Can Help With:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Registration and sign-ups</li>
                <li>Event schedule</li>
                <li>Payment questions</li>
                <li>Guidelines for participants</li>
              </ul>
              <ul className="list-disc list-inside space-y-1">
                <li>Venue booking</li>
                <li>Technical setup</li>
                <li>Sponsorship</li>
                <li>Partnership ideas</li>
              </ul>
            </div>
          </section>
        </div>

        
        <aside className="space-y-8">
          
          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="p-4 bg-blue-600 text-white">
              <h3 className="font-semibold">Find Us</h3>
              <p className="text-sm">Aptech Center, Abeokuta</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.3493737733736!2d3.3247888!3d7.136228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4c6fc3130c2b%3A0x85cfc1734f8026f5!2sAptech!5e0!3m2!1sen!2sng!4v1694452200000!5m2!1sen!2sng"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="w-full"
            />
          </div>

          <div className="bg-white border rounded-lg p-6 text-center">
            <Phone className="h-8 w-8 mx-auto mb-3 text-red-600" />
            <h3 className="font-semibold">Emergency Contact</h3>
            <p className="text-sm text-gray-600 mb-3">
              For urgent issues during events, please call:
            </p>
            <a
              href="tel:+2348012345678"
              className="inline-block bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Call Now
            </a>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Contact;




//done