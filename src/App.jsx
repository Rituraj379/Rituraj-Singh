import { useEffect } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "What I Do" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const workAreas = [
  {
    title: "Full-Stack Product Development",
    description:
      "Build complete web applications from frontend UI to backend APIs and database workflows.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "API and Backend Engineering",
    description:
      "Design scalable REST APIs, authentication flows, and modular server architecture for real use cases.",
    tags: ["Express.js", "REST APIs", "Auth"],
  },
  {
    title: "Machine Learning, Deep Learning and NLP",
    description:
      "Apply Data Science fundamentals to build predictive models and intelligent features using text and multimodal pipelines.",
    tags: ["Data Science", "Deep Learning", "NLP"],
  },
  {
    title: "Systems and Performance Engineering",
    description:
      "Develop low-level systems with C++, sockets, multithreading, and performance-focused thinking.",
    tags: ["C++", "TCP", "Multithreading"],
  },
];

const skillGroups = [
  {
    title: "Languages",
    tags: ["Java", "C++", "Python", "JavaScript"],
  },
  {
    title: "Web Development",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Vite", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Core CS",
    tags: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"],
  },
  {
    title: "Data Science",
    tags: ["EDA", "NumPy", "Pandas", "ML", "DL", "NLP", "RNN"],
  },
];

const portfolioProjects = [
  {
    kind: "Full Stack",
    title: "Glimpse Visual Sharing App",
    description:
      "A Pinterest-inspired platform with Google auth, image sharing, comments, and a Gemini assistant.",
    coverClass: "cover-glimpse",
    links: [
      { label: "Live", href: "https://glimpse-v-isual-sharing-app.vercel.app" },
      { label: "Code", href: "https://github.com/Rituraj379/Glimpse-VIsual-Sharing-App-" },
    ],
  },
  {
    kind: "Systems",
    title: "Redix Redis Clone",
    description:
      "Lightweight in-memory key-value store in C++ with RESP parser, streams, and leader-follower replication.",
    coverClass: "cover-redix",
    links: [{ label: "Code", href: "https://github.com/Rituraj379/Redix" }],
  },
  {
    kind: "AI and ML",
    title: "Smart Product Pricing Model",
    description:
      "Multimodal price prediction system combining textual and visual features from 50k+ product records.",
    coverClass: "cover-pricing",
    links: [{ label: "Code", href: "https://github.com/Rituraj379/Item-Price-Predictor-Model" }],
  },
];

const achievementItems = [
  {
    date: "Competitive Programming",
    title: "600+ Problems Solved",
    description: "Across LeetCode, Codeforces, and GeeksforGeeks.",
  },
  {
    date: "JEE Main",
    title: "AIR 17,543 (98.48 Percentile)",
    description: "Ranked among 1.2M+ candidates.",
  },
  {
    date: "Data Science Coursework",
    title: "ML, DL and NLP Certification Track",
    description:
      "Completed coursework covering Python, ML, Deep Learning, and NLP with practical model-building experience.",
  },
  {
    date: "Leadership and Volunteering",
    title: "SECE Content Team and Sankalp Volunteer",
    description: "Organized events and mentored underprivileged students.",
  },
];

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
};

