import { useState } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    city: '',
    message: '',
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openEnquiryModal = (e) => {
    if (e) e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsSubmitted(false);
    setIsEnquiryOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="app-container">
      {/* ==========================================
          1. NAVBAR SECTION
          ========================================== */}
      <header className="header">
        <div className="container">
          <nav className="navbar" aria-label="Main Navigation">
            {/* Logo Lockup */}
            <a href="#home" className="logo-link">
              <svg 
                className="logo-icon" 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 10v3c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-3" />
                <path d="M12 2v8" />
                <path d="M12 2C7 2 4 4 4 7c0 3 3 3 8 3s8 0 8-3c0-3-3-5-8-5Z" />
                <path d="M6 14v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4" />
              </svg>
              <div className="logo-text">
                <span className="logo-title">ASTHA</span>
                <span className="logo-subtitle">PARA MEDICAL COLLEGE</span>
              </div>
            </a>

            {/* Navigation Links */}
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li className="nav-item active"><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
              <li className="nav-item"><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
              <li className="nav-item"><a href="#courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</a></li>
              <li className="nav-item"><a href="#clinical-training" onClick={() => setIsMobileMenuOpen(false)}>Clinical Training</a></li>
              <li className="nav-item"><a href="#facilities" onClick={() => setIsMobileMenuOpen(false)}>Facilities</a></li>
              <li className="nav-item"><a href="#faculty" onClick={() => setIsMobileMenuOpen(false)}>Faculty</a></li>
              <li className="nav-item"><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
              
              {/* Mobile CTA */}
              <li className="nav-cta-mobile" style={{ display: 'none' }}>
                <a href="#admissions" className="btn btn-teal" onClick={openEnquiryModal}>
                  Apply for Admission <span className="btn-arrow">→</span>
                </a>
              </li>
            </ul>

            {/* Desktop CTA Button */}
            <div className="nav-cta">
              <a href="#admissions" className="btn btn-teal" onClick={openEnquiryModal}>
                Apply for Admission <span className="btn-arrow">→</span>
              </a>
            </div>

            {/* Hamburger Button for Mobile */}
            <button 
              className="navbar-toggle" 
              onClick={toggleMobileMenu} 
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* ==========================================
          2. HERO SECTION — FLEX LAYOUT RESTRUCTURE
          ========================================== */}
      <section id="home" className="hero-section-rebuilt">
        <div className="hero-bg-media">
          <img
            src="/images/hero_cropped.jpg"
            alt="Healthcare professionals standing outside campus building"
            className="hero-bg-img"
          />
        </div>
        <div className="container hero-flex-container">
          <div className="hero-left-content">
            <h1 className="hero-headline">
              Shape the Future of Healthcare <span className="text-teal">with Excellence</span>
            </h1>
            <p className="hero-description">
              Welcome to Astha Para Medical College, where aspiring healthcare professionals receive quality education, practical exposure, and the foundation for a successful career.
            </p>
            <div className="hero-ctas">
              <a href="#admissions" className="btn btn-teal" onClick={openEnquiryModal}>
                Apply for Admission <span className="btn-arrow">→</span>
              </a>
              <a href="#courses" className="btn btn-outline-navy">
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. ABOUT SECTION — REBUILT ASYMMETRICAL 60/40
          ========================================== */}
      <section id="about" className="about-section-rebuilt">
        <div className="container about-flex-container">
          <div className="about-image-wrapper">
            <img
              src="/images/about_building.jpg"
              alt="Astha Para Medical College Main Campus Complex"
              className="about-bg-img"
            />
          </div>
          <div className="about-content">
            <span className="about-subtitle">About the Institute</span>
            <h2 className="about-headline">Welcome to Astha Para Medical College</h2>
            <p className="about-text-dense">
              Astha Para Medical College is a premier academic institution dedicated to preparing compassionate, highly skilled healthcare professionals. Established with a commitment to excellence and professional ethics, the college provides specialized training in auxiliary nursing and allied medical sciences. 
            </p>
            <p className="about-text-dense">
              Our comprehensive curriculum combines rigorous classroom instruction with extensive clinical exposure, ensuring that students develop solid clinical competencies, critical thinking abilities, and patient care skills necessary to excel in the global healthcare sector.
            </p>
            
            {/* Flat 2x2 Features Grid */}
            <div className="about-features-grid">
              <div className="about-feature-card">
                <svg className="about-feature-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 22h20" />
                  <path d="M12 2v20" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span className="about-feature-label">Experienced Faculty</span>
              </div>
              <div className="about-feature-card">
                <svg className="about-feature-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m12 14 4-4" />
                  <path d="m3.34 19 8.66-14 8.66 14H3.34Z" />
                </svg>
                <span className="about-feature-label">Practical Learning</span>
              </div>
              <div className="about-feature-card">
                <svg className="about-feature-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="8" height="18" x="3" y="3" rx="1" />
                  <rect width="8" height="10" x="13" y="3" rx="1" />
                </svg>
                <span className="about-feature-label">Modern Infrastructure</span>
              </div>
              <div className="about-feature-card">
                <svg className="about-feature-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M3 21v-2a7 7 0 0 1 14 0v2" />
                </svg>
                <span className="about-feature-label">Student-Centered Education</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3B. WHY CHOOSE US (STANDARDIZED CONTAINER)
          ========================================== */}
      <section className="why-choose-section">
        <div className="container text-center">
          <span className="section-tagline">Why Choose Astha Para Medical College?</span>
          <h2 className="section-headline">Empowering the Healthcare Leaders of Tomorrow</h2>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <span className="why-title">Quality Education</span>
            </div>

            <div className="why-card">
              <div className="why-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </div>
              <span className="why-title">Experienced Faculty</span>
            </div>

            <div className="why-card">
              <div className="why-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="why-title">Clinical Training</span>
            </div>

            <div className="why-card">
              <div className="why-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="why-title">Modern Campus</span>
            </div>

            <div className="why-card">
              <div className="why-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                </svg>
              </div>
              <span className="why-title">Career Guidance</span>
            </div>

            <div className="why-card">
              <div className="why-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                  <path d="M12 7v10" />
                </svg>
              </div>
              <span className="why-title">Holistic Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. COURSES OFFERED SECTION
          ========================================== */}
      <section id="courses" className="courses-section">
        <div className="container text-center">
          <span className="section-tagline">Courses Offered</span>
          <h2 className="section-headline">Build Your Career in Nursing</h2>
          
          <div className="courses-grid">
            {/* ANM Card */}
            <div className="course-card teal-theme">
              <div className="course-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z" />
                  <path d="M12 10v10" />
                  <path d="M6 17c0-2 2-3 6-3s6 1 6 3v4H6v-4Z" />
                </svg>
              </div>
              <h3 className="course-title">Auxiliary Nurse Midwife (ANM)</h3>
              <ul className="course-checklist">
                <li className="course-check-item">
                  <svg className="course-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Comprehensive nursing foundation</span>
                </li>
                <li className="course-check-item">
                  <svg className="course-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Practical clinical exposure</span>
                </li>
                <li className="course-check-item">
                  <svg className="course-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Community healthcare training</span>
                </li>
                <li className="course-check-item">
                  <svg className="course-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Career-focused curriculum</span>
                </li>
              </ul>
              <a href="#contact" className="btn btn-teal">
                Learn More <span className="btn-arrow">→</span>
              </a>
            </div>

            {/* B.Sc Nursing Card */}
            <div className="course-card blue-theme">
              <div className="course-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  <circle cx="12" cy="11" r="3" />
                  <path d="m12 14 2 2" />
                </svg>
              </div>
              <h3 className="course-title">Bachelor of Science in Nursing (B.Sc Nursing)</h3>
              <ul className="course-checklist">
                <li className="course-check-item">
                  <svg className="course-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Advanced nursing education</span>
                </li>
                <li className="course-check-item">
                  <svg className="course-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Hospital-based practical training</span>
                </li>
                <li className="course-check-item">
                  <svg className="course-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Research-oriented learning</span>
                </li>
                <li className="course-check-item">
                  <svg className="course-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Excellent career opportunities</span>
                </li>
              </ul>
              <a href="#contact" className="btn btn-teal" style={{ backgroundColor: 'var(--color-blue)' }}>
                Learn More <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          5. CLINICAL TRAINING SECTION
          ========================================== */}
      <section id="clinical-training" className="clinical-training-section">
        <div className="clinical-bg-media">
          <img
            src="/images/clinical_bedside.jpg"
            alt="Nursing students practicing bedside clinical procedures on an arm trainer"
            className="clinical-bg-img"
          />
        </div>
        <div className="container clinical-flex-container">
          <div className="clinical-content">
            <span className="section-tagline">Practical Clinical Exposure</span>
            <h2 className="clinical-headline">Clinical Training & Bedside Experience</h2>
            <p className="clinical-text">
              Healthcare education is best delivered through hands-on practice. Our students undergo rigorous clinical training at leading partner hospitals, gaining real bedside experience, patient care practice, and specialized training on medical equipment under expert supervision.
            </p>
            
            <div className="clinical-highlights-list">
              <div className="clinical-highlight-item">
                <div className="clinical-highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Direct patient interaction and bedside care training</span>
              </div>
              <div className="clinical-highlight-item">
                <div className="clinical-highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Supervised training in multi-specialty hospital wards</span>
              </div>
              <div className="clinical-highlight-item">
                <div className="clinical-highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Hands-on practice on IV infusion and patient monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          5B. LEARN BY DOING BANNER (TRANSITION ZONE)
          ========================================== */}
      <section className="learn-doing-section">
        <div className="learn-doing-bg-media">
          <img
            src="/images/mannequin_demo.jpg"
            alt="Nursing students gathering around a training mannequin listening to a demonstration"
            className="learn-doing-bg-img"
          />
        </div>
        <div className="container learn-doing-flex-container">
          <div className="learn-doing-content">
            <div className="learn-doing-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M12 6v6" />
              </svg>
            </div>
            <h2 className="learn-doing-title">Learn by Doing</h2>
            <p className="learn-doing-text">
              We believe healthcare education is best delivered through a balance of classroom learning, practical demonstrations, laboratory sessions, and real-world clinical exposure.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          6. ADMISSION PROCESS & CTA BANNER
          ========================================== */}
      <section id="admissions" className="admission-cta-section">
        <div className="container">
          {/* Integrated Timeline */}
          <div className="cta-timeline-wrapper">
            <span className="section-tagline">Enrollment Pathway</span>
            <h2 className="cta-timeline-headline">Admission Process</h2>

            <div className="timeline-container">
              <div className="timeline-step">
                <div className="timeline-icon-wrapper timeline-icon-teal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                  </svg>
                </div>
                <div className="timeline-step-content">
                  <span className="timeline-step-meta">Step 1</span>
                  <h4 className="timeline-step-title">Submit Application</h4>
                </div>
              </div>

              <div className="timeline-dots" aria-hidden="true"></div>

              <div className="timeline-step">
                <div className="timeline-icon-wrapper timeline-icon-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                </div>
                <div className="timeline-step-content">
                  <span className="timeline-step-meta">Step 2</span>
                  <h4 className="timeline-step-title">Document Verification</h4>
                </div>
              </div>

              <div className="timeline-dots" aria-hidden="true"></div>

              <div className="timeline-step">
                <div className="timeline-icon-wrapper timeline-icon-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <polyline points="16 11 18 13 22 9" />
                  </svg>
                </div>
                <div className="timeline-step-content">
                  <span className="timeline-step-meta">Step 3</span>
                  <h4 className="timeline-step-title">Admission Confirmation</h4>
                </div>
              </div>

              <div className="timeline-dots" aria-hidden="true"></div>

              <div className="timeline-step">
                <div className="timeline-icon-wrapper timeline-icon-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <div className="timeline-step-content">
                  <span className="timeline-step-meta">Step 4</span>
                  <h4 className="timeline-step-title">Begin Your Journey</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          7. FACILITIES SECTION
          ========================================== */}
      <section id="facilities" className="facilities-section">
        <div className="container text-center">
          <span className="section-tagline">Academic Infrastructure</span>
          <h2 className="section-headline">Our Modern College Facilities</h2>
          
          <div className="facilities-grid">
            {/* Facility 1: Nursing Lab */}
            <div className="facility-card">
              <div className="facility-image-wrapper">
                <img 
                  src="/images/mannequin_demo.jpg" 
                  alt="Nursing lab equipped with simulation mannequin and learning charts" 
                  className="facility-img"
                />
              </div>
              <div className="facility-info">
                <h4 className="facility-title">Nursing Simulation Lab</h4>
                <p className="facility-desc">Fully equipped lab containing clinical training mannequins, CPR models, and bedside equipment.</p>
              </div>
            </div>

            {/* Facility 2: Classroom */}
            <div className="facility-card">
              <div className="facility-image-wrapper">
                <img 
                  src="/images/classroom_lecture.jpg" 
                  alt="Spacious lecture hall with rows of student desks and learning boards" 
                  className="facility-img"
                />
              </div>
              <div className="facility-info">
                <h4 className="facility-title">Smart Lecture Halls</h4>
                <p className="facility-desc">Ventilated, spacious classrooms with audio-visual setups for digital presentations and interactive learning.</p>
              </div>
            </div>

            {/* Facility 3: Library */}
            <div className="facility-card">
              <div className="facility-image-wrapper">
                <img
                  src="/images/library.jpg"
                  alt="Institutional library with rows of bookshelves stocked with medical text books and journals"
                  className="facility-img"
                />
              </div>
              <div className="facility-info">
                <h4 className="facility-title">Institutional Library</h4>
                <p className="facility-desc">Comprehensive repository of medical text books, journals, nursing publications, and reference materials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          8. FACULTY SECTION
          ========================================== */}
      <section id="faculty" className="faculty-section">
        <div className="faculty-bg-media">
          <img
            src="/images/doctors_group.jpg"
            alt="Doctors and professors from medical faculty standing together in white coats"
            className="faculty-bg-img"
          />
        </div>
        <div className="container faculty-flex-container">
          <div className="faculty-content">
            <span className="section-tagline">Academic Mentorship</span>
            <h2 className="faculty-headline">Learn from Experienced Medical Practitioners</h2>
            <p className="faculty-text">
              Our faculty consists of doctors, veteran nurses, and clinical experts dedicated to nurturing the next generation of healthcare workers. We provide student-centric instruction, mentoring, and support to prepare you for the real-world healthcare ecosystem.
            </p>
            
            <div className="faculty-stats">
              <div className="faculty-stat-item">
                <span className="faculty-stat-number">15+</span>
                <span className="faculty-stat-label">Doctors & Specialists on Board</span>
              </div>
              <div className="faculty-stat-item">
                <span className="faculty-stat-number">100%</span>
                <span className="faculty-stat-label">Placement Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          8B. PRE-FOOTER CTA BANNER
          ========================================== */}
      <section className="prefooter-cta-section">
        <div className="container prefooter-cta-content">
          <h2 className="admission-cta-title">Begin Your Journey in Healthcare Today</h2>
          <p className="admission-cta-desc">
            Take the first step toward a rewarding career in nursing. Admissions are currently open for ANM and B.Sc Nursing programs.
          </p>
          <div className="admission-cta-buttons">
            <a href="#admissions" className="btn btn-teal" onClick={openEnquiryModal}>
              Apply Now <span className="btn-arrow">→</span>
            </a>
            <a href="tel:+911234567890" className="btn btn-outline-navy">
              Contact Admissions 📞
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          9. FOOTER SECTION
          ========================================== */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Logo & Tagline */}
            <div className="footer-col">
              <a href="#home" className="footer-logo-link">
                <svg className="logo-icon" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 10v3c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-3" />
                  <path d="M12 2v8" />
                  <path d="M12 2C7 2 4 4 4 7c0 3 3 3 8 3s8 0 8-3c0-3-3-5-8-5Z" />
                  <path d="M6 14v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4" />
                </svg>
                <div className="footer-logo-text">
                  <span className="footer-logo-title">ASTHA</span>
                  <span className="footer-logo-subtitle">PARA MEDICAL COLLEGE</span>
                </div>
              </a>
              <p className="footer-tagline">
                Empowering future healthcare professionals through quality education, practical learning, and real-world clinical experience.
              </p>
              <div className="footer-social-links">
                <a href="https://facebook.com" className="footer-social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://twitter.com" className="footer-social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a href="https://instagram.com" className="footer-social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://linkedin.com" className="footer-social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                <li className="footer-link-item"><a href="#home">Home</a></li>
                <li className="footer-link-item"><a href="#about">About</a></li>
                <li className="footer-link-item"><a href="#courses">Courses</a></li>
                <li className="footer-link-item"><a href="#clinical-training">Clinical Training</a></li>
                <li className="footer-link-item"><a href="#facilities">Facilities</a></li>
                <li className="footer-link-item"><a href="#faculty">Faculty</a></li>
              </ul>
            </div>

            {/* Col 3: Courses */}
            <div className="footer-col">
              <h4 className="footer-col-title">Courses</h4>
              <ul className="footer-links">
                <li className="footer-link-item"><a href="#courses">ANM (Auxiliary Nurse Midwife)</a></li>
                <li className="footer-link-item"><a href="#courses">B.Sc Nursing</a></li>
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="footer-contact-info">
                <li className="footer-contact-item">
                  <svg className="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 1234567890</span>
                </li>
                <li className="footer-contact-item">
                  <svg className="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>info@asthaparamedical.edu.in</span>
                </li>
                <li className="footer-contact-item">
                  <svg className="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Astha Para Medical College,<br />Varanasi, Uttar Pradesh - 221005</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Astha Para Medical College. All Rights Reserved.
            </p>
            <div className="footer-legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ==========================================
          10. ADMISSION ENQUIRY MODAL
          ========================================== */}
      {isEnquiryOpen && (
        <div className="modal-overlay" onClick={closeEnquiryModal}>
          <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
            <div className="enquiry-modal-header">
              <div className="enquiry-modal-header-left">
                <div className="enquiry-modal-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="enquiry-modal-title">Admission Enquiry Form</h3>
                  <p className="enquiry-modal-subtitle">Astha Para Medical College — 2026–27</p>
                </div>
              </div>
              <button type="button" className="enquiry-modal-close" onClick={closeEnquiryModal}>
                Close
              </button>
            </div>

            <div className="enquiry-modal-body">
              {isSubmitted ? (
                <div className="enquiry-success">
                  <div className="enquiry-success-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h4>Thank you, {formData.fullName.split(' ')[0] || 'there'}!</h4>
                  <p>Your enquiry has been received. Our admissions team will get back to you shortly.</p>
                  <button type="button" className="btn btn-teal" onClick={closeEnquiryModal}>
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name <span className="form-required">*</span></label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className="form-input"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address <span className="form-required">*</span></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number <span className="form-required">*</span></label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="course">Course Interested In <span className="form-required">*</span></label>
                    <select
                      id="course"
                      name="course"
                      className="form-input form-select"
                      value={formData.course}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select a course</option>
                      <option value="anm">ANM (Auxiliary Nurse Midwife)</option>
                      <option value="bsc-nursing">B.Sc Nursing</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="city">City / State</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      className="form-input"
                      placeholder="Your city or state"
                      value={formData.city}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message / Questions</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input form-textarea"
                      placeholder="Any specific questions or details you'd like to share..."
                      rows="4"
                      value={formData.message}
                      onChange={handleFormChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-teal enquiry-submit-btn">
                    Submit Enquiry <span className="btn-arrow">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
