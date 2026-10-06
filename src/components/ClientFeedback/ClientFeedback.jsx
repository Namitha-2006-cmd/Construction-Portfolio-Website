
import { useState } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
  { id: 1, thumbnail: "/Images/SB Logo.png", video: "/Images/video-1.mp4"},
  { id: 2, thumbnail: "/Images/SB Logo.png",video: "/Images/video-1.mp4" },
  { id: 3, thumbnail: "/Images/SB Logo.png",video: "/Images/video-1.mp4" },
  { id: 4, thumbnail: "/Images/SB Logo.png", video: "/Images/video-1.mp4" },
  { id: 5, thumbnail: "/Images/SB Logo.png", video: "/Images/video-1.mp4" },
];

const VISIBLE = 3;

const ClientFeedback = () => {
  const [index, setIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  const next = () => {
    if (index < videos.length - VISIBLE) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <>
      {/* SECTION */}
      <section className="py-20 bg-white relative" style={{ fontFamily: "'Dancing Script', cursive" }}>
        <h2 className="text-center text-4xl text-yellow-500 font-dancing mb-12">
          Client Satisfaction Story
        </h2>

        <div className="relative max-w-6xl mx-auto px-6 overflow-hidden">
          {/* SLIDER */}
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * (100 / VISIBLE)}%)`,
            }}
          >
            {videos.map((item) => (
              <div
                key={item.id}
                className="min-w-[33.333%] cursor-pointer"
                onClick={() => setActiveVideo(item.video)}
              >
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt="Client Feedback"
                    className="w-full h-56 object-cover rounded-lg shadow"
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 p-4 rounded-full">
                      <FaPlay className="text-orange-500 text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full"
          >
            <FaChevronLeft />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-3xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ClientFeedback;
