import portrait from '../assets/chatmawuse.png';

export default function Hero() {
  return <section id="home" className="shell hero">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot" /> FULL STACK DEVELOPER · CREATIVE THINKER</p>
      <h1>Thoughtful code.<br />Meaningful<br /><em>experiences.</em></h1>
      <p className="hero-intro">Hi, I’m Mawuse Akpeke <span aria-hidden="true">↗</span></p>
      <p className="hero-description">I bring ideas to life through intuitive interfaces and dependable backends. A little curiosity, a lot of care, and code that makes a difference.</p>
      <div className="hero-actions"><a className="button button-primary" href="#project">Explore my work <span aria-hidden="true">↗</span></a><a className="text-link" href="#contact">Let’s connect <span aria-hidden="true">↗</span></a></div>
    </div>
    <div className="hero-visual">
      <span className="portrait-star" aria-hidden="true">✳</span>
      <div className="portrait-frame"><img src={portrait} alt="Mawuse Akpeke smiling in a teal blazer" fetchPriority="high" /></div>
      <div className="portrait-note"><span aria-hidden="true">✧</span><div>Built with intention.<br /><em>Made for people.</em></div></div>
      <span className="portrait-caption">THE PERSON BEHIND THE PIXELS</span>
    </div>
    <div className="hero-bottom"><span>IDEAS INTO INTERFACES. FRONT TO BACK.</span><a href="#project">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
  </section>;
}
