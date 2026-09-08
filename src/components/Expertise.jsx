const skills = [
  { number: '01', icon: '⌘', title: 'Frontend development', description: 'Responsive interfaces that feel as good as they look. Built with care, from layout to interaction.', tools: ['React', 'Vue', 'JavaScript', 'Tailwind CSS', 'Redux'] },
  { number: '02', icon: '⌁', title: 'Backend development', description: 'The thoughtful foundations behind the experience. APIs and server logic that bring applications to life.', tools: ['Node.js', 'Express.js', 'REST APIs'] },
  { number: '03', icon: '▤', title: 'Databases & data', description: 'Well-organized data for dependable applications, with the right structure for the problem at hand.', tools: ['MongoDB', 'Mongoose', 'PostgreSQL', 'MySQL'] },
];
export default function Expertise() {
  return <section id="expertise" className="expertise-section section-space"><div className="shell"><div className="section-heading"><div><p className="eyebrow">03 / MY TOOLKIT</p><h2>From the surface<br /><em>to the server.</em></h2></div><p>The tools I use to connect good ideas<br />with thoughtful execution.</p></div><div className="skill-grid">{skills.map(skill => <article className="skill-card" key={skill.number}><div className="skill-top"><span aria-hidden="true">{skill.icon}</span><span>{skill.number}</span></div><h3>{skill.title}</h3><p>{skill.description}</p><div className="tags">{skill.tools.map(tool => <span key={tool}>{tool}</span>)}</div></article>)}</div></div></section>;
}
