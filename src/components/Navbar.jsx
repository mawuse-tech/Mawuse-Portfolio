import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return <header className="site-header">
    <nav className="shell navigation" aria-label="Main navigation">
      <a className="wordmark" href="#home" aria-label="Mawuse home">mawuse<span>✳</span></a>
      <button className="menu-toggle" aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen} aria-controls="nav-links" onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close −' : 'Menu +'}</button>
      <div id="nav-links" className={`nav-links ${isOpen ? 'is-open' : ''}`} onKeyDown={e => { if (e.key === 'Escape') setIsOpen(false); }}>
        {[['Work', '#project'], ['About', '#about'], ['Expertise', '#expertise']].map(([label, href]) => <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setIsOpen(false)}>Let’s talk <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  </header>;
}
