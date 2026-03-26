import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  Settings,
  MessageSquare,
  Shield,
  Gem,
  Scale,
  Crown,
  Coins,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { useState } from "react";

const LINE_URL = "https://lin.ee/I7SRK0d";
const LINE_ID = "@TK5577";
const PHONE = "061-479-9906";
const MAPS_URL = "https://maps.app.goo.gl/3jXYQ3JDpPcXbCee9?g_st=ic";
const FB_URL = "https://www.facebook.com/profile.php?id=61588121406049";

const services = [
  {
    icon: Crown,
    title: "รับซื้อทองเค",
    description: "8K 9K 14K 18K 20K 22K 24K ทุกเปอร์เซ็นต์",
  },
  {
    icon: Gem,
    title: "ทองอิตาลี / ทองต่างประเทศ",
    description: "ทองเก่า ทองชำรุด ทอง 90 รับซื้อทุกประเภท",
  },
  {
    icon: Scale,
    title: "ทอง 80-99.9%",
    description: "ทอง 80-90% ทอง 96.5% ทอง 99.9% ให้ราคาสูง",
  },
  {
    icon: Shield,
    title: "พระทองคำ / กรอบพระทอง",
    description: "ให้ราคาสูง รับซื้อทุกรูปแบบ",
  },
  {
    icon: Coins,
    title: "รับซื้อเงิน",
    description: "เงิน 92.5% และเงิน 100% ราคายุติธรรม",
  },
  {
    icon: Award,
    title: "รับซื้อนาก",
    description: "นากทุกชนิด เข็มขัดนากเก่า ให้ราคาดี",
  },
  {
    icon: Gem,
    title: "แหวนเพชร / เครื่องเพชร",
    description: "รับซื้อเครื่องเพชรทุกชนิด ตีราคาให้สูงสุด",
  },
  {
    icon: CheckCircle,
    title: "ตรวจเช็คเปอร์เซ็นต์",
    description: "ทอง/เงิน/นาค จุดละ 50 บาท พร้อมใบเซอร์",
  },
];

const gallery = [
  {
    image: "/gallery-real-1.png",
    caption: "ลูกค้ารับเงินสด 1xx,xxx แสนกว่าบาท",
    tag: "ทองคำ",
  },
  {
    image: "/gallery-real-2.png",
    caption: "ลูกค้ารับเงินสด 200,000+ บาท",
    tag: "เครื่องประดับ",
  },
  {
    image: "/gallery-real-3.png",
    caption: "เศษเล็กๆ แค่นี้ รับไปเกือบ 10,000 บาท",
    tag: "เศษทอง",
  },
  {
    image: "/gallery-real-4.png",
    caption: "ลูกค้ารับเงินสด หนึ่งล้านบาท",
    tag: "ทองแท่ง",
  },
  {
    image: "/gallery-real-5.png",
    caption: "เข็มขัดนาก สองหมื่นกว่าบาท",
    tag: "นาก",
  },
  {
    image: "/gallery-real-6.png",
    caption: "ทองแท่ง 1xx,xxx แสนกว่าบาท",
    tag: "ทองแท่ง",
  },
];

const steps = [
  {
    step: 1,
    title: "ส่งรูปหรือมาที่ร้าน",
    description: "ทักไลน์ส่งรูป หรือนำทองมาที่ร้านได้เลย",
  },
  {
    step: 2,
    title: "ตรวจเช็คเปอร์เซ็นต์ฟรี",
    description: "ทีมงานตรวจความบริสุทธิ์และชั่งน้ำหนัก",
  },
  {
    step: 3,
    title: "เสนอราคาสูงสุด",
    description: "บวกจากราคาสมาคม +1,800 บาท ไปเลย",
  },
  {
    step: 4,
    title: "รับเงินสดทันที",
    description: "จ่ายเงินสดทันที ไม่ต้องรอ ไม่ต้องต่อคิว",
  },
];

const features = [
  {
    icon: DollarSign,
    title: "ราคาสูงสุด",
    description: "99.99% บวกจากราคาทองแท่งสมาคม +1,800 บาท ไปเลย",
  },
  {
    icon: CheckCircle,
    title: "เช็คฟรี ปรึกษาฟรี",
    description: "ตรวจเช็คเปอร์เซ็นต์ทอง เงิน นาค ไม่มีค่าใช้จ่าย",
  },
  {
    icon: Users,
    title: "ไม่ต้องรอคิว",
    description: "ทำงานเป็นทีม บริการรวดเร็ว ไม่ต้องต่อคิวรอนาน",
  },
  {
    icon: Shield,
    title: "ซื้อจริง คุณภาพ",
    description: "มีหน้าร้านจริง เปิดมานาน ลูกค้าจริง ไม่หลอกลวง",
  },
];

