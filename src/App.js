import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import qrImage from './assets/qr.jpeg'; // Path check karle

// Assets imports
import myPhoto from "./assets/myPhoto.jpeg";
import myphoto1 from "./assets/myphoto1.jpeg";
// import myphoto2 from "./assets/myphoto2.jpeg";
import New from "./assets/New.png";

// Assets Music imports
import bhajan1 from "./assets/bhajan1.mp3";
import bhajan2 from "./assets/bhajan2.mp3";
import bhajan3 from "./assets/bhajan3.mp3";
import bhajan4 from "./assets/bhajan4.mp3";
import bhajan5 from "./assets/bhajan5.mp3";

import img1 from "./assets/img1.jpg"; // Apni images ke sahi naam likhein
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.jpg";
import img10 from "./assets/img10.jpg";
import img11 from "./assets/img11.jpg";
import img12 from "./assets/img12.jpg";
import img13 from "./assets/img13.jpg";
import img14 from "./assets/img14.jpg";
import img15 from "./assets/img15.jpg";
import img16 from "./assets/img16.jpg";
import img17 from "./assets/img17.jpg";
import img18 from "./assets/img18.jpg";
import img19 from "./assets/img19.jpg";



const bhajanList = [
  { id: 1, title: "Aarti - 1", audioFile: bhajan1 },
  { id: 2, title: "Aarti 2", audioFile: bhajan2 },
  { id: 3, title: "Aarti 3", audioFile: bhajan3 },
  { id: 4, title: "Aarti 4", audioFile: bhajan4 },
  { id: 5, title: "Aarti 5", audioFile: bhajan5 },
];


const galleryData = [
  // FESTIVALS (4 Images)
  { id: 1, category: "festivals", src: img1 },
  { id: 4, category: "festivals", src: img4 },
  { id: 7, category: "festivals", src: img7 },
  { id: 10, category: "festivals", src: img10, },
  { id: 15, category: "festivals", src: img15, },
  { id: 19, category: "festivals", src: img19,  },

  // TEMPLE (4 Images)
  { id: 2, category: "temple", src: img2 },
  { id: 5, category: "temple", src: img5 },
  { id: 8, category: "temple", src: img8 },
  { id: 11, category: "temple", src: img11 },
  { id: 14, category: "festivals", src: img14 },
  { id: 17, category: "festivals", src: img17 },
  { id: 18, category: "festivals", src: img18 },

  // SATSANG (5 Images)
  { id: 6, category: "satsang", src: img6 },
  { id: 9, category: "satsang", src: img9 },
  { id: 16, category: "satsang", src: img16 },
  { id: 12, category: "satsang", src: img12 },
  { id: 3, category: "satsang", src: img3 },
  { id: 13, category: "satsang", src: img13 },
];



// Reusable Section Heading Component for Code Expansion & Cleanliness
const SectionTitle = ({ title, subtitle }) => (
  <div className="section-header">
    <span className="upper-title">{subtitle}</span>
    <h2 className="main-title">{title}</h2>
    <div className="title-underline">
      <span className="line"></span>
      {/* <span className="symbol">🕉️</span> */}
      <span className="line"></span>
    </div>
  </div>
);