function App() {
  useEffect(() => {
    const updateActiveNav = () => {
      const navLinks = [...document.querySelectorAll(".nav a")];
      const sections = [...document.querySelectorAll("main section[id]")];
      const offset = window.scrollY + 180;
      let currentSectionId = "home";

      for (const section of sections) {
        if (offset >= section.offsetTop) {
          currentSectionId = section.id;
        }
      }

      for (const link of navLinks) {
        const target = link.getAttribute("href");
        link.classList.toggle("active", target === `#${currentSectionId}`);
      }
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
      { threshold: 0.18 }
    );

    for (const item of revealItems) {
      observer.observe(item);
    }

    updateActiveNav();
    window.addEventListener("scroll", updateActiveNav);

    return () => {
      window.removeEventListener("scroll", updateActiveNav);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="noise-layer" aria-hidden="true"></div>
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#home" aria-label="Rituraj Singh home">
            <span className="brand-dot">RS</span>
            <span>Rituraj</span>
          </a>
          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="btn btn-small btn-pink"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=riturajs379@gmail.com"
            {...externalLinkProps}
          >
            Hire Me
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid reveal">
            <div className="hero-copy">
              <p className="kicker">Welcome to my world</p>
              <h1>Hi, I&apos;m Rituraj Singh a Full-Stack Developer.</h1>
              <p className="hero-sub">
                I build scalable products with clean UI, strong backend logic, and practical AI integrations. I
                have completed Data Science coursework with hands-on ML, Deep Learning, and NLP projects, and I am
                open for Internship and FTE opportunities.
              </p>

              <div className="hero-actions">
                <a className="btn btn-pink" href="/RiturajSingh_Resume(F).pdf" download>
                  Download Resume
                </a>
                <a className="btn btn-soft" href="#portfolio">
                  View Work
                </a>
              </div>

              <div className="social-grid">
                <div>
                  <p className="meta-title">Find me with</p>
                  <div className="social-links">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=riturajs379@gmail.com" {...externalLinkProps}>
                      Mail
                    </a>
                    <a href="https://github.com/Rituraj379" {...externalLinkProps}>
                      GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/riturajsingh1" {...externalLinkProps}>
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div>
                  <p className="meta-title">Coding profiles</p>
                  <div className="social-links">
                    <a href="https://leetcode.com/u/Vasudev_iss_Here/" {...externalLinkProps}>
                      LeetCode
                    </a>
                    <a href="https://codeforces.com/profile/Rituraj379" {...externalLinkProps}>
                      Codeforces
                    </a>
                    <a href="https://www.geeksforgeeks.org/profile/rituramcru" {...externalLinkProps}>
                      GFG
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-media">
              <div className="portrait-card">
                <img src="/p1.jpeg" alt="Portrait of Rituraj Singh" />
                <span className="tag tag-one">Open for Internship and FTE</span>
                <span className="tag tag-two">MERN + Data Science</span>
              </div>
              <div className="stat-card">
                <strong>600+</strong>
                <span>Problems Solved</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">My Expertise</p>
              <h2>What I Do</h2>
              <p>I focus on product-ready engineering with clean architecture, strong performance, and practical impact.</p>
            </div>
            <div className="whatido-grid">
              {workAreas.map((area) => (
                <article key={area.title} className="card work-card reveal">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <div className="work-meta">
                    {area.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">My Stack</p>
              <h2>Skills</h2>
              <p>
                Technologies and fundamentals I use to build reliable software end-to-end, including a strong Data
                Science and ML foundation.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article key={group.title} className="card skill-card reveal">
                  <h3>{group.title}</h3>
                  <div className="chip-row">
                    {group.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Visit my portfolio and keep your feedback</p>
              <h2>My Portfolio</h2>
            </div>

            <div className="portfolio-grid">
              {portfolioProjects.map((project) => (
                <article key={project.title} className="project-card reveal">
                  <div className={`project-cover ${project.coverClass}`}></div>
                  <div className="project-body">
                    <p className="project-kind">{project.kind}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a key={link.href} href={link.href} {...externalLinkProps}>
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

        <section className="section" id="resume">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">7+ years of learning mindset</p>
              <h2>My Resume</h2>
            </div>

            <div className="resume-layout">
              <article className="timeline reveal">
                <h3>Education</h3>
                <div className="timeline-item">
                  <p className="date">2023 - 2027 (Expected)</p>
                  <h4>National Institute of Technology Jamshedpur</h4>
                  <p>B.Tech in Electronics and Communication Engineering</p>
                  <p className="highlight">CGPA: 8.16</p>
                </div>
                <div className="timeline-item">
                  <p className="date">2021 - 2023</p>
                  <h4>D.A.V Public School (CBSE)</h4>
                  <p>Class 12th</p>
                  <p className="highlight">Percentage: 75.4%</p>
                </div>
              </article>

              <article className="timeline reveal">
                <h3>Achievements and Activities</h3>
                {achievementItems.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <p className="date">{item.date}</p>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </article>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="container">
            <article className="contact-panel reveal">
              <div>
                <p className="kicker">Contact</p>
                <h2>Let&apos;s build your next product</h2>
                <p>
                  Open for Internship and FTE roles, and collaboration in full-stack, systems, and AI-driven product
                  development.
                </p>
              </div>
              <div className="contact-actions">
                <a
                  className="btn btn-pink"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=riturajs379@gmail.com"
                  {...externalLinkProps}
                >
                  riturajs379@gmail.com
                </a>
                <a className="btn btn-soft" href="tel:+918235509190">
                  +91 82355 09190
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>Rituraj Singh</p>
          <p>Built with React + CSS</p>
        </div>
      </footer>
    </>
  );
}

export default App;
