'use client'
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  faTimes
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setShowThankYou(true);
    setFormData({ name: "", phone: "", email: "", message: "" });
    
    // Hide thank you message after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Chandra Coaters</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <FontAwesomeIcon icon={faBuilding} className="mr-1" />
                  Home
                </a>
                <a href="#about" className="hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <FontAwesomeIcon icon={faUsers} className="mr-1" />
                  About
                </a>
                <a href="#services" className="hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <FontAwesomeIcon icon={faIndustry} className="mr-1" />
                  Services
                </a>
                <a href="#why-choose-us" className="hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <FontAwesomeIcon icon={faAward} className="mr-1" />
                  Why Choose Us
                </a>
                <a href="#industries" className="hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <FontAwesomeIcon icon={faCog} className="mr-1" />
                  Industries
                </a>
                <a href="#contact" className="hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-1" />
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-secondary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary border-t border-primary-light">
              <a 
                href="#home" 
                className="hover:text-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faBuilding} className="mr-3" />
                Home
              </a>
              <a 
                href="#about" 
                className="hover:text-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faUsers} className="mr-3" />
                About
              </a>
              <a 
                href="#services" 
                className="hover:text-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faIndustry} className="mr-3" />
                Services
              </a>
              <a 
                href="#why-choose-us" 
                className="hover:text-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faAward} className="mr-3" />
                Why Choose Us
              </a>
              <a 
                href="#industries" 
                className="hover:text-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faCog} className="mr-3" />
                Industries
              </a>
              <a 
                href="#contact" 
                className="hover:text-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faPhone} className="mr-3" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Chandra Coaters – <span className="text-secondary">Premium CED Coating Services</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                At Chandra Coaters, we specialize in CED (Cathodic Electro-Deposition) Coating, 
                a modern, eco-friendly solution for protecting and enhancing metal components. 
                Our advanced facility, skilled team, and dedication to excellence ensure 
                world-class quality and customer satisfaction every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary text-primary font-semibold py-3 px-8 rounded-lg hover:bg-secondary-light transition-colors">
                  Get Quote
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
        <Image
                src="/factory-exterior.png"
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
            <h2 className="text-3xl font-bold text-primary mb-4">
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
                src="/coating-process.png"
                alt="Coating Process"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
                unoptimized
              />
            <Image
                src="/machinery-equipment.png"
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
            <h2 className="text-3xl font-bold text-primary mb-4">
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
                    className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-light transition-colors"
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
        <section className="py-16 bg-neutral-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
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

        {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
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
              <p className="text-neutral-dark">Industry-leading CED coating equipment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary text-3xl mb-4">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Superior Quality</h3>
              <p className="text-neutral-dark">We follow strict quality standards to ensure precision</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary text-3xl mb-4">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Best-in-Class Service</h3>
              <p className="text-neutral-dark">Timely delivery and excellent customer support</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary text-3xl mb-4">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Eco-Friendly Process</h3>
              <p className="text-neutral-dark">Sustainable, water-based coating technology</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary text-3xl mb-4">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Experienced Team</h3>
              <p className="text-neutral-dark">Skilled professionals who understand your needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary text-3xl mb-4">
                <FontAwesomeIcon icon={faClipboardCheck} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Quality Assurance</h3>
              <p className="text-neutral-dark">Rigorous testing and quality control processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
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
            <div className="bg-primary text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Custom Industrial Applications</h3>
              <p className="text-white/90">Specialized coating solutions for unique industrial requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 shadow-lg">
              <FontAwesomeIcon icon={faPhone} className="text-3xl text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
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
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Get In Touch</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                      <FontAwesomeIcon icon={faBuilding} className="text-lg text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-dark mb-1">Location</p>
                      <p className="text-neutral-dark">G-1 263 RIICO INDUSTRIAL AREA, KHUSKHERA</p>
                      <p className="text-neutral-dark">Pin Code: 301017</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                      <FontAwesomeIcon icon={faPhone} className="text-lg text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-dark mb-1">Phone</p>
                      <p className="text-neutral-dark">9414014400, 9315401040</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all duration-300">
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
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faClock} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-200">
                    <span className="text-neutral-dark">Monday - Friday</span>
                    <span className="font-semibold text-primary">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-200">
                    <span className="text-neutral-dark">Saturday</span>
                    <span className="font-semibold text-primary">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-200">
                    <span className="text-neutral-dark">Sunday</span>
                    <span className="font-semibold text-primary">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-neutral-light p-8 rounded-2xl shadow-xl border border-neutral-200">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
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
                    Project Details *
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

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-neutral-light p-8 rounded-2xl shadow-xl border border-neutral-200 inline-block">
              <h4 className="text-2xl font-bold text-primary mb-2">Ready to Get Started?</h4>
              <p className="text-neutral-dark mb-4">Join hundreds of satisfied customers who trust Chandra Coaters</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:9414014400" className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Call Now
                </a>
                <a href="mailto:chandracoaters@gmail.com" className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors">
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
              <h3 className="text-xl font-bold text-secondary mb-4">Chandra Coaters</h3>
              <p className="text-neutral-light mb-4">
                Leading provider of CED coating solutions for automotive and industrial applications.
              </p>
              <div className="flex space-x-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-secondary" />
                <FontAwesomeIcon icon={faPhone} className="text-secondary" />
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-secondary" />
              </div>
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
              className="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-primary-light transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
