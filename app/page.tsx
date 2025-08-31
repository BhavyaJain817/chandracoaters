'use client'
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from './lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from './contexts/AuthContext';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock, 
  faCheck, 
  faIndustry, 
  faCog, 
  faFlask, 
  faChartLine, 
  faCar, 
  faTools, 
  faBolt, 
  faSeedling, 
  faCertificate, 
  faRocket,
  faBuilding,
  faUsers,
  faAward,
  faShieldAlt,
  faLeaf,
  faUserTie,
  faClipboardCheck,
  faBars,
  faTimes,
  faChevronLeft,
  faChevronRight,
  faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentETPSlide, setCurrentETPSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const etpImages = [
    { src: "/1.png", alt: "ETP Plant 1", className: "w-full h-96 object-contain" },
    { src: "/3.png", alt: "ETP Plant 3", className: "w-full h-96 object-contain" },
    { src: "/4.png", alt: "ETP Plant 4", className: "w-full h-96 object-contain" },
    { src: "/5.png", alt: "ETP Plant 5", className: "w-full h-96 object-contain" },
    { src: "/6.png", alt: "ETP Plant 6", className: "w-full h-96 object-contain" },
    { src: "/8.jpg", alt: "ETP Plant 8", className: "w-full h-96 object-contain" }
  ];

  const nextETPSlide = () => {
    setCurrentETPSlide((prev) => (prev + 1) % etpImages.length);
  };

  const prevETPSlide = () => {
    setCurrentETPSlide((prev) => (prev - 1 + etpImages.length) % etpImages.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save form data to Firebase "leads" collection
      const docRef = await addDoc(collection(db, "leads"), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
        status: "new"
      });
      
      console.log("Lead saved with ID: ", docRef.id);
      
      // Show success message
      setShowThankYou(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      
      // Hide thank you message after 3 seconds
      setTimeout(() => {
        setShowThankYou(false);
      }, 3000);
      
    } catch (error) {
      console.error("Error saving lead: ", error);
      // You might want to show an error message to the user here
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white text-black shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center -ml-4">
              <Image
                src="/logo.png"
                alt="Chandra Coaters Logo"
                width={180}
                height={60}
                className="h-26 w-auto"
                priority
                unoptimized
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center text-black">
                  <FontAwesomeIcon icon={faBuilding} className="mr-1" />
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center text-black">
                  <FontAwesomeIcon icon={faUsers} className="mr-1" />
                  About
                </button>
                <button onClick={() => scrollToSection('benefits')} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center text-black">
                  <FontAwesomeIcon icon={faIndustry} className="mr-1" />
                  Services
                </button>
                <button onClick={() => scrollToSection('why-choose-us')} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center text-black">
                  <FontAwesomeIcon icon={faAward} className="mr-1" />
                  Why Choose Us
                </button>
                <button onClick={() => scrollToSection('industries')} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center text-black">
                  <FontAwesomeIcon icon={faCog} className="mr-1" />
                  Industries
                </button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center text-black">
                  <FontAwesomeIcon icon={faPhone} className="mr-1" />
                  Contact
                </button>
                
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset transition-colors"
                style={{ '--tw-ring-color': '#202938' } as React.CSSProperties}
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="block h-6 w-6" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button 
                onClick={() => { scrollToSection('home'); setIsMobileMenuOpen(false); }}
                className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center text-black w-full text-left"
              >
                <FontAwesomeIcon icon={faBuilding} className="mr-3" />
                Home
              </button>
              <button 
                onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }}
                className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center text-black w-full text-left"
              >
                <FontAwesomeIcon icon={faUsers} className="mr-3" />
                About
              </button>
              <button 
                onClick={() => { scrollToSection('benefits'); setIsMobileMenuOpen(false); }}
                className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center text-black w-full text-left"
              >
                <FontAwesomeIcon icon={faIndustry} className="mr-3" />
                Services
              </button>
              <button 
                onClick={() => { scrollToSection('why-choose-us'); setIsMobileMenuOpen(false); }}
                className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center text-black w-full text-left"
              >
                <FontAwesomeIcon icon={faAward} className="mr-3" />
                Why Choose Us
              </button>
              <button 
                onClick={() => { scrollToSection('industries'); setIsMobileMenuOpen(false); }}
                className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center text-black w-full text-left"
              >
                <FontAwesomeIcon icon={faCog} className="mr-3" />
                Industries
              </button>
              <button 
                onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}
                className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center text-black w-full text-left"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-3" />
                Contact
              </button>
              {user && (
                <a 
                  href="/dashboard"
                  className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center text-black w-full text-left"
                >
                  <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
                  Dashboard
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>


          {/* ETP Carousel */}
          <div className="">
              <div className="relative">
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentETPSlide * 100}%)` }}>
                    {etpImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={500}
                          className={image.className}
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Navigation Buttons */}
                <button
                  onClick={prevETPSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
                  style={{ color: '#202938' }}
                  aria-label="Previous slide"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
                </button>
                <button
                  onClick={nextETPSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
                  style={{ color: '#202938' }}
                  aria-label="Next slide"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {etpImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentETPSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentETPSlide ? 'bg-secondary' : 'bg-white/60'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

                  {/* Hero Section */}
      <section id="home" className="relative text-white" style={{ backgroundColor: '#202938' }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-heading">
                Chandra Coaters  <br /><span className="text-2xl">Premium CED Coating Services</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-white">
                At Chandra Coaters, we specialize in CED (Cathodic Electro-Deposition) Coating, 
                a modern, eco-friendly solution for protecting and enhancing metal components. 
                Our advanced facility, skilled team, and dedication to excellence ensure 
                world-class quality and customer satisfaction every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-secondary text-white font-semibold py-3 px-8 rounded-lg hover:bg-secondary-light transition-colors shadow-lg"
                >
                  Get Quote
                </button>
                
              </div>
            </div>
            <div className="relative">
              <Image
                src="/5.png"
                alt="Chandra Coaters Factory"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4 font-heading">
              <FontAwesomeIcon icon={faAward} className="mr-2" />
              About Us
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-neutral-dark mb-6 leading-relaxed">
                Chandra Coaters is built on the belief that quality coating extends product life 
                and adds value for our customers. With years of experience in industrial surface 
                finishing, we've become a trusted partner for automotive, engineering, and 
                industrial sectors seeking precision coating solutions.
              </p>
              <p className="text-lg text-neutral-dark leading-relaxed">
                Our plant is equipped with cutting-edge CED coating systems, allowing us to 
                deliver consistent, high-quality finishes that stand the test of time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/6.png"
                alt="Coating Process"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
                unoptimized
              />
            <Image
                src="/5.png"
                alt="Machinery Equipment"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
              </section>

        {/* Certificate of Registration Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
              <FontAwesomeIcon icon={faCertificate} className="mr-2" />
              Certificate of Registration
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="flex justify-center">
            <div className="bg-neutral-light p-8 rounded-lg shadow-lg max-w-4xl">
              <div className="text-center mb-6">
                <div className="text-secondary text-4xl mb-4">
                  <FontAwesomeIcon icon={faAward} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Official Registration Certificate</h3>
                  <p className="text-neutral-dark mb-6">
                    Chandra Coaters is officially registered and certified to provide CED coating services. 
                    Our registration demonstrates our commitment to quality standards and regulatory compliance.
                  </p>
                </div>
                <div className="flex justify-center">
                  <a 
                    href="/Certificate Of Registration.pdf" 
          target="_blank"
          rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-semibold py-3 px-6 rounded-lg transition-colors" style={{ backgroundColor: '#202938' }}
                  >
                    <span>📄</span>
                    View Certificate of Registration
                  </a>
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm text-neutral-dark">
                    Click to open the official registration certificate in a new tab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parts We Deal In Section */}
        <section className="py-16" style={{ backgroundColor: '#202938' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">
              <FontAwesomeIcon icon={faTools} className="mr-2" />
              Parts We Deal In
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <Image
                  src="/part1.png"
                  alt="Industrial Part 1"
                  width={400}
                  height={300}
                  className="rounded-lg w-full"
                  unoptimized
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <Image
                  src="/part2.png"
                  alt="Industrial Part 2"
                  width={400}
                  height={300}
                  className="rounded-lg w-full"
                  unoptimized
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <Image
                  src="/part3.png"
                  alt="Industrial Part 3"
                  width={400}
                  height={300}
                  className="rounded-lg w-full"
                  unoptimized
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
                  src="/part4.png"
                  alt="Industrial Part 4"
                  width={400}
                  height={300}
                  className="rounded-lg w-full"
                  unoptimized
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
                  src="/part5.png"
                  alt="Industrial Part 5"
                  width={400}
                  height={300}
                  className="rounded-lg w-full"
                  unoptimized
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
                  src="/part6.png"
                  alt="Industrial Part 6"
                  width={400}
                  height={300}
                  className="rounded-lg w-full"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* ETP Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
                <FontAwesomeIcon icon={faIndustry} className="mr-2" />
                ETP = Effluent Treatment Plant
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>

            {/* ETP Images Display */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <Image
                    src="/etp1.png"
                    alt="ETP Plant 1"
                    width={600}
                    height={400}
                    className="w-full h-80 object-contain rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <Image
                    src="/etp1.png"
                    alt="ETP Plant 2"
                    width={600}
                    height={400}
                    className="w-full h-80 object-contain rounded-lg"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* ETP Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* What is ETP */}
              <div className="bg-neutral-light p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <span className="text-3xl mr-3">🔹</span>
                  What is an ETP Plant?
                </h3>
                <p className="text-neutral-dark leading-relaxed mb-4">
                  An Effluent Treatment Plant (ETP) is a facility used to treat wastewater and industrial effluents before they are discharged into the environment or reused.
                </p>
                <p className="text-neutral-dark leading-relaxed">
                  It removes harmful chemicals, solids, and toxins to ensure the water meets environmental safety standards.
                </p>
              </div>

              {/* Main Benefits */}
              <div className="bg-neutral-light p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <span className="text-3xl mr-3">🔹</span>
                  Main Benefits of an ETP Plant
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✅</span>
                    <span className="text-neutral-dark"><strong>Environmental Protection</strong> – Prevents water pollution by treating harmful industrial wastewater.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✅</span>
                    <span className="text-neutral-dark"><strong>Regulatory Compliance</strong> – Helps industries meet government norms (CPCB/SPCB standards in India).</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✅</span>
                    <span className="text-neutral-dark"><strong>Water Reuse</strong> – Treated water can be reused for gardening, cooling towers, or other non-potable purposes.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✅</span>
                    <span className="text-neutral-dark"><strong>Reduces Health Hazards</strong> – Minimizes exposure to toxic effluents that harm humans and animals.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✅</span>
                    <span className="text-neutral-dark"><strong>Cost Savings</strong> – Reduces water procurement costs by recycling treated water.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✅</span>
                    <span className="text-neutral-dark"><strong>Sustainable Operations</strong> – Supports industries in achieving sustainability and green certifications.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Industries */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                <span className="text-3xl mr-3">🔹</span>
                Common Industries Using ETP
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="bg-neutral-light p-6 rounded-lg shadow-lg text-center">
                  <div className="text-accent text-4xl mb-4">
                    <FontAwesomeIcon icon={faIndustry} />
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-2">Textile & Dyeing</h4>
                </div>
                <div className="bg-neutral-light p-6 rounded-lg shadow-lg text-center">
                  <div className="text-accent text-4xl mb-4">
                    <FontAwesomeIcon icon={faFlask} />
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-2">Chemical & Pharmaceutical</h4>
                </div>
                <div className="bg-neutral-light p-6 rounded-lg shadow-lg text-center">
                  <div className="text-accent text-4xl mb-4">
                    <FontAwesomeIcon icon={faSeedling} />
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-2">Food & Beverage</h4>
                </div>
                <div className="bg-neutral-light p-6 rounded-lg shadow-lg text-center">
                  <div className="text-accent text-4xl mb-4">
                    <FontAwesomeIcon icon={faLeaf} />
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-2">Paper & Pulp</h4>
                </div>
                <div className="bg-neutral-light p-6 rounded-lg shadow-lg text-center">
                  <div className="text-accent text-4xl mb-4">
                    <FontAwesomeIcon icon={faCar} />
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-2">Automotive & Metal Finishing</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary text-3xl mb-4">
                <FontAwesomeIcon icon={faIndustry} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Advanced Technology</h3>
              <p className="text-black">Industry-leading CED coating equipment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary text-3xl mb-4">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Superior Quality</h3>
              <p className="text-black">We follow strict quality standards to ensure precision</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary text-3xl mb-4">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Best-in-Class Service</h3>
              <p className="text-black">Timely delivery and excellent customer support</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary text-3xl mb-4">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Eco-Friendly Process</h3>
              <p className="text-black">Sustainable, water-based coating technology</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary text-3xl mb-4">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Experienced Team</h3>
              <p className="text-black">Skilled professionals who understand your needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary text-3xl mb-4">
                <FontAwesomeIcon icon={faClipboardCheck} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Quality Assurance</h3>
              <p className="text-black">Rigorous testing and quality control processes</p>
            </div>
          </div>
        </div>
              </section>

        {/* Benefits of ED-Coating Section */}
        <section id="benefits" className="py-16 bg-neutral-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
                <FontAwesomeIcon icon={faIndustry} className="mr-2" />
                Benefits of ED-Coating
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-primary text-4xl mb-4">
                  <FontAwesomeIcon icon={faShieldAlt} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">Superior Corrosion Resistance</h3>
                <p className="text-black">Advanced protection against rust and environmental damage for extended product lifespan</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-primary text-4xl mb-4">
                  <FontAwesomeIcon icon={faCog} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">Coverage in Intricate Design</h3>
                <p className="text-black">Complete coverage even in complex geometries and hard-to-reach areas</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-primary text-4xl mb-4">
                  <FontAwesomeIcon icon={faClipboardCheck} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">Uniform Coating Thickness</h3>
                <p className="text-black">Consistent and even coating application across all surfaces for optimal performance</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-primary text-4xl mb-4">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">Better Control of Paint Thickness</h3>
                <p className="text-black">Precise control over coating thickness for customized requirements and specifications</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-primary text-4xl mb-4">
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">Environment Friendly</h3>
                <p className="text-black">Eco-friendly coating process that reduces environmental impact and waste</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-primary text-4xl mb-4">
                  <FontAwesomeIcon icon={faAward} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">Quality Assurance</h3>
                <p className="text-black">Rigorous quality control processes ensure consistent, high-quality results every time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
      <section id="industries" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
              <FontAwesomeIcon icon={faRocket} className="mr-2" />
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-neutral-light rounded-lg shadow-lg">
              <div className="text-accent text-4xl mb-4">
                <FontAwesomeIcon icon={faCar} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Automotive Components</h3>
              <p className="text-neutral-dark text-sm">Car parts, engine components, chassis elements</p>
            </div>
            <div className="text-center p-6 bg-neutral-light rounded-lg shadow-lg">
              <div className="text-accent text-4xl mb-4">
                <FontAwesomeIcon icon={faCog} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Heavy Machinery & Engineering Parts</h3>
              <p className="text-neutral-dark text-sm">Industrial equipment, mechanical components</p>
            </div>
            <div className="text-center p-6 bg-neutral-light rounded-lg shadow-lg">
              <div className="text-accent text-4xl mb-4">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Electrical & Industrial Equipment</h3>
              <p className="text-neutral-dark text-sm">Electrical components, industrial machinery</p>
            </div>
            <div className="text-center p-6 bg-neutral-light rounded-lg shadow-lg">
              <div className="text-accent text-4xl mb-4">
                <FontAwesomeIcon icon={faSeedling} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Agricultural Tools & Hardware</h3>
              <p className="text-neutral-dark text-sm">Farming equipment, agricultural machinery</p>
            </div>
          </div>
          <div className="text-center mt-8">
                            <div className="text-white p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#202938' }}>
                  <h3 className="text-xl font-semibold mb-2">Custom Industrial Applications</h3>
                  <p className="text-white/90">Specialized coating solutions for unique industrial requirements</p>
                </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 text-white" style={{ backgroundColor: '#202938' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">
            <FontAwesomeIcon icon={faAward} className="mr-2" />
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            To deliver world-class CED coating services that combine innovation, precision, and care—helping our clients enhance durability and reliability of their products.
          </p>
        </div>
      </section>

            {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
                          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-lg" style={{ backgroundColor: '#202938' }}>
                <FontAwesomeIcon icon={faPhone} className="text-3xl text-white" />
              </div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-heading">
              Let's Start a <span className="text-secondary">Conversation</span>
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto leading-relaxed">
              Ready to transform your metal components with world-class CED coating? 
              Get in touch with our experts today and discover how we can enhance your products.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Info & Hours */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-neutral-light p-8 rounded-2xl shadow-xl border border-neutral-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: '#202938' }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Get In Touch</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300" style={{ backgroundColor: 'rgba(32, 41, 56, 0.1)' }}>
                      <FontAwesomeIcon icon={faBuilding} className="text-lg text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-dark mb-1">Location</p>
                      <p className="text-neutral-dark">G-1 263 RIICO INDUSTRIAL AREA, KHUSKHERA</p>
                      <p className="text-neutral-dark">Pin Code: 301707</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300" style={{ backgroundColor: 'rgba(32, 41, 56, 0.1)' }}>
                      <FontAwesomeIcon icon={faPhone} className="text-lg text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-dark mb-1">Phone</p>
                      <p className="text-neutral-dark">9414014400, 9315401040</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300" style={{ backgroundColor: 'rgba(32, 41, 56, 0.1)' }}>
                      <FontAwesomeIcon icon={faEnvelope} className="text-lg text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-dark mb-1">Email</p>
                      <p className="text-neutral-dark">chandracoaters@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-neutral-light p-8 rounded-2xl shadow-xl border border-neutral-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: '#202938' }}>
                    <FontAwesomeIcon icon={faClock} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-200">
                    <span className="text-black">Monday - Saturday</span>
                    <span className="font-semibold text-primary">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-200">
                    <span className="text-black">Sunday</span>
                    <span className="font-semibold text-primary">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-neutral-light p-8 rounded-2xl shadow-xl border border-neutral-200">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: '#202938' }}>
                  <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Send Us a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-dark placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-dark placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-dark placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-dark mb-2">
                 Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-dark placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements, specifications, and any special needs..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-light text-white font-bold py-4 px-8 rounded-xl hover:from-primary-light hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    <FontAwesomeIcon icon={faRocket} className="mr-2" />
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Full Width Map Section */}
          <div className="mt-12">
            <div className="bg-neutral-light p-8 rounded-2xl shadow-xl border border-neutral-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: '#202938' }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Location</h3>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.7027756571474!2d76.8017263752696!3d28.125086575945748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4b98a1e9d40d%3A0xf4136513a77c2ada!2sChandra%20Coaters!5e0!3m2!1sen!2sin!4v1756626481816!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chandra Coaters Location"
                  className="w-full"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://www.google.com/maps/place/Chandra+Coaters/@28.1250866,76.8017264,17z/data=!3m1!4b1!4m6!3m5!1s0x390d4b98a1e9d40d:0xf4136513a77c2ada!2sChandra+Coaters!8m2!3d28.1250866!4d76.8017264" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-neutral-light p-8 rounded-2xl shadow-xl border border-neutral-200 inline-block">
              <h4 className="text-2xl font-bold text-primary mb-2">Ready to Get Started?</h4>
              <p className="text-neutral-dark mb-4">Join hundreds of satisfied customers who trust Chandra Coaters</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:9414014400" className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-colors" style={{ backgroundColor: '#202938' }}>
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Call Now
                </a>
                <a href="mailto:chandracoaters@gmail.com" className="inline-flex items-center px-6 py-3 border-2 text-primary font-semibold rounded-lg hover:text-white transition-colors" style={{ borderColor: '#202938' }}>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/logo.png"
                alt="Chandra Coaters Logo"
                width={180}
                height={60}
                className="h-26 w-auto"
                priority
                unoptimized
              />
              <p className="text-neutral-light mb-4">
                Leading provider of CED coating solutions for automotive and industrial applications.
              </p>
              
            </div>
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-4">Services</h4>
              <ul className="space-y-2 text-neutral-light">
                <li>CED Coating</li>
                <li>Surface Pretreatment</li>
                <li>Custom Solutions</li>
                <li>High-Volume Production</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-4">Quick Contact</h4>
              <div className="space-y-2 text-neutral-light">
                <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" />chandracoaters@gmail.com</p>
                <p><FontAwesomeIcon icon={faPhone} className="mr-2" />9414014400, 9315401040</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />G-1 263 RIICO INDUSTRIAL AREA, KHUSKHERA</p>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral mt-8 pt-8 text-center text-neutral-light">
            <p>&copy; 2024 Chandra Coaters. All rights reserved.</p>
          </div>
        </div>
      </footer>
                  {/* YouTube Button */}
          <a
            href="https://youtube.com/@chandracoaters?si=oBv9rhVaxaU6CxIS"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
            aria-label="Visit our YouTube channel"
          >
            <div className="flex items-center justify-center">
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
          
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919414014400?text=Hello! I'm interested in your CED coating services."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 left-6 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group flex items-center"
            aria-label="Contact us on WhatsApp"
          >
            <div className="flex items-center justify-center mr-3">
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            <span className="font-semibold">Contact Us</span>
          </a>

    

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-4 text-center">
            <div className="text-secondary text-4xl mb-4">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Thank You!</h3>
            <p className="text-neutral-dark mb-6">
              Your message has been sent successfully. We'll get back to you soon!
            </p>
            <button
              onClick={() => setShowThankYou(false)}
                                className="text-white font-semibold py-2 px-6 rounded-lg transition-colors" style={{ backgroundColor: '#202938' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
