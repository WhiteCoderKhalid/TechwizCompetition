import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import {
  Filter,
  Grid,
  Image as ImageIcon,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import galleryData from "../data/gallery.json";


const getCategoryStyle = (category) => {
  switch (category) {
    case "Technical":
      return "bg-blue-100 text-blue-800";
    case "Cultural":
      return "bg-purple-100 text-purple-800";
    case "Sports":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Gallery = () => {
  // filter states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

 
  const [activeImage, setActiveImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);

  // filter options
  const categoryOptions = ["All", "Technical", "Cultural", "Sports"];
  const yearOptions = ["All", "2026", "2025", "2024", "2023"];

  
  const filteredGalleries = useMemo(() => {
    return galleryData.filter((galleryItem) => {
      const matchesCategory =
        selectedCategory === "All" || galleryItem.category === selectedCategory;
      const matchesYear =
        selectedYear === "All" || galleryItem.year.toString() === selectedYear;
      return matchesCategory && matchesYear;
    });
  }, [selectedCategory, selectedYear]);

  
  const totalPhotos = filteredGalleries.reduce(
    (sum, gallery) => sum + gallery.images.length,
    0
  );

  const filterText = [
    selectedCategory !== "All" ? ` from ${selectedCategory}` : "",
    selectedYear !== "All" ? ` in ${selectedYear}` : "",
  ].join("");

 
  const openLightbox = (image, galleryItem) => {
    setActiveImage(image);
    setLightboxImages(galleryItem.images);
    setActiveIndex(
      galleryItem.images.findIndex((img) => img.url === image.url)
    );
  };

  const closeLightbox = () => {
    setActiveImage(null);
    setLightboxImages([]);
    setActiveIndex(0);
  };

  
  const stepImage = (direction) => {
    if (!lightboxImages.length) return;

    const lastIndex = lightboxImages.length - 1;
    let newIndex =
      direction === "prev"
        ? activeIndex > 0
          ? activeIndex - 1
          : lastIndex
        : activeIndex < lastIndex
        ? activeIndex + 1
        : 0;

    setActiveIndex(newIndex);
    setActiveImage(lightboxImages[newIndex]);
  };

 
  const GalleryBlock = ({ galleryItem }) => (
    <div className="mb-12">
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {galleryItem.title}
          </h2>
          <div className="flex items-center space-x-4 mt-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyle(
                galleryItem.category
              )}`}
            >
              {galleryItem.category}
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              {galleryItem.year}
            </div>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <ImageIcon className="h-4 w-4 mr-1" />
          {galleryItem.images.length} pics
        </div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItem.images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg cursor-pointer bg-gray-100"
            onClick={() => openLightbox(image, galleryItem)}
          >
            <div className="aspect-square">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Gallery</h1>
          <p className="text-lg md:text-xl opacity-90">
            Snapshots from campus events and party vibes
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Grid className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filter Gallery</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Categories</option>
                  {categoryOptions
                    .filter((option) => option !== "All")
                    .map((option) => (
                      <option key={option} value={option}>
                        {option} Events
                      </option>
                    ))}
                </select>
              </div>


              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Years</option>
                  {yearOptions
                    .filter((option) => option !== "All")
                    .map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {totalPhotos} photos{filterText}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredGalleries.length > 0 ? (
          filteredGalleries.map((galleryItem) => (
            <GalleryBlock key={galleryItem.id} galleryItem={galleryItem} />
          ))
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <ImageIcon className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No Pictures
            </h3>
            <p className="text-gray-600 mb-6">Try different filters</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedYear("All");
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>


      {activeImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:bg-white/20 p-2 rounded-full transition-colors z-60"
          >
            <X className="h-6 w-6" />
          </button>

          {lightboxImages.length > 1 && (
            <>
              <button
                onClick={() => stepImage("prev")}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={() => stepImage("next")}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          <div className="max-w-5xl max-h-[90vh] p-4">
            <img
              src={activeImage.url}
              alt={activeImage.caption}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">
                {activeImage.caption}
              </p>
              {lightboxImages.length > 1 && (
                <p className="text-white/70 text-sm mt-2">
                  {activeIndex + 1} of {lightboxImages.length}
                </p>
              )}
            </div>
          </div>

        
          {lightboxImages.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-2">
              {lightboxImages
                .slice(Math.max(0, activeIndex - 2), activeIndex + 3)
                .map((thumb, i) => {
                  const realIndex = Math.max(0, activeIndex - 2) + i;
                  return (
                    <button
                      key={realIndex}
                      onClick={() => {
                        setActiveIndex(realIndex);
                        setActiveImage(thumb);
                      }}
                      className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                        realIndex === activeIndex
                          ? "border-white"
                          : "border-transparent opacity-70"
                      }`}
                    >
                      <img
                        src={thumb.url}
                        alt={thumb.caption}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
