import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Design Philosophy: Chairath Gold Style Gallery
 * - Clean, professional gallery layout
 * - Red (#C41E3A) + Gold (#FFD700) + White/Cream
 * - Lightbox modal for viewing full-size images
 * - Category filter for easy navigation
 */

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("ทั้งหมด");

  // Gallery images data
  const galleryItems = [
    {
      id: 1,
      title: "สร้อยคอทองแท่ง",
      category: "สร้อยคอ",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329076488/SMw9bEsfUtm68xLZdEgPgt/product-gold-necklace-KqQsvJGgMFjzuhzAmVVSK9.webp",
      description: "สร้อยคอทองแท่งแท้ 96.5% ดีไซน์สวยงาม",
    },
    {
      id: 2,
      title: "กำไลทองแท่ง",
      category: "กำไล",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329076488/SMw9bEsfUtm68xLZdEgPgt/product-gold-bracelet-Msisp8GvMom45yB8VfSQuY.webp",
      description: "กำไลทองแท่งแท้ ทำงานฝีมือดี",
    },
    {
      id: 3,
      title: "แหวนทองแท่ง",
      category: "แหวน",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329076488/SMw9bEsfUtm68xLZdEgPgt/product-gold-ring-ipRw5u6VF8CZFVy4EmbqLP.webp",
      description: "แหวนทองแท่งแท้ ดีไซน์คลาสสิก",
    },
    {
      id: 4,
      title: "ต่างหูทอง",
      category: "ต่างหู",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329076488/SMw9bEsfUtm68xLZdEgPgt/product-gold-earring-UN8xajBiDx8LrnjHkAjkiq.webp",
      description: "ต่างหูทองแท่งแท้ ดีไซน์สวยงาม",
    },
    {
      id: 5,
      title: "ชุดของขวัญทอง",
      category: "ชุดของขวัญ",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329076488/SMw9bEsfUtm68xLZdEgPgt/product-gold-set-MjTjD3DKZbuWDbs6Sv3fkL.webp",
      description: "ชุดของขวัญทองแท่งแท้ สวยงามพร้อมกล่อง",
    },
    {
      id: 6,
      title: "สร้อยคอทองแท่ง 2",
      category: "สร้อยคอ",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329076488/SMw9bEsfUtm68xLZdEgPgt/product-gold-necklace-KqQsvJGgMFjzuhzAmVVSK9.webp",
      description: "สร้อยคอทองแท่งแท้ ดีไซน์เรียบหรู",
    },
    {
      id: 7,
      title: "กำไลทองแท่ง 2",
      category: "กำไล",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329076488/SMw9bEsfUtm68xLZdEgPgt/product-gold-bracelet-Msisp8GvMom45yB8VfSQuY.webp",
      description: "กำไลทองแท่งแท้ ทำงานฝีมือดี",
    },
    {
      id: 8,
      title: "แหวนทองแท่ง 2",
      category: "แหวน",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329076488/SMw9bEsfUtm68xLZdEgPgt/product-gold-ring-ipRw5u6VF8CZFVy4EmbqLP.webp",
      description: "แหวนทองแท่งแท้ ดีไซน์เรียบหรู",
    },
  ];

  const categories = ["ทั้งหมด", "สร้อยคอ", "กำไล", "แหวน", "ต่างหู", "ชุดของขวัญ"];

  // Filter images based on selected category
  const filteredItems = activeCategory === "ทั้งหมด"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Get current and adjacent images for lightbox navigation
  const currentImageIndex = selectedImage !== null ? filteredItems.findIndex(item => item.id === selectedImage) : -1;

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredItems[currentImageIndex - 1].id);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentImageIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-primary text-lg">
              TK
            </div>
            <h1 className="text-xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              ร้านหลอมทองอุดรtk
            </h1>
          </div>
          <a
            href="https://lin.ee/I7SRK0d"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-primary font-bold py-2 px-4 rounded flex items-center gap-2 hover:bg-yellow-600 transition"
          >
            ติดต่อ LINE
          </a>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            แกลเลอรีสินค้า
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            ดูรูปภาพสินค้าทองแท่งแท้ทั้งหมดของร้านหลอมทองอุดรtk
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded font-semibold transition ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-foreground hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition cursor-pointer group"
              >
                <div className="relative overflow-hidden h-64 bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                    <div className="text-white font-bold opacity-0 group-hover:opacity-100 transition">
                      ดูรูปภาพ
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {item.category}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">ไม่พบสินค้าในหมวดหมู่นี้</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <div className="bg-white rounded overflow-hidden">
              <img
                src={filteredItems[currentImageIndex]?.image}
                alt={filteredItems[currentImageIndex]?.title}
                className="w-full h-auto max-h-[70vh] object-cover"
              />

              {/* Image Info */}
              <div className="p-6 bg-white">
                <h2 className="text-2xl font-bold mb-2 text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {filteredItems[currentImageIndex]?.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {filteredItems[currentImageIndex]?.description}
                </p>
                <a
                  href="https://lin.ee/I7SRK0d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white font-bold py-2 px-6 rounded hover:bg-red-700 transition"
                >
                  สอบถามสินค้านี้
                </a>
              </div>
            </div>

            {/* Navigation Buttons */}
            {currentImageIndex > 0 && (
              <button
                onClick={handlePrevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-gray-300 transition"
              >
                <ChevronLeft size={40} />
              </button>
            )}

            {currentImageIndex < filteredItems.length - 1 && (
              <button
                onClick={handleNextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-gray-300 transition"
              >
                <ChevronRight size={40} />
              </button>
            )}

            {/* Image Counter */}
            <div className="text-center text-white mt-4">
              <p className="text-sm">
                {currentImageIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                ร้านหลอมทองอุดรtk
              </h4>
              <p className="opacity-90 text-sm">
                หลอมทองมาตรฐานโรงงาน ราคาสูงที่สุด ตรวจสอบฟรี
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>ลิงก์ด่วน</h4>
              <ul className="space-y-2 opacity-90 text-sm">
                <li>
                  <a href="/" className="hover:text-secondary transition">
                    หน้าแรก
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:text-secondary transition">
                    แกลเลอรี
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-secondary transition">
                    เกี่ยวกับเรา
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-secondary transition">
                    ติดต่อเรา
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>ติดตามเรา</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61588121406049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary text-primary rounded flex items-center justify-center hover:bg-yellow-600 transition font-bold"
                >
                  f
                </a>
                <a
                  href="https://lin.ee/I7SRK0d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary text-primary rounded flex items-center justify-center hover:bg-yellow-600 transition font-bold"
                >
                  L
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center opacity-75 text-sm">
            <p>&copy; 2026 ร้านหลอมทองอุดรtk. สงวนสิทธิ์ทั้งหมด</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