export default function Home() {
  let { user } = useAuth();
  const [hoveredGallery, setHoveredGallery] = useState<number | null>(null);
  const gold3DStyle = {
    background:
      "linear-gradient(180deg, #ffe88c 0%, #ffd447 28%, #f3b800 55%, #c98a00 100%)",
    boxShadow:
      "0 10px 22px rgba(90,45,0,0.35), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -3px 0 rgba(130,80,0,0.45), 0 0 16px rgba(255,215,0,0.45)",
    textShadow: "0 1px 0 rgba(255,250,220,0.75), 0 2px 3px rgba(95,50,0,0.35)",
  } as const;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 text-white shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#a30000] via-[#de0a0a] to-[#8f0000]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="header-neon-sweep" />
        </div>
        <div className="container relative z-10 mx-auto px-4 flex justify-between items-center py-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-secondary shadow-sm">
              <img
                src="/logo-tk.png"
                alt="โลโก้ร้านหลอมทองอุดร TK"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg font-extrabold leading-tight header-brand-title brand-gold-title">
                ร้านหลอมทองอุดร TK
              </h1>
              <p className="text-xs opacity-90 hidden sm:block header-brand-subtitle">
                รับซื้อทอง เงิน นาค เพชร ราคาสูงสุด
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="hidden md:flex items-center gap-2 text-base font-bold hover:text-secondary transition"
            >
              <Phone size={18} />
              <span className="header-phone-text">{PHONE}</span>
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-extrabold py-2.5 px-5 rounded-lg flex items-center gap-2 hover:brightness-110 transition text-sm md:text-base border border-yellow-200/60"
              style={gold3DStyle}
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">LINE {LINE_ID}</span>
              <span className="sm:hidden">LINE</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-red-600 to-red-800">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-brand-banner.png')" }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left - Text */}
            <div className="text-white order-2 md:order-1">
              <div className="inline-block bg-secondary/20 border border-secondary/40 rounded-full px-4 py-1.5 mb-6">
                <span className="text-secondary font-semibold text-sm hero-open-badge">
                  เปิดให้บริการแล้ว 09:00-17:00 น.
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight hero-main-title">
                บวกจากราคาสมาคม
              </h2>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 hero-main-highlight">
                +1,800 บาท
              </p>

              <ul className="space-y-3 mb-8 text-base md:text-lg">
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="hero-list-text">เช็คฟรี ปรึกษาฟรี ประเมินราคาฟรี</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="hero-list-text">ไม่มีค่าใช้จ่าย ไม่ต้องต่อคิวรอนาน</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="hero-list-text">รับซื้อทอง เงิน นาค เพชร ทุกประเภท</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="hero-list-text">มีหน้าร้านจริง เปิดมานาน ลูกค้าจริง</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => {
                    e.preventDefault();
                    window.open(LINE_URL, "_blank", "noopener,noreferrer");
                  }}
                  className="text-primary font-extrabold py-3.5 px-7 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition text-lg border border-yellow-200/60"
                  style={gold3DStyle}
                >
                  <MessageCircle size={22} />
                  <span>ส่งรูปเช็คราคาเลย</span>
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="text-white font-bold py-3.5 px-7 rounded-lg flex items-center justify-center gap-2 transition text-lg border border-white/45 hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.14) 48%, rgba(255,255,255,0.08) 100%)",
                    boxShadow:
                      "0 10px 22px rgba(40, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -2px 0 rgba(120, 0, 0, 0.25)",
                  }}
                >
                  <Phone size={22} />
                  <span>{PHONE}</span>
                </a>
              </div>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-secondary text-base md:text-lg font-semibold hover:underline hero-line-link"
              >
                <MessageCircle size={20} />
                LINE ID: {LINE_ID}
              </a>
            </div>

            {/* Right - Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="rounded-3xl p-2 border-2 border-secondary/70 shadow-[0_0_0_3px_rgba(255,215,0,0.22)] bg-white/10 backdrop-blur-sm">
                  <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/30">
                    <img
                    src="/hero-price-card.png"
                      alt="ร้านหลอมทองอุดร TK"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div
                  className="absolute -bottom-4 -right-4 text-primary font-extrabold py-3 px-5 rounded-xl text-sm md:text-base border border-yellow-200/60"
                  style={gold3DStyle}
                >
                  <DollarSign className="inline -mt-0.5" size={18} /> ราคาสูงสุดในอุดรธานี
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Social Proof */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 section-title-3d">
              ผลงานจริง ลูกค้าจริง
            </h2>
            <p className="text-gray-700 text-lg section-subtitle-3d">
              ขอแสดงความยินดีกับลูกค้าทุกท่าน ลูกค้ารับเงินสดทันที
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredGallery(idx)}
                onMouseLeave={() => setHoveredGallery(null)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${hoveredGallery === idx ? "opacity-100" : "opacity-70"}`} />

                <div className="absolute top-3 left-3">
                  <span className="bg-secondary text-primary font-bold text-xs px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-lg mb-2">
                    {item.caption}
                  </p>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-secondary text-sm font-semibold hover:underline"
                  >
                    <MessageCircle size={14} />
                    สอบถามราคาทันที
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary/10 border-y border-secondary/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-semibold text-primary">
            <span className="flex items-center gap-2 trust-pill-text">
              <Shield size={18} className="text-secondary" /> ซื้อจริง ไม่หลอกลวง
            </span>
            <span className="flex items-center gap-2 trust-pill-text">
              <MapPin size={18} className="text-secondary" /> มีหน้าร้านจริง
            </span>
            <span className="flex items-center gap-2 trust-pill-text">
              <Users size={18} className="text-secondary" /> ลูกค้าจริงมากมาย
            </span>
            <span className="flex items-center gap-2 trust-pill-text">
              <Clock size={18} className="text-secondary" /> เปิดมานาน
            </span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/services-bg.png')" }}
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-3 text-white"
              style={{
                textShadow:
                  "0 1px 0 rgba(255,255,255,0.92), 0 2px 0 rgba(120,0,0,0.72), 0 6px 14px rgba(0,0,0,0.58)",
              }}
            >
              บริการของเรา
            </h2>
            <p
              className="text-white/95 text-lg max-w-xl mx-auto font-semibold"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.65)" }}
            >
              รับซื้อทองคำ เงิน นาค เพชร ทุกประเภท ให้ราคาสูงสุด
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 border border-white/55"
                  style={{
                    background:
                      "linear-gradient(165deg, rgba(35,0,0,0.52) 0%, rgba(55,0,0,0.36) 45%, rgba(95,10,10,0.46) 100%)",
                    boxShadow:
                      "0 12px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35), 0 0 16px rgba(255,215,0,0.15)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(255,245,176,0.88), rgba(255,215,64,0.7) 55%, rgba(255,170,0,0.55))",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -2px 0 rgba(176,104,0,0.25), 0 0 20px rgba(255,225,90,0.85), 0 0 34px rgba(255,205,0,0.45)",
                    }}
                  >
                    <Icon
                      size={28}
                      className="text-primary transition-colors group-hover:text-red-700"
                      style={{ filter: "drop-shadow(0 2px 3px rgba(120,0,0,0.35))" }}
                    />
                  </div>
                  <h3
                    className="text-lg font-bold text-secondary mb-2"
                    style={{
                      textShadow: "0 2px 6px rgba(0,0,0,0.55)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-white text-sm leading-relaxed font-medium"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-extrabold py-3.5 px-10 rounded-xl hover:scale-[1.03] transition-all duration-300 text-lg border border-yellow-200/70"
              style={gold3DStyle}
            >
              <MessageCircle size={20} />
              สอบถามราคาทันที
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-primary mb-3 why-title-neon"
              style={{
                textShadow:
                  "0 1px 0 rgba(255,255,255,0.85), 0 3px 0 rgba(140,0,0,0.28), 0 8px 18px rgba(130,0,0,0.35)",
              }}
            >
              ทำไมต้องเลือกร้านหลอมทองอุดร TK
            </h2>
            <p
              className="text-gray-700 text-lg font-semibold why-subtitle-glow"
              style={{
                textShadow:
                  "0 1px 0 rgba(255,255,255,0.7), 0 2px 8px rgba(120,0,0,0.25)",
              }}
            >
              ทองจะขึ้นหรือลง ร้านหลอมทอง TK ไม่หวั่นไหว
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-7 shadow-md border-b-4 border-secondary hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-5">
                    <Icon size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-16 md:py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/steps-bg-red-wave.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-red-700/45 to-red-900/50" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 section-title-3d-light">
              ขั้นตอนง่ายๆ 4 ขั้นตอน
            </h2>
            <p className="text-white/90 text-lg section-subtitle-3d-light">
              รวดเร็ว สะดวก ได้ราคาดี รับเงินสดทันที
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-secondary text-primary rounded-full flex items-center justify-center font-bold text-3xl mb-5 shadow-lg border-4 border-secondary/30">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 step-title-3d">{item.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed step-desc-3d">
                    {item.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[65%] w-[35%] border-t-2 border-dashed border-white/30" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-primary font-bold py-4 px-10 rounded-lg hover:brightness-110 transition shadow-lg text-lg"
            >
              <MessageCircle size={22} />
              ส่งรูปเช็คราคาเลย
            </a>
          </div>
        </div>
      </section>

      {/* About + Shop Image */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/about-gold-price-today.png"
                alt="ภายในร้านหลอมทองอุดร TK"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 section-title-3d">
                เกี่ยวกับร้านหลอมทองอุดร TK
              </h2>

              <div className="space-y-4 text-gray-800 text-base leading-relaxed about-text-3d">
                <p>
                  ร้านหลอมทองอุดร TK เป็นผู้เชี่ยวชาญด้านการหลอมทองและรับซื้อทองคำทุกประเภท
                  เรามีทีมงานมืออาชีพและใช้เทคโนโลยีมาตรฐานโรงงาน
                </p>
                <p>
                  ลูกค้าของเราคือสิ่งสำคัญที่สุด ราคาที่ยุติธรรมและบริการที่ดีคือสัญญาของเรา
                  ซื้อจริง คุณภาพ ไม่หลอกลวง
                </p>
              </div>

              <div className="mt-6 space-y-3 about-text-3d">
                <div className="flex items-center gap-3 text-sm">
                  <Clock size={18} className="text-secondary flex-shrink-0" />
                  <span className="text-gray-700">
                    เปิดทุกวัน 09:00 - 17:00 น. (หรือนัดเวลาล่วงหน้าได้)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={18} className="text-secondary flex-shrink-0" />
                  <span className="text-gray-700">
                    ตรงสี่แยกบ้านจั่น ติดกับโรงเรียนติวสอบเตรียมทหาร อุดรธานี
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={18} className="text-secondary flex-shrink-0" />
                  <span className="text-gray-700">{PHONE}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MessageCircle size={18} className="text-secondary flex-shrink-0" />
                  <span className="text-gray-700">LINE ID: @TK5577</span>
                </div>
              </div>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-7 rounded-lg hover:brightness-110 transition shadow-md mt-8 text-base"
              >
                <MessageCircle size={20} />
                ปรึกษาฟรี ไม่มีค่าใช้จ่าย
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 section-title-3d">
              ติดต่อเรา
            </h2>
            <p className="text-gray-700 text-lg section-subtitle-3d">
              เปิดตลาด เปิดร้านแล้ว ยินดีให้บริการ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-5">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <img
                      src="/facebook-contact-icon.png"
                      alt="Facebook"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Facebook</h3>
                    <a
                      href={FB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline text-base"
                    >
                      ร้านหลอมทองอุดร TK
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      ติดตามข่าวสารและผลงานจริงของร้านได้ที่ Facebook
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">LINE</h3>
                    <a
                      href={LINE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline text-xl"
                    >
                      {LINE_ID}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      ทักมาสอบถามราคาได้เลย ตอบไว สะดวก
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">โทรศัพท์</h3>
                    <a
                      href={`tel:${PHONE}`}
                      className="text-primary font-semibold hover:underline text-lg"
                    >
                      {PHONE}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      เปิดทุกวัน 09:00 - 17:00 น.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">ที่อยู่ร้าน</h3>
                    <p className="text-gray-700 font-medium">
                      ร้านหลอมทองอุดร TK
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      ตรงสี่แยกบ้านจั่น ติดกับโรงเรียนติวสอบเตรียมทหาร อุดรธานี
                    </p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-2 hover:underline"
                    >
                      <MapPin size={14} /> เปิดแผนที่นำทาง
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">เวลาทำการ</h3>
                    <p className="text-gray-700 font-semibold text-base">
                      09:00 - 17:00 น.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      หรือนัดเวลาล่วงหน้าได้
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-primary via-red-600 to-red-800 rounded-2xl p-8 md:p-10 text-white flex flex-col justify-center shadow-xl">
              <div className="mb-6 rounded-xl overflow-hidden border border-white/20 shadow-lg">
                <img
                  src="/contact-shop-front.png"
                  alt="หน้าร้านหลอมทองอุดร TK"
                  className="w-full h-52 object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold mb-3 cta-title-3d">
                สอบถามราคาทันที
              </h3>
              <p className="text-lg mb-3 text-white/95 cta-sub-3d">
                บวกจากราคาสมาคม +1,800 บาท
              </p>
              <p className="text-base mb-8 text-white/85 cta-sub-3d">
                เช็คฟรี ปรึกษาฟรี ประเมินราคาฟรี ไม่มีค่าใช้จ่าย
              </p>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary font-bold py-4 px-8 rounded-xl text-center text-lg hover:brightness-110 transition shadow-lg mb-4 flex items-center justify-center gap-2"
              >
                <MessageCircle size={24} />
                ส่งรูปเช็คราคาทาง LINE
              </a>

              <a
                href={`tel:${PHONE}`}
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-xl text-center text-lg hover:bg-white/20 transition flex items-center justify-center gap-2"
              >
                <Phone size={24} />
                โทร {PHONE}
              </a>

              <p className="text-center text-white/80 text-lg font-semibold mt-6">
                LINE ID: {LINE_ID}
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.1!2d102.81496!3d17.3656305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31237713be6a03d1%3A0xdfa87462cb247162!2z4Lij4LmJ4Liy4LiZ4Lir4Lil4Lit4Lih4LiX4Lit4LiH4Lit4Li44LiU4Lij!5e0!3m2!1sth!2sth!4v1711425600000"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative text-white py-12 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/footer-red-particles.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/55 via-red-700/45 to-red-900/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-secondary">
                  <img
                    src="/logo-tk.png"
                    alt="โลโก้"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold">ร้านหลอมทองอุดร TK</h4>
              </div>
              <p className="text-white/75 text-sm leading-relaxed">
                หลอมทองมาตรฐานโรงงาน รับซื้อทอง เงิน นาค เพชร ราคาสูงสุด
                บวกจากราคาสมาคม +1,800 บาท
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">บริการ</h4>
              <ul className="space-y-2 text-white/75 text-sm">
                <li>รับซื้อทองเค 8K-24K</li>
                <li>รับซื้อเงิน 92.5%-100%</li>
                <li>รับซื้อนาค / เข็มขัดนาก</li>
                <li>รับซื้อเพชร / เครื่องเพชร</li>
                <li>ตรวจเช็คเปอร์เซ็นต์ทอง</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">ติดต่อ</h4>
              <ul className="space-y-3 text-white/75 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={14} /> {PHONE}
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle size={14} /> LINE: {LINE_ID}
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={14} /> 09:00 - 17:00 น.
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                  <span>สี่แยกบ้านจั่น ติดโรงเรียนติวสอบเตรียมทหาร อุดรธานี</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">ติดตามเรา</h4>
              <div className="flex gap-3 mb-6">
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition font-bold"
                >
                  f
                </a>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition font-bold"
                >
                  L
                </a>
              </div>
              <p className="text-white/50 text-xs">
                ร้านหลอมทองอุดร TK
              </p>
            </div>
          </div>

          <div className="border-t border-white/15 pt-8 text-center text-white/50 text-sm">
            <p>&copy; 2026 ร้านหลอมทองอุดร TK สงวนสิทธิ์ทั้งหมด</p>
          </div>
        </div>
      </footer>

      {/* Floating LINE Button */}
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 text-white rounded-full h-16 pl-4 pr-6 flex items-center gap-3 border border-white/35 transition-all duration-300 hover:scale-105"
        style={{
          background:
            "linear-gradient(180deg, #ff5044 0%, #db1a16 52%, #a80e0b 100%)",
          boxShadow:
            "0 12px 28px rgba(115, 8, 8, 0.55), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(90,0,0,0.4)",
        }}
        aria-label="ติดต่อทาง LINE"
      >
        <span className="w-10 h-10 rounded-full bg-white/95 text-red-600 flex items-center justify-center shadow-inner">
          <MessageCircle size={24} />
        </span>
        <span className="font-extrabold text-base md:text-[28px] leading-none tracking-tight whitespace-nowrap drop-shadow-[0_2px_0_rgba(0,0,0,0.28)]">
          LINE {LINE_ID}
        </span>
      </a>
    </div>
  );
}
