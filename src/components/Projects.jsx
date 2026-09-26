import one from '../assets/one.png';
import two from '../assets/two.png';
import shift from '../assets/shift.png';
import fin from '../assets/fin.png';

const projects = [
  { image: shift, title: 'Shift Scheduler', category: 'PRODUCTIVITY · WEB APPLICATION', description: 'Helping teams organize shifts, manage team members, and keep track of their schedules.', tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'], demoLogin: { email: 'admin@123.com', password: '123456' }, link: 'https://shift-sheduler.onrender.com/', color: 'blue' },
  { image: two, title: 'Eagle Park Innovations', category: 'AGRICULTURE · E-COMMERCE', description: 'Bringing agriculture online with a full-stack shopping experience and integrated payments.', tags: ['React', 'Tailwind CSS', 'Mongoose', 'Paystack'], link: 'https://eagle-park.netlify.app/', color: 'sage' },
  { image: one, title: 'Sisters App', category: 'COMMUNITY · WEB APPLICATION', description: 'A full-stack application built with thoughtful interfaces and a connected backend.', tags: ['React', 'Tailwind CSS', 'Node.js', 'Mongoose'], link: 'https://sisters.onrender.com/', color: 'lavender' },
  { image: fin, title: 'Finance Tracker', category: 'FINANCE · WEB APPLICATION', description: 'Making everyday finances easier to follow through a clear, approachable tracking experience.', tags: ['Vue', 'Tailwind CSS', 'Node.js', 'Mongoose'], link: 'https://finance-tracker-wb99.onrender.com/', color: 'peach' },
];

export default function Projects() {
  return <section id="project" className="work-section section-space"><div className="shell">
    <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>A few ideas,<br />brought <em>to life.</em></h2></div><p>A selection of things I’ve built.<br />From the first idea to the final detail.</p></div>
    <div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.title}>
      <a className={`project-image ${project.color}`} href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`}><div className="browser-bar"><i /><i /><i /><span>{project.title.toLowerCase()}</span></div><img src={project.image} alt={`${project.title} website preview`} loading="lazy" /><span className="project-open" aria-hidden="true">↗</span></a>
      <div className="project-meta"><p className="eyebrow">{project.category}</p><span>0{i + 1}</span></div>
      <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}<span aria-hidden="true">↗</span></a></h3><p className="project-description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      {project.demoLogin && <div className="project-demo-login">
        <strong>Demo login</strong>
        <p>Use these credentials to log in and explore the app.</p>
        <p>Email: <code>{project.demoLogin.email}</code></p>
        <p>Password: <code>{project.demoLogin.password}</code></p>
      </div>}
    </article>)}</div>
    <a className="text-link github-link" href="https://github.com/mawuse-tech" target="_blank" rel="noopener noreferrer">More behind the scenes on GitHub <span aria-hidden="true">↗</span></a>
  </div></section>;
}
