'use client';

import { useLayoutEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, MoveDown, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.css';

gsap.registerPlugin(ScrollTrigger);

const assets = {
  hero: { desktop: '/assets/01-hero-desktop.jpg', mobile: '/assets/01-hero-mobile.jpg' },
  about: { desktop: '/assets/02-about-desktop.jpg', mobile: '/assets/02-about-mobile.jpg' },
  skills: { desktop: '/assets/03-skills-desktop.jpg', mobile: '/assets/03-skills-mobile.jpg' },
  projects: { desktop: '/assets/04-projects-desktop.jpg', mobile: '/assets/04-projects-mobile.jpg' },
  experience: { desktop: '/assets/05-experience-desktop.jpg', mobile: '/assets/05-experience-mobile.jpg' },
  contact: { desktop: '/assets/06-contact-desktop.jpg', mobile: '/assets/06-contact-mobile.jpg' },
};

function ResponsiveImage({ source, alt }: { source: { desktop: string; mobile: string }; alt: string }) {
  return <picture><source media="(max-width: 700px)" srcSet={source.mobile} /><img src={source.desktop} alt={alt} /></picture>;
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 32, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' });
      gsap.utils.toArray<HTMLElement>('.scene').forEach((scene) => {
        const image = scene.querySelector('.scene-image');
        const copy = scene.querySelectorAll('.reveal');
        gsap.fromTo(image, { scale: 1.08, yPercent: -3 }, { scale: 1, yPercent: 3, ease: 'none', scrollTrigger: { trigger: scene, start: 'top bottom', end: 'bottom top', scrub: true } });
        gsap.from(copy, { y: 36, opacity: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: scene, start: 'top 68%', once: true } });
      });
      gsap.to('.progress-bar', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: true } });
      gsap.to('.hero-cat', { scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className={styles.site}>
      <div className="progress-bar" />
      <nav className={styles.nav}>
        <a href="#top" className={styles.logo}><span className={styles.logoDot} />BAHAA<span className={styles.logoMuted}>/DEV</span></a>
        <div className={styles.navLinks}><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></div>
        <a className={styles.available}><span />Available for select work</a>
      </nav>

      <section id="top" className={`${styles.hero} scene`}>
        <div className={`${styles.sceneImage} hero-cat`}><ResponsiveImage source={assets.hero} alt="Tabby cat looking directly into the camera" /></div>
        <div className={`${styles.heroOverlay} hero-copy`}>
          <p className={styles.kicker}><span className={styles.eyebrowLine} /> FULL-STACK ENGINEER · TUNIS, TN</p>
          <h1>Building digital<br /><em>things</em> with intent.</h1>
          <p className={styles.heroText}>React, TypeScript, Spring Boot, and a little bit of curiosity. I turn complex systems into clear, useful experiences.</p>
          <a className={styles.circleCta} href="#about"><ArrowDown size={18} /><span>Explore<br />portfolio</span></a>
        </div>
        <div className={styles.heroMeta}><span>SCROLL TO DISCOVER</span><MoveDown size={14} /></div>
      </section>

      <section id="about" className={`${styles.section} ${styles.darkSection} scene`}>
        <div className={styles.sceneImage}><ResponsiveImage source={assets.about} alt="Illustrated tabby cat sitting in a living room" /></div>
        <div className={`${styles.sectionContent} ${styles.aboutContent}`}>
          <p className={`${styles.kicker} reveal`}><span className={styles.eyebrowLine} /> 01 / ABOUT</p>
          <h2 className="reveal">The human<br />behind the <em>stack.</em></h2>
          <p className={`${styles.bodyCopy} reveal`}>I’m Bahaa Eddine, a full-stack engineer who enjoys owning the whole journey — from shaping an API to watching a product land in someone’s hands.</p>
          <div className={`${styles.statRow} reveal`}><div><strong>06+</strong><span>Independent<br />projects</span></div><div><strong>15</strong><span>Crypto pairs<br />in production</span></div><div><strong>20%</strong><span>Faster page<br />loads</span></div></div>
        </div>
        <div className={styles.sideNote}>© 2026<br />BAHAA BOUZID</div>
      </section>

      <section id="skills" className={`${styles.section} ${styles.paperSection} scene`}>
        <div className={styles.sceneImage}><ResponsiveImage source={assets.skills} alt="Watercolor overhead illustration of cat and developer tools" /></div>
        <div className={`${styles.sectionContent} ${styles.skillsContent}`}>
          <p className={`${styles.kicker} reveal`}><span className={styles.eyebrowLine} /> 02 / TOOLKIT</p>
          <h2 className="reveal">Tools for<br /><em>making.</em></h2>
          <div className={`${styles.skillGrid} reveal`}><span>React</span><span>TypeScript</span><span>Spring Boot</span><span>FastAPI</span><span>Node.js</span><span>AWS</span><span>Docker</span><span>MongoDB</span><span>CI/CD</span><span>Python</span></div>
          <p className={`${styles.caption} reveal`}>Frontend craft meets backend thinking. Always learning, always shipping.</p>
        </div>
      </section>

      <section id="work" className={`${styles.section} ${styles.inkSection} scene`}>
        <div className={styles.sceneImage}><ResponsiveImage source={assets.projects} alt="Ink illustration of cat beside a laptop and code windows" /></div>
        <div className={`${styles.sectionContent} ${styles.workContent}`}>
          <p className={`${styles.kicker} reveal`}><span className={styles.eyebrowLine} /> 03 / SELECTED WORK</p>
          <h2 className="reveal">Ideas that<br /><em>ship.</em></h2>
          <div className={`${styles.projectList} reveal`}><a href="#contact"><span>01</span><div><strong>Lilac-AiTrader</strong><small>FastAPI · React · CCXT · Optuna</small></div><ArrowUpRight size={20} /></a><a href="#contact"><span>02</span><div><strong>B2B Hub Revamp</strong><small>React · TypeScript · Atomic Design</small></div><ArrowUpRight size={20} /></a><a href="#contact"><span>03</span><div><strong>ZeroWaste</strong><small>React · Laravel · Stripe · GPS</small></div><ArrowUpRight size={20} /></a></div>
        </div>
      </section>

      <section id="experience" className={`${styles.section} ${styles.darkSection} scene`}>
        <div className={styles.sceneImage}><ResponsiveImage source={assets.experience} alt="Isometric developer room with cat centered on a rug" /></div>
        <div className={`${styles.sectionContent} ${styles.experienceContent}`}>
          <p className={`${styles.kicker} reveal`}><span className={styles.eyebrowLine} /> 04 / EXPERIENCE</p>
          <h2 className="reveal">Built by<br /><em>doing.</em></h2>
          <div className={`${styles.timeline} reveal`}><div><span>02/25 — 12/25</span><strong>Front-End Developer Intern</strong><small>Xtendplex Tunisia</small></div><div><span>06/24 — 08/24</span><strong>Full Stack Developer Intern</strong><small>IPACT Consult · Remote</small></div><div><span>2018 — NOW</span><strong>Freelance Full-Stack Developer</strong><small>Remote · Self-employed</small></div></div>
        </div>
      </section>

      <section id="contact" className={`${styles.section} ${styles.contactSection} scene`}>
        <div className={styles.sceneImage}><ResponsiveImage source={assets.contact} alt="Charcoal portrait illustration of the tabby cat" /></div>
        <div className={`${styles.sectionContent} ${styles.contactContent}`}>
          <p className={`${styles.kicker} reveal`}><span className={styles.eyebrowLine} /> 05 / CONTACT</p>
          <h2 className="reveal">Have a good<br /><em>idea?</em></h2>
          <p className={`${styles.bodyCopy} reveal`}>Let’s make it feel inevitable.</p>
          <a className={`${styles.emailLink} reveal`} href="mailto:bahaaeddinebouzid@gmail.com">bahaaeddinebouzid@gmail.com <ArrowUpRight size={19} /></a>
          <div className={`${styles.contactDetails} reveal`}><span><MapPin size={15} /> Tunis, Tunisia</span><a href="https://github.com/Armi64bit"><Github size={15} /> GitHub</a><a href="https://linkedin.com/in/bahaa-eddine-bouzid-webdev"><Linkedin size={15} /> LinkedIn</a></div>
        </div>
      </section>
      <footer className={styles.footer}><span>BAHAA / DEV</span><span>DESIGNED TO MOVE</span><span>© 2026</span></footer>
    </main>
  );
}
