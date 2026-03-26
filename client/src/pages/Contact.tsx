import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const submitInquiry = trpc.inquiry.submit.useMutation({
    onSuccess: (data) => {
      setSubmitStatus({
        type: "success",
        message: data.message,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: "idle" });
      }, 5000);
    },
    onError: (error) => {
      setSubmitStatus({
        type: "error",
        message: error.message || "เกิดข้อผิดพลาดในการส่งข้อมูล",
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: "loading" });
    submitInquiry.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-white shadow-md">
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
            <MessageCircle size={18} />
            <span className="hidden sm:inline">ติดต่อ LINE</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ติดต่อเรา
          </h1>
          <p className="text-xl opacity-90">
            เรายินดีที่จะตอบคำถามและให้คำปรึกษาเกี่ยวกับการหลอมทองและรับซื้อทองคำ
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white p-6 rounded border-l-4 border-secondary shadow-md">
              <div className="flex items-start gap-4">
                <MessageCircle className="text-secondary mt-1 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    LINE
                  </h3>
                  <a
                    href="https://lin.ee/I7SRK0d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline break-all"
                  >
                    https://lin.ee/I7SRK0d
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    ตอบสอบถามได้เร็ว สะดวก ปลอดภัย
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded border-l-4 border-primary shadow-md">
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    โทรศัพท์
                  </h3>
                  <a
                    href="tel:061-479-9906"
                    className="text-primary font-semibold hover:underline text-lg"
                  >
                    061-479-9906
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    เปิดทำการทุกวัน 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded border-l-4 border-secondary shadow-md">
              <div className="flex items-start gap-4">
                <MapPin className="text-secondary mt-1 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    ที่อยู่
                  </h3>
                  <p className="text-foreground font-semibold">
                    ร้านหลอมทองอุดรtk
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    844, 5 หมากแข้ง ตำบลหนองขอนกว้าง เมือง อุดรธานี 41000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold mb-8 text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              ส่งข้อมูลติดต่อ
            </h2>

            {/* Status Messages */}
            {submitStatus.type === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-green-800">สำเร็จ!</h4>
                  <p className="text-green-700 text-sm">{submitStatus.message}</p>
                </div>
              </div>
            )}

            {submitStatus.type === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded flex items-start gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-red-800">เกิดข้อผิดพลาด</h4>
                  <p className="text-red-700 text-sm">{submitStatus.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  ชื่อ <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="กรุณาระบุชื่อของคุณ"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  อีเมล <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  เบอร์โทรศัพท์ <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="061-479-9906"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  หัวข้อ <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="เช่น สอบถามราคาซื้อทอง"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  ข้อความ <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="กรุณาระบุรายละเอียดของคำถามหรือข้อเสนอแนะของคุณ"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus.type === "loading"}
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitStatus.type === "loading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    กำลังส่งข้อมูล...
                  </>
                ) : (
                  <>
                    <Mail size={20} />
                    ส่งข้อมูล
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-gray-600 text-center mt-6">
              เราจะตอบกลับในเร็วๆ นี้ ขอบคุณที่ติดต่อเรา
            </p>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ที่ตั้งร้านหลอมทองอุดรtk
          </h2>
          <div className="rounded overflow-hidden shadow-lg border border-gray-200">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.7936438888196!2d102.81496!3d17.3656305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31237713be6a03d1%3A0xdfa87462cb247162!2z4LiE4Lil4Liy4LmM4Lih4Lil4Liy4LmM4LiX4Liy4Lil4Li04LiZ4Liy!5e0!3m2!1sth!2sth!4v1711425600000"
            ></iframe>
          </div>
        </div>
      </section>

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
                  <a href="/contact" className="hover:text-secondary transition">
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