function App() {
  // const [dark, setDark] = useState(false);
  const [index, setIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("satsang");
  const [menuOpen, setMenuOpen] = useState(false); // Mobile Menu State
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [loading, setLoading] = useState(true);
  //  Image Array for Slider
  const sliderImages = [New, myPhoto, myphoto1];
  // 1. Popup ke liye state
const [selectedImg, setSelectedImg] = useState(null);
// Sirf Index track karne ke liye
const [currentIndex, setCurrentIndex] = useState(null);

// Next Image par jaane ke liye function
const nextImage = (e) => {
  e.stopPropagation(); // Lightbox band hone se rokne ke liye
  setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
};

// Previous Image par jaane ke liye function
const prevImage = (e) => {
  e.stopPropagation();
  setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
};
  
const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
};

  // 2. Filter logic (Ye return se pehle aayega)
  const filteredImages = activeTab === "all" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeTab);

  // Initial Loader Logic
  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // Handle Scroll for Navbar Glassmorphism
  const handleScroll = useCallback(() => {
    if (window.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  // Pehle ek state banayein popup ke liye
const [showDonate, setShowDonate] = useState(false);
// const upiLink = "upi://pay?pa=9313853350@ybl&pn=BEHANGUM%20YOGENDRAMUNI%20NARAYANDASJI&mc=0000&mode=02&purpose=00&cu=INR";
// const upiLink = "upi://pay?pa=9313853350@axl&pn=BEHANGUM%20YOGENDRAMUNI%20NARAYANDASJI&cu=INR";
// const upiLink = "intent://pay?pa=9313853350@axl&pn=BEHANGUM%20YOGENDRAMUNI%20NARAYANDASJI&cu=INR#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end";

// const upiID = "9313853350@axl"; // Screenshot wali confirm ID
//   const upiPath = `upi://pay?pa=${upiID}&pn=BEHANGUM%20YOGENDRAMUNI%20NARAYANDASJI&cu=INR`;
  
/// 1. Exact data from your new PhonePe QR
const MANDIR_UPI_ID = "9313853350@axl"; 
const RECEIVER_NAME = "BEHANGUM YOGENDRAMUNI NARAYANDASJI";
const MERCHANT_CODE = "0000"; // Default merchant code

// Is format mein bank ko puri information milti hai, jisse limit error nahi aayegi
const UPI_URL = `upi://pay?pa=${MANDIR_UPI_ID}&pn=${encodeURIComponent(RECEIVER_NAME)}&mc=${MERCHANT_CODE}&mode=02&purpose=00&cu=INR`;

const QR_IMAGE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(UPI_URL)}`;



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Auto Hero Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // if (loading) {
  //   return (
  //     <div className="preloader">
  //       <div className="loader-content">
  //         <h1>🕉️</h1>
  //         <p>Udasin Ashram Gondal...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="app-container">
      {/* <div className={`app-container ${dark ? "dark-theme" : "light-theme"}`}> */}
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="top-announcement">
        <marquee behavior="scroll" direction="left">
          ✨ Special Mahadev Aarti every Monday at 7:00 PM | 🙏 Join us for Sunday Satsang | 📞 Helpline: +91 93138 53350
        </marquee>
      </div>

      {/* 2. PREMIUM NAVIGATION */}
      <header className={`main-nav ${isScrolled ? "nav-sticky" : ""}`}>
        <div className="nav-brand">
          <h1  className="logo-text">UDASIN<span>ASHRAM</span></h1>
        </div>

        
        
        {/* Navigation Links */}
  {/* Menu links wrapper */}
  <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
    <ul className="nav-list">
      <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
      <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
      <li><a href="#darshan" onClick={() => setMenuOpen(false)}>Darshan</a></li>
      <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
      <li><a href="#bhajan" onClick={() => setMenuOpen(false)}>Bhajans</a></li>
      <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
    </ul>
  </nav>

        <div className="nav-utils">
          {/* <button className="theme-toggle" onClick={() => setDark(!dark)}>
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button> */}
          {/* <button className="donate-btn">Donate 🙏</button> */}
          <button className="donate-btn" onClick={() => setShowDonate(true)}>
  Donate 🙏
</button>
        </div>

        {/* Hamburger Toggle Button */}
  <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
    <span></span>
    <span></span>
    <span></span>
  </div>

  
      </header>

      {/* 3. HERO SECTION WITH LAYERED OVERLAY */}
      <section id="home" className="hero-section">
        {sliderImages.map((img, i) => (
          <div 
            key={i} 
            className={`hero-slide ${index === i ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-overlay">
          <div className="hero-content">
            <h4 className="hero-tag">A Sacred Legacy of Gondal</h4>
            <h1 className="hero-title">Shanti, Bhakti aur <br/><span>Divya Gyan</span></h1>
            <p className="hero-desc">
              Experience the profound spiritual energy at Udasin Ashram. 
              A sanctuary for those seeking inner peace and divine connection.
            </p>
            <div className="hero-actions">
              <a href="#darshan" className="btn btn-primary">Today's Timings</a>
              <a href="#about" className="btn btn-secondary">Our Story</a>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="mouse"></div>
            <span>Scroll Down</span>
          </div>
        </div>
      </section>
      

      {/* 4. STATS COUNTER */}
      <section className="stats-strip">
        <div className="stat-item">
          <span className="stat-num">50+</span>
          <p className="stat-label">Years of Heritage</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-num">10k+</span>
          <p className="stat-label">Monthly Devotees</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-num">24/7</span>
          <p className="stat-label">Divine Presence</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-num">500+</span>
          <p className="stat-label">Bhajan Collection</p>
        </div>
      </section>

      {/* 5. ABOUT SECTION WITH IMAGE STACK */}
      <section id="about" className="about-section">
  <div className="container">
    
    <div className="about-header-main">
      <h2 className="title-small">Shree Udasin Ashram Gondal</h2>
      <div className="title-underline"></div>
      <p className="subtitle-elegant">A Divine Legacy of Peace & Spiritual Wisdom 🔱</p>
    </div>

    <div className="about-grid-layout">
      
      {/* Left: Image Box */}
      <div className="about-visual-side">
        <div className="image-frame-minimal">
          <img src={myphoto1} alt="Ashram" className="ashram-img-refined" />
          <div className="frame-accent"></div>
        </div>
      </div>

      {/* Right: Full Details Side */}
      <div className="about-text-side">
        <div className="content-wrapper">
          <p className="para-main">
            Udasin Ashram Gondal ek pavitra sthal hai jahan bhakti, shanti aur aatma-vikas ka marg pradarshit kiya jata hai. Yeh ashram <strong>Udasin parampara</strong> par adharit hai jo tyag, saralta aur bhagwan ki bhakti ko badhava deta hai.
          </p>
          
          <p className="para-main">
            Ashram ki sabse badi visheshtha yahan ki <strong>Atithi Seva</strong> hai. Yahaan aane wale har mehman aur bhakt ko aate hi prem-purvak <strong>Bhojan Prasad</strong> grahan karaya jata hai, jo hamari 'Seva hi Dharam' ki bhavna ko darshata hai.
          </p>

          <div className="festivals-display">
            <h4 className="label-mini">Varshik Utsav & Parampara</h4>
            <p className="para-small">
              Ashram mein saal bhar bhakti ka mahol rehta hai. Yahaan <strong>Mahashivratri, Hanuman Jayanti, aur Guru Purnima</strong> jaise utsav bade dhum-dham se manaye jate hain. Vishesh roop se <strong>Maha Mahina (Maha Vadh Bij)</strong> ko ek utsav ki tarah manaya jata hai. Iske alawa Nirvan Das Bapu ni Tithi aur Deepavali jaise avsaron par bhi vishesh ayojan hote hain.
            </p>
          </div>

          <p className="mahant-section-full">
            Vartman mein, <strong>Mahant Yogendra Muni Ji Maharaj</strong> ke pavan sanidhy mein ashram nirantar pragati kar raha hai. Unke margdarshan mein yahaan dhyan, satsang aur samaj seva ke karya kiye jate hain, jisse bhakton ko aatmik shanti aur nai disha milti hai.
          </p>
        </div>

        {/* Small Icons/Features */}
        <div className="mini-features">
          <div className="f-item"><span>🔱</span> Satsang</div>
          <div className="f-item"><span>🧘</span> Dhyan</div>
          <div className="f-item"><span>🌿</span> Seva</div>
        </div>


        {/* <button className="read-more-btn">History & Legacy</button> */}
        {/* Button jo popup kholega */}
<button className="read-more-btn" onClick={toggleModal}>
  History & Legacy
</button>

{/* Popup Modal Structure */}
{isModalOpen && (
  <div className="modal-overlay" onClick={toggleModal}>
    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
      <button className="close-modal" onClick={toggleModal}>&times;</button>
      
      <div className="modal-header">
        <h2>Our Sacred History</h2>
      </div>
      
      <div className="modal-body">
  <h3>✨ Sthapna aur Itihas</h3>
  <p>
    Udasin Ashram, Gondal ki neev dasako pehle rakhi gayi thi. Gondal ki riyasat ke dauran, 
    Maharaja Bhagvatsinhji ke samay se hi is ashram ka vishesh mahatva raha hai.
  </p>

  <h3>🙏 Udasin Parampara</h3>
  <p>
    Yah ashram Shri Chandradev ji dwara prachalit 'Udasin Sampradaya' ke siddhanton ka palan 
    karta hai. Hamara mukhya uddeshya "Atmano Mokshartham Jagat Hitaya Cha" (Apne moksha aur 
    jagat ke kalyan ke liye) hai. Yahan ki parampara mein gyan, bhakti aur karmo ka sundar 
    mel dekhne ko milta hai.
  </p>

  <h3>🏠 Ashram ki Gatividhiya (Legacy)</h3>
  <p>
    Ashram sirf ek imarat nahi, balki seva ka ek jeevant kendra hai. Hamari virasat mein 
    shamil hain:
  </p>
  <ul className="modal-list">
    <li><strong>Annakshetra:</strong> Rozana sainkdo zarooratmand logon ko prasad aur bhojan.</li>
    <li><strong>Gau-Seva:</strong> Ashram ki apni Gaushala jahan desi gaayon ki seva hoti hai.</li>
    <li><strong>Dhyan</strong> Mansik shanti ke liye niyamit dhyan shivir.</li>
  </ul>

  <p className="modal-footer-text">
    Aaj bhi yah ashram apne purvajon ke dikhaye marg par chalte hue, har dharmi aur jigyasu 
    ke liye ek khula dwar hai.
  </p>
</div>
    </div>
  </div>
)}
      </div>

    </div>
  </div>
</section>

      {/* 6. TIMINGS & DARSHAN SECTION */}
      {/* 6. TIMINGS & DARSHAN SECTION */}
{/* 6. TIMINGS & DARSHAN SECTION */}
<section id="darshan" className="darshan-timings">
  <div className="container">
    <SectionTitle title="Darshan & Aarti Timings" subtitle="Udasin Ashram Schedule" />
    
    <div className="timings-grid">
      {/* Morning Section */}
      <div className="timing-card">
        <div className="card-top">Morning Darshan</div>
        <div className="card-body">
          <h3>04:00 AM - 12:00 PM</h3>
          <ul>
            <li>
              <span className="time-bullet">04:00 AM</span>
              <span className="aarti-name">Mangla Aarti 🔱</span>
            </li>
            <li>
              <span className="time-bullet">06:00 AM</span>
              <span className="aarti-name">Prabhat Prarthana</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Afternoon & Evening Section (Ab bilkul same style mein) */}
      <div className="timing-card">
        <div className="card-top">Afternoon & Evening</div>
        <div className="card-body">
          <h3>04:00 PM - 09:00 PM</h3>
          <ul>
            <li>
              <span className="time-bullet">04:00 PM</span>
              <span className="aarti-name">Shringar Aarti ✨</span>
            </li>
            <li>
              <span className="time-bullet">07:00 PM</span>
              <span className="aarti-name">Sandhya Aarti 🕯️</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 7. GALLERY WITH FILTER */}
      {/* 7. GALLERY SECTION */}
      {/* 7. GALLERY SECTION */}
<section id="gallery" className="gallery-section">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">Spiritual Gallery</h2>
      {/* <p className="section-subtitle">Moments of Peace</p> */}
    </div>

    {/* Tabs: "all" ko last mein rakha hai */}
    <div className="gallery-tabs">
      {["satsang", "festivals", "temple", "all"].map((tab) => (
        <button 
          key={tab} 
          className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>

    {/* Grid */}
    {/* Gallery Grid */}
<div className="gallery-grid">
  {filteredImages.map((item, index) => (
    <div key={item.id} className="gallery-card" onClick={() => setCurrentIndex(index)}>
      <img src={item.src} alt={item.title} loading="lazy" />
      <div className="gallery-hover">
        <span className="gallery-card-title">{item.title}</span>
      </div>
    </div>
  ))}
</div>

{/* --- FULL SCREEN LIGHTBOX --- */}
{currentIndex !== null && (
  <div className="lightbox-overlay" onClick={() => setCurrentIndex(null)}>
    
    {/* Close Button */}
    <span className="close-lightbox" onClick={() => setCurrentIndex(null)}>&times;</span>

    {/* Previous Button */}
    <button className="nav-btn prev-btn" onClick={prevImage}>&#10094;</button>

    {/* Main Image */}
    {/* Lightbox Content ke andar image ko update karein */}
<div className="lightbox-content">
  <img 
    src={filteredImages[currentIndex].src} 
    alt="Enlarged" 
    className="lightbox-img zoomable-img" // Naya class add kiya
    onClick={(e) => {
      e.stopPropagation();
      e.target.classList.toggle('is-zoomed'); // Click par zoom toggle karega
    }} 
  />
  <p className="img-caption">{filteredImages[currentIndex].title}</p>
</div>

    {/* Next Button */}
    <button className="nav-btn next-btn" onClick={nextImage}>&#10095;</button>

  </div>
)}

    {/* --- IMAGE POPUP (LIGHTBOX) --- */}
    {selectedImg && (
      <div className="lightbox-overlay" onClick={() => setSelectedImg(null)}>
        <span className="close-lightbox">&times;</span>
        <img src={selectedImg} alt="Enlarged view" className="lightbox-img" onClick={(e) => e.stopPropagation()} />
      </div>
    )}
  </div>
</section>

      {/* 8. BHAJAN PLAYER SECTION */}
      {/* 8. BHAJAN PLAYER SECTION */}
<section id="bhajan" className="bhajan-section">
  <div className="container">
    <div className="bhajan-box">
      <SectionTitle title="Divine Melodies" subtitle="Listen to Peace" />
      <div className="audio-list">
  {bhajanList.map((item) => (
    <div key={item.id} className="audio-item">
      <div className="audio-info">
        <h4>{item.title}</h4>
        {/* <p>Traditional Udasin Chanting</p> */}
        <p>Ashram ki Pavitra Vani</p>
      </div>
      <audio controls controlsList="nodownload">
        <source src={item.audioFile} type="audio/mpeg" />
      </audio>
    </div>
  ))}
</div>
    </div>
  </div>
</section>

      {/* 9. CONTACT & MAP SECTION */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form-side">
              <SectionTitle title="Send a Message" subtitle="Get in Touch" />
              <form className="modern-form">
                <div className="form-row">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Email Address" required />
                </div>
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Your Message or Prayer Request" rows="5"></textarea>
                <button type="submit" className="form-submit">Send Message 🔱</button>
              </form>
            </div>
            <div className="contact-info-side">
              <div className="info-block">
                <h4>Hari Har Udasin Ashram Location</h4>
                {/* <p>Udasin Ashram Road, Near River Side, Gondal, Gujarat - 360311</p> */}
                <p>XR33+5W6, Ganji Wada, Gondal, Gujarat 360311</p>
              </div>
              <div className="info-block">
                <h4>Call Us</h4>
                {/* <p>+91 98765 43210 <br/> +91 93138 53350</p> */}
                <p>+91 93138 53350</p>
              </div>
              {/* <div className="info-block">
                <h4>Email Support</h4>
                <p>bhakti@udasinashram.com</p>
              </div> */}

              <div className="google-map-box">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.121634561!2d70.7934661!3d21.9678129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395817d3d20473e3%3A0x463434322a4d2218!2sUdasin%20Ashram!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="Udasin Ashram Location"
  ></iframe>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PREMIUM FOOTER */}
      <footer className="main-footer">
        <div className="container footer-grid">
          <div className="footer-col brand">
            <h2>🕉️ UDASIN ASHRAM</h2>
            <p>Spreading the divine wisdom and peace of Lord Shiva in the heart of Gondal.</p>
            <div className="social-icons">
              <span>FB</span> <span>IG</span> <span>YT</span> <span>WA</span>
            </div>
          </div>
          <div className="footer-col links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Our History</a></li>
              <li><a href="#events">Upcoming Events</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>
          <div className="footer-col map">
            <h4>Find Us</h4>
            <div className="map-placeholder">
              {/* Google Map Embed would go here */}
              <p>Gondal, Gujarat</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Udasin Ashram Gondal. All Rights Reserved. | Designed with ❤️ for Mahadev</p>
        </div>
      </footer>

      {/* SCROLL TO TOP BUTTON */}
      {/* <button className={`scroll-top ${isScrolled ? "visible" : ""}`} onClick={() => window.scrollTo(0,0)}>
        ↑
      </button> */}
      <button 
  className={`scroll-top ${isScrolled ? "visible" : ""}`} 
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <span className="arrow-up">↑</span>
</button>

{/* --- FINAL COMPACT POPUP CODE --- */}
{showDonate && (
        <div 
          className="modal-overlay" 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999,
            display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
          onClick={() => setShowDonate(false)}
        >
          <div 
            className="donate-modal" 
            style={{
              background: '#1a1a1a', color: 'white', width: '350px',
              padding: '25px', borderRadius: '20px', textAlign: 'center',
              border: '2px solid #ff9933', position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowDonate(false)} 
              style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}
            >
              &times;
            </button>
            
            <div className="header">
              <span style={{ fontSize: '2.5rem' }}>🕉️</span>
              <h3 style={{ color: '#ff9933', margin: '10px 0' }}>Ashram Seva</h3>
              <p style={{ fontSize: '13px', color: '#ccc' }}>{RECEIVER_NAME}</p>
            </div>

            {/* QR Code Section */}
            <div style={{ background: 'white', padding: '15px', borderRadius: '15px', margin: '20px auto', width: 'fit-content' }}>
              <img src={QR_IMAGE_URL} alt="Scan to Pay" style={{ width: '180px', height: '180px' }} />
              <p style={{ color: '#333', fontWeight: 'bold', margin: '5px 0 0 0', fontSize: '14px' }}>Scan with Any App</p>
            </div>

            {/* Direct Pay Button for Mobile */}
            <a 
              href={UPI_URL} 
              style={{
                display: 'block', backgroundColor: '#ff9933', color: 'white',
                textDecoration: 'none', padding: '12px', borderRadius: '10px',
                fontWeight: 'bold', marginBottom: '15px'
              }}
            >
              Pay Now (Click here)
            </a>

            {/* Bank Info */}
            <div style={{ borderTop: '1px solid #333', paddingTop: '15px', fontSize: '12px', color: '#aaa' }}>
              <p><strong>UPI ID:</strong> {MANDIR_UPI_ID}</p>
              <p><strong>Bank:</strong> State Bank of India (0501)</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;