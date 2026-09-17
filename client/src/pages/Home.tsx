import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./home.css";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    label: "01 / INTRO",
    kicker: "FULL-STACK ENGINEER · TUNIS, TN",
    title: <>Building digital <em>things</em> with intent.</>,
    body: "React, TypeScript, Spring Boot, and a little bit of curiosity. I turn complex systems into clear, useful experiences.",
    desktop: "/cat-scroll/assets/01-hero-desktop.jpg",
    mobile: "/cat-scroll/assets/01-hero-mobile.jpg",
    tone: "dark",
  },
  {
    label: "02 / ABOUT",
    kicker: "THE HUMAN BEHIND THE STACK",
    title: <>The human behind the <em>stack.</em></>,
    body: "I’m Bahaa Eddine, a full-stack engineer who enjoys owning the whole journey — from shaping an API to watching a product land in someone’s hands.",
    desktop: "/cat-scroll/assets/02-about-desktop.jpg",
    mobile: "/cat-scroll/assets/02-about-mobile.jpg",
    tone: "light",
  },
  {
    label: "03 / TOOLKIT",
    kicker: "FRONTEND CRAFT · BACKEND THINKING",
    title: <>Tools for <em>making.</em></>,
    body: "React · TypeScript · Spring Boot · FastAPI · Node.js · AWS · Docker · MongoDB · CI/CD · Python",
    desktop: "/cat-scroll/assets/03-skills-desktop.jpg",
    mobile: "/cat-scroll/assets/03-skills-mobile.jpg",
    tone: "paper",
  },
  {
    label: "04 / SELECTED WORK",
    kicker: "IDEAS THAT SHIP",
    title: <>Ideas that <em>ship.</em></>,
    body: "Lilac-AiTrader · B2B Hub Revamp · ZeroWaste · Tektai · Artfulio",
    desktop: "/cat-scroll/assets/04-projects-desktop.jpg",
    mobile: "/cat-scroll/assets/04-projects-mobile.jpg",
    tone: "ink",
  },
  {
    label: "05 / EXPERIENCE",
    kicker: "BUILT BY DOING",
    title: <>Built by <em>doing.</em></>,
    body: "Front-End Developer Intern at Xtendplex · Full Stack Developer Intern at IPACT Consult · Freelance full-stack developer since 2018",
    desktop: "/cat-scroll/assets/05-experience-desktop.jpg",
    mobile: "/cat-scroll/assets/05-experience-mobile.jpg",
    tone: "dark",
  },
  {
    label: "06 / CONTACT",
    kicker: "LET’S MAKE IT FEEL INEVITABLE",
    title: <>Have a good <em>idea?</em></>,
    body: "bahaaeddinebouzid@gmail.com",
    desktop: "/cat-scroll/assets/06-contact-desktop.jpg",
    mobile: "/cat-scroll/assets/06-contact-mobile.jpg",
    tone: "dark",
  },
];

const transitionFrames = [
  "/cat-scroll/assets/transition-01-02-desktop.jpg",
  "/cat-scroll/assets/transition-02-03-desktop.jpg",
  "/cat-scroll/assets/transition-03-04-desktop.jpg",
  "/cat-scroll/assets/transition-04-05-desktop.jpg",
  "/cat-scroll/assets/transition-05-06-desktop.jpg",
];

function ScenePicture({ scene }: { scene: (typeof scenes)[number] }) {
  return (
    <picture>
      <source media="(max-width: 900px)" srcSet={scene.mobile} />
      <img src={scene.desktop} alt="" loading="eager" />
    </picture>
  );
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const frames = gsap.utils.toArray<HTMLElement>(".stage-frame");
      const sections = gsap.utils.toArray<HTMLElement>("[data-scene]");
      let active = 0;

      gsap.set(frames, { autoAlpha: 0, scale: 1.06 });
      gsap.set(frames[0], { autoAlpha: 1, scale: 1 });

      const changeFrame = (index: number) => {
        if (index === active || !frames[index]) return;
        const previous = frames[active];
        const next = frames[index];
        active = index;
        gsap.timeline({ defaults: { duration: 1.05, ease: "power3.inOut" } })
          .to(previous, { autoAlpha: 0, scale: 1.035 }, 0)
          .fromTo(next, { autoAlpha: 0, scale: 1.1 }, { autoAlpha: 1, scale: 1 }, 0);
      };

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => changeFrame(index * 2),
          onLeave: () => index < scenes.length - 1 && changeFrame(index * 2 + 1),
          onEnterBack: () => changeFrame(index * 2),
          onLeaveBack: () => index > 0 && changeFrame(index * 2 - 1),
        });
        gsap.from(section.querySelectorAll(".copy-reveal"), {
          y: 34,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 68%", once: true },
        });
      });

      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: true },
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      window.setTimeout(refresh, 700);
      return () => window.removeEventListener("load", refresh);
    }, root);
    return () => context.revert();
  }, []);

  return (
    <main ref={root} className="portfolio-shell">
      <div className="scroll-progress" />
      <div className="stage" aria-hidden="true">
        {scenes.map((scene, index) => (
          <div className="stage-frame" key={scene.label}>
            <ScenePicture scene={scene} />
          </div>
        )).flatMap((frame, index) => index < transitionFrames.length
          ? [frame, <div className="stage-frame stage-transition" key={transitionFrames[index]}><img src={transitionFrames[index]} alt="" loading="eager" /></div>]
          : [frame])}
        <div className="stage-vignette" />
      </div>

      <header className="topbar">
        <a href="#intro" className="brand"><span className="brand-mark" />BAHAA<span>/DEV</span></a>
        <nav><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></nav>
        <span className="availability"><i /> Available for select work</span>
      </header>

      <div className="scene-track">
        {scenes.map((scene, index) => (
          <section id={index === 0 ? "intro" : index === 3 ? "work" : index === 5 ? "contact" : scene.label.split(" / ")[1].toLowerCase()} data-scene data-tone={scene.tone} className={`scroll-scene tone-${scene.tone}`} key={scene.label}>
            <div className="scene-copy">
              <p className="eyebrow copy-reveal"><span />{scene.kicker}</p>
              <h1 className="copy-reveal">{scene.title}</h1>
              <p className="scene-body copy-reveal">{scene.body}</p>
              {index === 0 && <a className="explore-button copy-reveal" href="#about"><span>↓</span> Explore portfolio</a>}
              {index === 5 && <a className="email-button copy-reveal" href="mailto:bahaaeddinebouzid@gmail.com">Start a conversation ↗</a>}
            </div>
            <div className="scene-number">{scene.label}</div>
          </section>
        ))}
      </div>

      <footer className="footer"><span>BAHAA / DEV</span><span>DESIGNED TO MOVE</span><span>© 2026</span></footer>
    </main>
  );
}
