import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import fin from '../assets/fin.png';

const projects = [
  { image: two, title: 'Eagle Park Innovations', category: 'AGRICULTURE · E-COMMERCE', description: 'Bringing agriculture online with a full-stack shopping experience and integrated payments.', tags: ['React', 'Tailwind CSS', 'Mongoose', 'Paystack'], link: 'https://www.eagleparkinnovations.com/', color: 'sage' },
  { image: one, title: 'Sisters App', category: 'COMMUNITY · WEB APPLICATION', description: 'A full-stack application built with thoughtful interfaces and a connected backend.', tags: ['React', 'Tailwind CSS', 'Node.js', 'Mongoose'], link: 'https://sisters.onrender.com/', color: 'lavender' },
  { image: fin, title: 'Finance Tracker', category: 'FINANCE · WEB APPLICATION', description: 'Making everyday finances easier to follow through a clear, approachable tracking experience.', tags: ['Vue', 'Tailwind CSS', 'Node.js', 'Mongoose'], link: 'https://finance-tracker-wb99.onrender.com/', color: 'peach' },
  { image: three, title: 'Engineering Website', category: 'ENGINEERING · BUSINESS WEBSITE', description: 'A responsive web presence that puts engineering services in the spotlight.', tags: ['HTML', 'CSS', 'JavaScript'], link: 'https://oyibo.netlify.app/', color: 'blue' },
];

export default function Projects() {
  return <section id="project" className="work-section section-space"><div className="shell">
    <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>A few ideas,<br />brought <em>to life.</em></h2></div><p>A selection of things I’ve built.<br />From the first idea to the final detail.</p></div>
    <div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.title}>
      <a className={`project-image ${project.color}`} href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`}><div className="browser-bar"><i /><i /><i /><span>{project.title.toLowerCase()}</span></div><img src={project.image} alt={`${project.title} website preview`} loading="lazy" /><span className="project-open" aria-hidden="true">↗</span></a>
      <div className="project-meta"><p className="eyebrow">{project.category}</p><span>0{i + 1}</span></div>
      <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}<span aria-hidden="true">↗</span></a></h3><p className="project-description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </article>)}</div>
    <a className="text-link github-link" href="https://github.com/mawuse-tech" target="_blank" rel="noopener noreferrer">More behind the scenes on GitHub <span aria-hidden="true">↗</span></a>
  </div></section>;
}
