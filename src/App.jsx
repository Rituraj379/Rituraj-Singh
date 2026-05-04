import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "What I Do" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const workAreas = [
  {
    icon: "⚡",
    title: "Full-Stack Product Development",
    description:
      "Build complete web applications from pixel-perfect frontend UI to robust backend APIs and database workflows.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "var(--accent-pink)",
  },
  {
    icon: "🔧",
    title: "API & Backend Engineering",
    description:
      "Design scalable REST APIs, authentication flows, and modular server architecture for real-world use cases.",
    tags: ["Express.js", "REST APIs", "Auth"],
    color: "var(--accent-blue)",
  },
  {
    icon: "🧠",
    title: "Machine Learning & NLP",
    description:
      "Apply Data Science fundamentals to build predictive models and intelligent features using text and multimodal pipelines.",
    tags: ["Data Science", "Deep Learning", "NLP"],
    color: "var(--accent-purple)",
  },
  {
    icon: "🖥️",
    title: "Systems & Performance Engineering",
    description:
      "Develop low-level systems with C++, sockets, multithreading, and performance-focused thinking.",
    tags: ["C++", "TCP", "Multithreading"],
    color: "var(--accent-green)",
  },
];

const skillGroups = [
  {
    icon: "💻",
    title: "Languages",
    tags: ["Java", "C++", "Python", "JavaScript"],
    color: "var(--accent-blue)",
  },
  {
    icon: "🌐",
    title: "Web Development",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Vite", "Tailwind CSS", "REST APIs"],
    color: "var(--accent-pink)",
  },
  {
    icon: "🏗️",
    title: "Core CS",
    tags: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"],
    color: "var(--accent-purple)",
  },
  {
    icon: "📊",
    title: "Data Science & AI",
    tags: ["EDA", "NumPy", "Pandas", "ML", "DL", "NLP", "RNN"],
    color: "var(--accent-green)",
  },
];

const portfolioProjects = [
  {
    kind: "Full Stack",
    title: "Glimpse Visual Sharing App",
    description:
      "A Pinterest-inspired platform with Google auth, image sharing, comments, and a Gemini AI assistant.",
    gradient: "linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)",
    accent: "#f84288",
    emoji: "🖼️",
    links: [
      { label: "🚀 Live Demo", href: "https://glimpse-v-isual-sharing-app.vercel.app" },
      { label: "📂 Code", href: "https://github.com/Rituraj379/Glimpse-VIsual-Sharing-App-" },
    ],
    tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
  },
  {
    kind: "Systems",
    title: "Redix — Redis Clone",
    description:
      "Lightweight in-memory key-value store in C++ with RESP parser, streams, and leader-follower replication.",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    accent: "#38bdf8",
    emoji: "⚙️",
    links: [{ label: "📂 Code", href: "https://github.com/Rituraj379/Redix" }],
    tech: ["C++", "TCP/IP", "RESP Protocol", "Multithreading"],
  },
  {
    kind: "AI & ML",
    title: "Smart Product Pricing Model",
    description:
      "Multimodal price prediction system combining textual and visual features from 50k+ product records.",
    gradient: "linear-gradient(135deg, #0a2e0a 0%, #1a4a1a 50%, #2d6a2d 100%)",
    accent: "#4ade80",
    emoji: "🤖",
    links: [{ label: "📂 Code", href: "https://github.com/Rituraj379/Item-Price-Predictor-Model" }],
    tech: ["Python", "TensorFlow", "NLP", "Computer Vision"],
  },
];

