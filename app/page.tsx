// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Palette,
  Settings,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  GiftIcon,
  LinkIcon,
  TimerIcon,
  Star,
  ArrowRight,
  Check,
  Menu,
  X,
  Sun,
  Moon,
  ExternalLink,
  Code,
  Database,
  Server,
  Cpu,
  Layers,
  Zap,
  Users,
  Award,
  TrendingUp,
  MessageSquare,
  Send,
} from "lucide-react";

// Theme Provider Context
const ThemeContext = React.createContext({
  isDark: true,
  toggleTheme: () => {},
});

import React from "react";

export default function ByteclassWebsite() {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", isDark ? "rgba(10,10,20,0.95)" : "rgba(255,255,255,0.95)"]
  );

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "technologies", "portfolio", "process", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-[#0a0a14]" : "bg-gray-50"}`}>
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] ${isDark ? "bg-blue-600/20" : "bg-blue-400/20"}`} />
          <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] ${isDark ? "bg-purple-600/20" : "bg-purple-400/20"}`} />
          <div className={`absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-[80px] ${isDark ? "bg-indigo-600/10" : "bg-indigo-400/10"}`} />
        </div>

        {/* Floating Tech Elements */}
        <FloatingElements isDark={isDark} />

        {/* Navigation */}
        <motion.header
          style={{ backgroundColor: headerBg }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/5"
        >
          <nav className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <Logo isDark={isDark} />
              </motion.div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-8">
                {["Home", "About", "Services", "Technologies", "Portfolio", "Process", "Testimonials", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-400"
                        : isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-all duration-300 ${isDark ? "bg-white/10 hover:bg-white/20 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Started
                </motion.button>

                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className={`lg:hidden p-2 ${isDark ? "text-white" : "text-gray-800"}`}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </nav>
        </motion.header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 lg:hidden"
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className={`absolute right-0 top-0 bottom-0 w-80 ${isDark ? "bg-[#12121f]" : "bg-white"} p-6`}
              >
                <div className="flex justify-between items-center mb-8">
                  <Logo isDark={isDark} />
                  <button onClick={() => setMobileMenuOpen(false)} className={isDark ? "text-white" : "text-gray-800"}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  {["Home", "About", "Services", "Technologies", "Portfolio", "Process", "Testimonials", "Contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`block w-full text-left py-3 text-lg font-medium ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? "bg-white/5 border border-white/10" : "bg-gray-100 border border-gray-200"} mb-8`}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>Available for new projects</span>
              </motion.div>

              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 ${isDark ? "text-white" : "text-gray-900"}`}>
                Transforming Ideas
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Into Digital Reality
                </span>
              </h1>

              <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Byteclass builds powerful web applications, mobile apps, AI solutions, and scalable software products for businesses worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("portfolio")}
                  className={`px-8 py-4 rounded-full font-semibold text-lg border-2 ${isDark ? "border-white/20 text-white hover:bg-white/10" : "border-gray-300 text-gray-800 hover:bg-gray-100"} transition-colors`}
                >
                  View Portfolio
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                {[
                  { value: "50+", label: "Projects Delivered", icon: TrendingUp },
                  { value: "20+", label: "Happy Clients", icon: Users },
                  { value: "99%", label: "Client Satisfaction", icon: Award },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`p-6 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200 shadow-lg"} backdrop-blur-sm`}
                  >
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                    <div className={`text-3xl md:text-4xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>{stat.value}</div>
                    <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`w-6 h-10 rounded-full border-2 ${isDark ? "border-white/20" : "border-gray-300"} flex justify-center pt-2`}
            >
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white" : "bg-gray-800"}`}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              isDark={isDark}
              badge="About Us"
              title="Building the Future of Technology"
              subtitle="We are a passionate team of developers, designers, and innovators dedicated to transforming businesses through technology."
            />

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className={`text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                  Why Choose Byteclass?
                </h3>
                <p className={`text-lg mb-8 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  At Byteclass, we don't just build software – we craft digital experiences that drive business growth. Our team combines technical excellence with creative innovation to deliver solutions that exceed expectations.
                </p>

                <div className="space-y-4">
                  {[
                    "Expert team with 10+ years of combined experience",
                    "Cutting-edge technologies and best practices",
                    "Transparent communication and agile delivery",
                    "Post-launch support and maintenance",
                    "Competitive pricing with flexible engagement models",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className={isDark ? "text-gray-300" : "text-gray-700"}>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { icon: Zap, title: "Our Mission", description: "To empower businesses with innovative technology solutions that drive growth and success." },
                  { icon: Globe, title: "Our Vision", description: "To be the leading software partner for businesses worldwide, known for excellence and innovation." },
                  { icon: Users, title: "Our Team", description: "A diverse group of talented engineers, designers, and strategists passionate about technology." },
                  { icon: Award, title: "Our Values", description: "Integrity, innovation, collaboration, and commitment to delivering exceptional results." },
                ].map((card, index) => (
                  <motion.div
                    key={card.title}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-6 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200 shadow-lg"} backdrop-blur-sm`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{card.title}</h4>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{card.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              isDark={isDark}
              badge="Our Services"
              title="Comprehensive Technology Solutions"
              subtitle="From concept to deployment, we provide end-to-end services to bring your digital vision to life."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              {[
                {
                  icon: Globe,
                  title: "Web Development",
                  description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
                  features: ["Business Websites", "E-commerce Platforms", "Web Applications"],
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Smartphone,
                  title: "App Development",
                  description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
                  features: ["Android Apps", "iOS Apps", "Cross-platform Apps"],
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  icon: Brain,
                  title: "AI Solutions",
                  description: "Intelligent solutions powered by machine learning and AI to automate and enhance your business processes.",
                  features: ["AI Integrations", "Chatbots", "Automation Systems"],
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  icon: Layers,
                  title: "SaaS Development",
                  description: "Scalable software-as-a-service products designed for growth and enterprise-level performance.",
                  features: ["Custom SaaS Products", "Dashboards", "Enterprise Solutions"],
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: Palette,
                  title: "UI/UX Design",
                  description: "User-centered design that combines aesthetics with functionality for exceptional digital experiences.",
                  features: ["User Research", "Wireframing", "Prototyping"],
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  icon: Cloud,
                  title: "Cloud & DevOps",
                  description: "Cloud infrastructure and DevOps solutions for reliable, scalable, and secure deployments.",
                  features: ["Cloud Deployment", "CI/CD Pipelines", "Infrastructure Management"],
                  gradient: "from-indigo-500 to-blue-500",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`group p-8 rounded-3xl ${isDark ? "bg-white/5 border border-white/10 hover:bg-white/10" : "bg-white border border-gray-200 hover:shadow-2xl"} backdrop-blur-sm transition-all duration-300`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>{service.title}</h3>
                  <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        <ChevronRight className={`w-4 h-4 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="relative py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              isDark={isDark}
              badge="Our Stack"
              title="Technologies We Master"
              subtitle="We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-20">
              {[
                { category: "Frontend", icon: Code, techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"], color: "from-blue-500 to-cyan-500" },
                { category: "Backend", icon: Server, techs: ["Node.js", "Express", "Python", "FastAPI"], color: "from-green-500 to-emerald-500" },
                { category: "Database", icon: Database, techs: ["PostgreSQL", "MongoDB", "Firebase", "Redis"], color: "from-purple-500 to-pink-500" },
                { category: "Cloud", icon: Cloud, techs: ["AWS", "Docker", "Vercel", "Kubernetes"], color: "from-orange-500 to-red-500" },
                { category: "AI", icon: Cpu, techs: ["OpenAI", "Claude", "LangChain", "TensorFlow"], color: "from-indigo-500 to-blue-500" },
              ].map((stack, index) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200 shadow-lg"} backdrop-blur-sm`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stack.color} flex items-center justify-center mb-4`}>
                    <stack.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>{stack.category}</h3>
                  <div className="space-y-2">
                    {stack.techs.map((tech) => (
                      <div
                        key={tech}
                        className={`px-3 py-2 rounded-lg text-sm ${isDark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="relative py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              isDark={isDark}
              badge="Our Work"
              title="Featured Projects"
              subtitle="Explore our portfolio of successful projects that have helped businesses achieve their digital goals."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              {[
                {
                  title: "E-commerce Platform",
                  description: "A full-featured e-commerce solution with advanced inventory management and payment processing.",
                  techs: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
                  image: "ecommerce",
                  color: "from-blue-600 to-purple-600",
                },
                {
                  title: "AI Customer Support",
                  description: "Intelligent chatbot system that handles customer queries with 95% accuracy using NLP.",
                  techs: ["Python", "OpenAI", "FastAPI", "React"],
                  image: "ai-support",
                  color: "from-purple-600 to-pink-600",
                },
                {
                  title: "Food Delivery App",
                  description: "Cross-platform mobile app with real-time tracking and seamless payment integration.",
                  techs: ["React Native", "Node.js", "MongoDB", "Firebase"],
                  image: "food-app",
                  color: "from-orange-500 to-red-500",
                },
                {
                  title: "School Management System",
                  description: "Comprehensive ERP solution for educational institutions with multiple modules.",
                  techs: ["React", "Express", "PostgreSQL", "AWS"],
                  image: "school-erp",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Healthcare Dashboard",
                  description: "HIPAA-compliant patient management system with advanced analytics and reporting.",
                  techs: ["Next.js", "Python", "MongoDB", "Docker"],
                  image: "healthcare",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  title: "SaaS Analytics Platform",
                  description: "Enterprise analytics solution with real-time data visualization and custom reporting.",
                  techs: ["React", "Node.js", "PostgreSQL", "Redis"],
                  image: "analytics",
                  color: "from-indigo-500 to-purple-500",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`group rounded-3xl overflow-hidden ${isDark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200 shadow-lg"} backdrop-blur-sm`}
                >
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-24 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <button className="px-6 py-3 bg-white rounded-full text-gray-900 font-semibold flex items-center gap-2">
                        View Demo <ExternalLink className="w-4 h-4" />
                      </button>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
                    <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs rounded-full ${isDark ? "bg-white/10 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="relative py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              isDark={isDark}
              badge="Our Process"
              title="How We Work"
              subtitle="A proven methodology that ensures successful project delivery every time."
            />

            <div className="relative mt-20">
              {/* Timeline Line */}
              <div className={`absolute left-1/2 top-0 bottom-0 w-0.5 ${isDark ? "bg-white/10" : "bg-gray-200"} hidden lg:block`} />

              <div className="space-y-12 lg:space-y-0">
                {[
                  { step: 1, title: "Discovery", description: "Understanding your business goals, target audience, and project requirements through in-depth consultation.", icon: MessageSquare },
                  { step: 2, title: "Planning", description: "Creating detailed project roadmap, technical architecture, and timeline with clear milestones.", icon: Settings },
                  { step: 3, title: "Design", description: "Crafting intuitive UI/UX designs that align with your brand and delight your users.", icon: Palette },
                  { step: 4, title: "Development", description: "Building your solution using agile methodology with regular updates and feedback loops.", icon: Code },
                  { step: 5, title: "Testing", description: "Rigorous quality assurance to ensure your product is bug-free and performs flawlessly.", icon: Check },
                  { step: 6, title: "Launch", description: "Deploying your solution and providing comprehensive support for a successful launch.", icon: Zap },
                ].map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : "lg:text-left"}`}>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"} text-sm font-medium mb-4`}>
                        Step {process.step}
                      </div>
                      <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>{process.title}</h3>
                      <p className={isDark ? "text-gray-400" : "text-gray-600"}>{process.description}</p>
                    </div>
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/25"
                      >
                        <process.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              isDark={isDark}
              badge="Testimonials"
              title="What Our Clients Say"
              subtitle="Don't just take our word for it – hear from the businesses we've helped succeed."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart Inc.",
                  content: "Byteclass transformed our vision into a stunning reality. Their team's expertise in AI integration helped us automate 70% of our customer support.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "Founder, FoodieApp",
                  content: "The mobile app they built exceeded all expectations. Downloads increased by 300% within the first month of launch. Highly recommended!",
                  rating: 5,
                },
                {
                  name: "Emily Rodriguez",
                  role: "CTO, HealthPlus",
                  content: "Working with Byteclass was a game-changer. They delivered a HIPAA-compliant healthcare platform that our patients and staff love using.",
                  rating: 5,
                },
                {
                  name: "David Park",
                  role: "Director, EduLearn",
                  content: "The school management system has revolutionized how we operate. Administrative tasks that took hours now take minutes.",
                  rating: 5,
                },
                {
                  name: "Lisa Thompson",
                  role: "VP Engineering, RetailMax",
                  content: "Their e-commerce solution helped us increase online sales by 250%. The team's attention to detail and technical skills are exceptional.",
                  rating: 5,
                },
                {
                  name: "James Wilson",
                  role: "CEO, DataDriven",
                  content: "Byteclass built us a SaaS analytics platform that our enterprise clients love. Their expertise in scalable architecture is impressive.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 rounded-3xl ${isDark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200 shadow-lg"} backdrop-blur-sm`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className={`mb-6 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{testimonial.name}</h4>
                      <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              isDark={isDark}
              badge="Contact Us"
              title="Let's Build Something Amazing"
              subtitle="Ready to start your next project? Get in touch with us today."
            />

            <div className="grid lg:grid-cols-2 gap-16 mt-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-2xl font-bold mb-8 ${isDark ? "text-white" : "text-gray-900"}`}>Get In Touch</h3>
                
                <div className="space-y-6 mb-12">
                  {[
                    { icon: Mail, label: "Email", value: "hello@byteclass.com" },
                    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
                  ].map((contact) => (
                    <div key={contact.label} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${isDark ? "bg-white/10" : "bg-gray-100"} flex items-center justify-center`}>
                        <contact.icon className={`w-6 h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                      </div>
                      <div>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{contact.label}</p>
                        <p className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Follow Us</h4>
                <div className="flex gap-4">
                  {[TimerIcon, LinkIcon,  GiftIcon].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200"} flex items-center justify-center transition-colors`}
                    >
                      <Icon className={`w-5 h-5 ${isDark ? "text-gray-300" : "text-gray-600"}`} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>First Name</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl ${isDark ? "bg-white/5 border-white/10 text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"} border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors`}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Last Name</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl ${isDark ? "bg-white/5 border-white/10 text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"} border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors`}
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Email</label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 rounded-xl ${isDark ? "bg-white/5 border-white/10 text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"} border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors`}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Project Type</label>
                    <select
                      className={`w-full px-4 py-3 rounded-xl ${isDark ? "bg-white/5 border-white/10 text-white" : "bg-white border-gray-300 text-gray-900"} border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors`}
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="ai">AI Solutions</option>
                      <option value="saas">SaaS Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="cloud">Cloud & DevOps</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Message</label>
                    <textarea
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl ${isDark ? "bg-white/5 border-white/10 text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"} border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none`}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-16 border-t ${isDark ? "border-white/10" : "border-gray-200"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <Logo isDark={isDark} />
                <p className={`mt-4 max-w-md ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Building powerful digital solutions that transform businesses and drive growth. Partner with us to bring your vision to life.
                </p>
              </div>
              <div>
                <h4 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Quick Links</h4>
                <ul className="space-y-3">
                  {["About", "Services", "Portfolio", "Contact"].map((link) => (
                    <li key={link}>
                      <button
                        onClick={() => scrollToSection(link.toLowerCase())}
                        className={`${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Services</h4>
                <ul className="space-y-3">
                  {["Web Development", "App Development", "AI Solutions", "Cloud Services"].map((service) => (
                    <li key={service}>
                      <span className={isDark ? "text-gray-400" : "text-gray-600"}>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`pt-8 border-t ${isDark ? "border-white/10" : "border-gray-200"} flex flex-col md:flex-row justify-between items-center gap-4`}>
              <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                © 2025 Byteclass. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className={`text-sm ${isDark ? "text-gray-500 hover:text-white" : "text-gray-500 hover:text-gray-900"} transition-colors`}>Privacy Policy</a>
                <a href="#" className={`text-sm ${isDark ? "text-gray-500 hover:text-white" : "text-gray-500 hover:text-gray-900"} transition-colors`}>Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("contact")}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25 z-40"
        >
          <MessageSquare className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </ThemeContext.Provider>
  );
}

// Logo Component
function Logo({ isDark }: { isDark: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl rotate-6" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">B</span>
        </div>
      </div>
      <span className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
        Byte<span className="text-blue-500">class</span>
      </span>
    </div>
  );
}

// Section Header Component
function SectionHeader({ isDark, badge, title, subtitle }: { isDark: boolean; badge: string; title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"}`}>
        {badge}
      </span>
      <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
        {title}
      </h2>
      <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
        {subtitle}
      </p>
    </motion.div>
  );
}

// Floating Elements Component
function FloatingElements({ isDark }: { isDark: boolean }) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className={`absolute w-2 h-2 rounded-full ${isDark ? "bg-blue-400/30" : "bg-blue-500/20"}`}
        />
      ))}
    </div>
  );
}
