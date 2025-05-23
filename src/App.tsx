import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter, Download, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const fadeInUpClass = "opacity-0 translate-y-10 transition-all duration-1000";
  const visibleClass = "opacity-100 translate-y-0";

  // Define projects with public folder paths
  const projects = [
    {
      title: "SAFEGUARD360",
      description: "A Flask-based surveillance tool using YOLOv8 and a custom audio classifier to detect violence and screams in real-time.",
      tech: ["Python", "Computer Vision", "Yolo", "API Integration"],
      repoLink: "https://github.com/vishnudev-p/SAFEGUARD360",
      image: "/3.png"
    },
    {
      title: "AI-FITNESS APP",
      description: "A Python-based desktop app using OpenCV to track exercises via webcam, aiming to provide secure login and real-time feedback for fitness enthusiasts.",
      tech: ["Python", "Open-CV", "pose estimation"],
      repoLink: "https://github.com/vishnudev-p/AI-FITNESS-APP",
      image: "/02.webp" // Fixed case from 02.WEBP
    },
    {
      title: "Comics Universe",
      description: "Comics Universe is a web-based comic reading platform developed as part of an MCA academic curriculum. It aims to make visual storytelling accessible and inclusive, especially for children in BUDS schools and students with disabilities.",
      tech: ["Flask", "HTML", "CSS", "JavaScript"],
      repoLink: "https://github.com/vishnudev-p/Comic-Book-Creation-and-Interactive-Website",
      image: "/01.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Vishnu Dev P
            </a>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-blue-400 transition-colors">Education</button>
              <button onClick={() => scrollToSection('certifications')} className="hover:text-blue-400 transition-colors">Certifications</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 hover:bg-gray-800">About</button>
              <button onClick={() => scrollToSection('education')} className="block w-full text-left px-4 py-2 hover:bg-gray-800">Education</button>
              <button onClick={() => scrollToSection('certifications')} className="block w-full text-left px-4 py-2 hover:bg-gray-800">Certifications</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 hover:bg-gray-800">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:bg-gray-800">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
          <div className={`flex-1 ${fadeInUpClass} ${isVisible['hero'] ? visibleClass : ''}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Hi, I'm Vishnu Dev P
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Aspire Machine Learning | Python Programmer | Developed ML Models | Proficient in AI Tools
            </p>
            <div className="flex gap-6 mb-8 justify-center md:justify-start">
              <a href="https://github.com/vishnudev-p" className="hover:text-blue-400 transition-colors transform hover:scale-110"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/vishnudevp/" className="hover:text-blue-400 transition-colors transform hover:scale-110"><Linkedin size={24} /></a>
              <a href="mailto:vishnudevp304@gmail.com" className="hover:text-blue-400 transition-colors transform hover:scale-110"><Mail size={24} /></a>
            </div>
            <a href="/VISHNU_DEV_P__RESUME.pdf" download className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:transform hover:scale-105">
              <Download size={20} /> Download Resume
            </a>
          </div>
          <div className={`flex-1 ${fadeInUpClass} ${isVisible['hero'] ? visibleClass : ''}`}>
            <img src="/IMG_8584.JPG" alt="Profile" className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-4 border-blue-400 animate-float" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-800 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`space-y-6 ${fadeInUpClass} ${isVisible['about'] ? visibleClass : ''}`}>
              <h3 className="text-2xl font-semibold text-blue-400">What I do</h3>
              <p className="text-gray-300">
                I am Vishnu Dev, a postgraduate student currently pursuing MCA at Calicut University, Kerala.
                My area of expertise includes Python, machine learning, and data science along with proficient knowledge of frameworks like TensorFlow and OpenCV.
                I am interested in building creative machine learning models and using data analytics to solve real-life problems.
                Throughout my studies, I have been applying my skills to develop meaningful solutions, and I look forward to progressing in AI and machine learning.
              </p>
            </div>
            <div className={`space-y-6 ${fadeInUpClass} ${isVisible['about'] ? visibleClass : ''}`}>
              <h3 className="text-2xl font-semibold text-blue-400">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg transform hover:scale-105 transition-transform">
                  <p className="font-semibold">Frontend</p>
                  <p className="text-gray-300">React, HTML, CSS</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg transform hover:scale-105 transition-transform">
                  <p className="font-semibold">Backend</p>
                  <p className="text-gray-300">Python, SQLite</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg transform hover:scale-105 transition-transform">
                  <p className="font-semibold">Machine Learning</p>
                  <p className="text-gray-300">YOLO, TensorFlow Lite, Keras, Computer Vision</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg transform hover:scale-105 transition-transform">
                  <p className="font-semibold">Tools</p>
                  <p className="text-gray-300">Git, VS Code, GPT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center justify-center container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Education</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className={`bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-all ${fadeInUpClass} ${isVisible['education'] ? visibleClass : ''}`}>
              <div className="flex items-start gap-6">
                <div className="bg-blue-500/10 w-20 h-20 flex items-center justify-center rounded-full overflow-hidden">
                  <img src="/download-photoaidcom-cropped.jpeg" alt="Lead College" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Master of Computer Application</h3>
                      <p className="text-blue-400">Lead College Of Management Autonomous</p>
                    </div>
                    <p className="text-gray-400">2024 - PRESENT</p>
                  </div>
                  <p className="text-gray-300">
                    I am currently pursuing my Master in Computer Application from Lead College of Management.
                  </p>
                </div>
              </div>
            </div>
            <div className={`bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-all ${fadeInUpClass} ${isVisible['education'] ? visibleClass : ''}`}>
              <div className="flex items-start gap-6">
                <div className="bg-blue-500/10 w-20 h-20 flex items-center justify-center rounded-full overflow-hidden">
                  <img src="/ijjurbqg.oz3.webp" alt="Calicut University" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Bachelor of Computer Application</h3>
                      <p className="text-blue-400">Calicut University</p>
                    </div>
                    <p className="text-gray-400">2021 - 2024</p>
                  </div>
                  <p className="text-gray-300">
                    I hold a Bachelor of Computer Applications (BCA) degree from the Computer Science Department at Calicut University. I completed my BCA at Sadanam Kumaran College, graduating from Calicut University with an impressive CGPA of 5.742.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex items-center justify-center container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://drive.google.com/file/d/1l65d_JXHtyl1BtAv-vMJhUE5YurBl8MO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-all cursor-pointer ${fadeInUpClass} ${isVisible['certifications'] ? visibleClass : ''}`}>
              <h3 className="text-xl font-semibold mb-2">Developer and Technology Job Simulation</h3>
              <p className="text-blue-400 mb-4">Accenture UK (via Forage)</p>
              <p className="text-gray-300">Completed the Developer and Technology Virtual Experience Programme, gaining practical skills in software development and technology solutions.</p>
              <p className="text-gray-400 mt-4">Issued: March 2025</p>
            </a>
            <a href="https://drive.google.com/file/d/11oC2bl4r_0YqhzsKRSEdVTlkxygX7_7V/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-all cursor-pointer ${fadeInUpClass} ${isVisible['certifications'] ? visibleClass : ''}`}>
              <h3 className="text-xl font-semibold mb-2">Career Essentials in Generative AI</h3>
              <p className="text-blue-400 mb-4">Microsoft and LinkedIn</p>
              <p className="text-gray-300">This course taught me topics such as Microsoft Copilot, responsible AI practices, prompt engineering, and how artificial intelligence can be effectively applied in business contexts.</p>
              <p className="text-gray-400 mt-4">Issued: May 2025</p>
            </a>
            <a href="https://drive.google.com/file/d/1QFlL-hUaF1oF_lS6yYOlU3XEb8gha4rL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-all cursor-pointer ${fadeInUpClass} ${isVisible['certifications'] ? visibleClass : ''}`}>
              <h3 className="text-xl font-semibold mb-2">Solutions Architecture Job Simulation</h3>
              <p className="text-blue-400 mb-4">Forage (in partnership with AWS APAC)</p>
              <p className="text-gray-300">Designed a scalable AWS Elastic Beanstalk architecture for a client with growth and performance issues, explaining solutions and costs clearly.</p>
              <p className="text-gray-400 mt-4">Issued: May 2025</p>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all ${fadeInUpClass} ${isVisible['projects'] ? visibleClass : ''}`}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-2 justify-center">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-500 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-40 min-h-screen">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className={`space-y-6 ${fadeInUpClass} ${isVisible['contact'] ? visibleClass : ''}`}>
            <div className="text-center">
              <p className="text-lg mb-4">
                <span className="font-medium">Email:</span> vishnudevp304@gmail.com
              </p>
              <p className="text-lg mb-4">
                <span className="font-medium">Phone:</span> 9061798516
              </p>
              <p className="text-lg mb-4">
                <span className="font-medium">Address:</span> PALAKKAD, KERALA, INDIA
              </p>
              <div className="flex justify-center space-x-6 mt-8">
                <a
                  href="https://github.com/vishnudev-p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all hover:transform hover:scale-110"
                  title="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vishnudevp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all hover:transform hover:scale-110"
                  title="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Vishnu Dev P. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