const achievementItems = [
  {
    icon: "🏆",
    category: "Competitive Programming",
    title: "600+ Problems Solved",
    description: "Across LeetCode, Codeforces, and GeeksforGeeks.",
    color: "var(--accent-pink)",
  },
  {
    icon: "🎯",
    category: "JEE Main",
    title: "AIR 17,543 — 98.48 Percentile",
    description: "Ranked among 1.2M+ candidates nationwide.",
    color: "var(--accent-blue)",
  },
  {
    icon: "📚",
    category: "Data Science Coursework",
    title: "ML, DL & NLP Certification Track",
    description:
      "Completed coursework covering Python, ML, Deep Learning, and NLP with practical model-building experience.",
    color: "var(--accent-purple)",
  },
  {
    icon: "🤝",
    category: "Leadership & Volunteering",
    title: "SECE Content Team & Sankalp Volunteer",
    description: "Organized events and mentored underprivileged students.",
    color: "var(--accent-green)",
  },
];

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
};

const TYPING_ROLES = [
  "Full-Stack Developer",
  "Systems Engineer",
  "AI/ML Enthusiast",
  "Problem Solver",
];

function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress-bar" style={{ width: `${progress}%` }} aria-hidden="true" />
  );
}

function App() {
  const resumeHref = `${import.meta.env.BASE_URL}RiturajSingh_Resume.pdf`;
  const typedRole = useTypingEffect(TYPING_ROLES);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNav = () => {
      const sections = [...document.querySelectorAll("main section[id]")];
      const offset = window.scrollY + 200;
      let current = "home";
      for (const s of sections) {
        if (offset >= s.offsetTop) current = s.id;
      }
      setActiveSection(current);
      setScrolled(window.scrollY > 40);
    };

    const revealItems = [...document.querySelectorAll(".reveal")];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    for (const item of revealItems) observer.observe(item);

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateNav);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <ScrollProgress />

      {/* Background canvas */}
      <div className="bg-canvas" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <div className="bg-grid" />
      </div>

      {/* Navbar */}
      <header className={`topbar${scrolled ? " topbar-scrolled" : ""}`}>
        <div className="container topbar-inner">
          <a className="brand" href="#home" aria-label="Rituraj Singh home">
            <span className="brand-logo">RS</span>
            <span className="brand-name">Rituraj</span>
          </a>

          <nav className="nav desktop-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.slice(1) ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="topbar-right">
            <a
              className="btn btn-sm btn-glow"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=riturajs379@gmail.com"
              {...externalLinkProps}
            >
              Hire Me
            </a>
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className={`mobile-nav${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-glow mobile-hire"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=riturajs379@gmail.com"
            {...externalLinkProps}
            onClick={closeMenu}
          >
            Hire Me
          </a>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="hero-badge">
                <span className="badge-dot" />
                Available for Internship &amp; FTE
              </div>

              <h1>
                Hi, I&apos;m{" "}
                <span className="gradient-text">Rituraj Singh</span>
              </h1>

              <div className="hero-role">
                <span className="role-prefix">I&apos;m a </span>
                <span className="typed-text">{typedRole}</span>
                <span className="cursor" aria-hidden="true">|</span>
              </div>

              <p className="hero-sub">
                I build scalable products with clean UI, strong backend logic, and practical AI
                integrations. Completed Data Science coursework with hands-on ML, Deep Learning,
                and NLP projects.
              </p>

              <div className="hero-actions">
                <a className="btn btn-glow" href={resumeHref} download="RiturajSingh_Resume.pdf">
                  <span>📄</span> Download Resume
                </a>
                <a className="btn btn-outline" href="#portfolio">
                  View Projects →
                </a>
              </div>

              <div className="social-row">
                <div className="social-group">
                  <p className="social-label">Connect</p>
                  <div className="social-chips">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=riturajs379@gmail.com" {...externalLinkProps} className="chip">
                      ✉️ Mail
                    </a>
                    <a href="https://github.com/Rituraj379" {...externalLinkProps} className="chip">
                      🐙 GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/riturajsingh1" {...externalLinkProps} className="chip">
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
                <div className="social-group">
                  <p className="social-label">Coding Profiles</p>
                  <div className="social-chips">
                    <a href="https://leetcode.com/u/Vasudev_iss_Here/" {...externalLinkProps} className="chip">
                      LeetCode
                    </a>
                    <a href="https://codeforces.com/profile/Rituraj379" {...externalLinkProps} className="chip">
                      Codeforces
                    </a>
                    <a href="https://www.geeksforgeeks.org/profile/rituramcru" {...externalLinkProps} className="chip">
                      GFG
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-media reveal">
              <div className="portrait-wrap">
                <div className="portrait-glow" aria-hidden="true" />
                <div className="portrait-card">
                  <img src="/p1.jpeg" alt="Portrait of Rituraj Singh" />
                  <div className="portrait-overlay" aria-hidden="true" />
                </div>
                <div className="float-badge badge-top">
                  <span>🎓</span> NIT Jamshedpur
                </div>
                <div className="float-badge badge-bottom">
                  <span>⚡</span> MERN + AI/ML
                </div>
              </div>

              <div className="stats-row">
                <div className="stat-pill">
                  <strong>600+</strong>
                  <span>Problems Solved</span>
                </div>
                <div className="stat-pill">
                  <strong>98.48%</strong>
                  <span>JEE Percentile</span>
                </div>
                <div className="stat-pill">
                  <strong>3+</strong>
                  <span>Live Projects</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT I DO ── */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-head reveal">
              <span className="section-kicker">My Expertise</span>
              <h2>What I <span className="gradient-text">Do</span></h2>
              <p>Product-ready engineering with clean architecture, strong performance, and practical impact.</p>
            </div>
            <div className="whatido-grid">
              {workAreas.map((area, i) => (
                <article
                  key={area.title}
                  className="glass-card work-card reveal"
                  style={{ "--delay": `${i * 100}ms`, "--card-accent": area.color }}
                >
                  <div className="card-icon">{area.icon}</div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <div className="tag-row">
                    {area.tags.map((t) => (
                      <span key={t} className="tag-chip">{t}</span>
                    ))}
                  </div>
                  <div className="card-accent-line" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="section" id="skills">
          <div className="container">
            <div className="section-head reveal">
              <span className="section-kicker">My Stack</span>
              <h2>Skills &amp; <span className="gradient-text">Technologies</span></h2>
              <p>Technologies and fundamentals I use to build reliable software end-to-end.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, i) => (
                <article
                  key={group.title}
                  className="glass-card skill-card reveal"
                  style={{ "--delay": `${i * 100}ms`, "--card-accent": group.color }}
                >
                  <div className="skill-header">
                    <span className="card-icon">{group.icon}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="chip-row">
                    {group.tags.map((t) => (
                      <span key={t} className="skill-chip">{t}</span>
                    ))}
                  </div>
                  <div className="card-accent-line" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO ── */}
        <section className="section" id="portfolio">
          <div className="container">
            <div className="section-head reveal">
              <span className="section-kicker">My Work</span>
              <h2>Featured <span className="gradient-text">Projects</span></h2>
              <p>A selection of projects that showcase my range across full-stack, systems, and AI.</p>
            </div>
            <div className="portfolio-grid">
              {portfolioProjects.map((project, i) => (
                <article
                  key={project.title}
                  className="project-card reveal"
                  style={{ "--delay": `${i * 120}ms` }}
                >
                  <div className="project-cover" style={{ background: project.gradient }}>
                    <span className="project-emoji">{project.emoji}</span>
                    <div className="project-cover-glow" style={{ background: project.accent }} aria-hidden="true" />
                  </div>
                  <div className="project-body">
                    <span className="project-kind" style={{ color: project.accent }}>{project.kind}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-chip">{t}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a key={link.href} href={link.href} className="project-link" {...externalLinkProps}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESUME ── */}
        <section className="section" id="resume">
          <div className="container">
            <div className="section-head reveal">
              <span className="section-kicker">Background</span>
              <h2>My <span className="gradient-text">Resume</span></h2>
            </div>

            <div className="resume-layout">
              <article className="glass-card timeline-card reveal">
                <div className="timeline-header">
                  <span className="tl-icon">🎓</span>
                  <h3>Education</h3>
                </div>
                <div className="timeline-item">
                  <div className="tl-dot" />
                  <div className="tl-content">
                    <p className="tl-date">2023 – 2027 (Expected)</p>
                    <h4>National Institute of Technology Jamshedpur</h4>
                    <p>B.Tech in Electronics &amp; Communication Engineering</p>
                    <span className="tl-badge">CGPA: 7.34</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="tl-dot" />
                  <div className="tl-content">
                    <p className="tl-date">2021 – 2023</p>
                    <h4>D.A.V Public School (CBSE)</h4>
                    <p>Class 12th</p>
                    <span className="tl-badge">75.4%</span>
                  </div>
                </div>
              </article>

              <article className="glass-card timeline-card reveal" style={{ "--delay": "120ms" }}>
                <div className="timeline-header">
                  <span className="tl-icon">🏅</span>
                  <h3>Achievements &amp; Activities</h3>
                </div>
                {achievementItems.map((item) => (
                  <div key={item.title} className="achievement-item">
                    <div className="achievement-icon" style={{ background: item.color + "22", color: item.color }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="tl-date" style={{ color: item.color }}>{item.category}</p>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </article>
            </div>

            <div className="resume-cta reveal">
              <a className="btn btn-glow" href={resumeHref} download="RiturajSingh_Resume.pdf">
                📄 Download Full Resume
              </a>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section section-contact" id="contact">
          <div className="container">
            <div className="contact-panel reveal">
              <div className="contact-bg-glow" aria-hidden="true" />
              <div className="contact-content">
                <span className="section-kicker">Get In Touch</span>
                <h2>Let&apos;s Build Something <span className="gradient-text">Amazing</span></h2>
                <p>
                  Open for Internship and FTE roles, and collaboration in full-stack, systems,
                  and AI-driven product development.
                </p>
                <div className="contact-links">
                  <a
                    className="contact-link"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=riturajs379@gmail.com"
                    {...externalLinkProps}
                  >
                    <span className="contact-link-icon">✉️</span>
                    <div>
                      <p className="contact-link-label">Email</p>
                      <p className="contact-link-value">riturajs379@gmail.com</p>
                    </div>
                  </a>
                  <a className="contact-link" href="tel:+918235509190">
                    <span className="contact-link-icon">📱</span>
                    <div>
                      <p className="contact-link-label">Phone</p>
                      <p className="contact-link-value">+91 82355 09190</p>
                    </div>
                  </a>
                  <a
                    className="contact-link"
                    href="https://www.linkedin.com/in/riturajsingh1"
                    {...externalLinkProps}
                  >
                    <span className="contact-link-icon">💼</span>
                    <div>
                      <p className="contact-link-label">LinkedIn</p>
                      <p className="contact-link-value">riturajsingh1</p>
                    </div>
                  </a>
                  <a
                    className="contact-link"
                    href="https://github.com/Rituraj379"
                    {...externalLinkProps}
                  >
                    <span className="contact-link-icon">🐙</span>
                    <div>
                      <p className="contact-link-label">GitHub</p>
                      <p className="contact-link-value">Rituraj379</p>
                    </div>
                  </a>
                </div>
                <div className="contact-actions">
                  <a
                    className="btn btn-glow"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=riturajs379@gmail.com"
                    {...externalLinkProps}
                  >
                    Send a Message
                  </a>
                  <a className="btn btn-outline" href={resumeHref} download="RiturajSingh_Resume.pdf">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="brand-logo sm">RS</span>
            <span>Rituraj Singh</span>
          </div>
          <p className="footer-copy">Built with React + Vite · 2025</p>
          <div className="footer-links">
            <a href="https://github.com/Rituraj379" {...externalLinkProps}>GitHub</a>
            <a href="https://www.linkedin.com/in/riturajsingh1" {...externalLinkProps}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
