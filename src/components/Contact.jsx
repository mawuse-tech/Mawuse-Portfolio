import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting) return;
    const form = event.currentTarget;
    const body = new FormData(form);
    setIsSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch('https://formspree.io/f/mdklzywv', { method: 'POST', body, headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Send failed');
      setStatus({ success: true, message: 'Thank you! Your message has been sent. I’ll be in touch.' });
      form.reset();
    } catch {
      setStatus({ success: false, message: 'Your message couldn’t be sent. Please try again or email me directly.' });
    } finally { setIsSubmitting(false); }
  }
  return <section id="contact" className="contact-section section-space"><div className="shell contact-grid"><div><p className="eyebrow">04 / SAY HELLO</p><h2>Good things start<br />with a <em>conversation.</em></h2><p className="contact-description">Have an idea, a project, or just something to share?<br />I’d love to hear from you.</p><a className="email-link" href="mailto:akpekemawuse1@gmail.com">akpekemawuse1@gmail.com <span aria-hidden="true">↗</span></a><div className="contact-socials"><a href="https://github.com/mawuse-tech" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/mawuse-akpeke-aa28a8245/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div>
    <form onSubmit={handleSubmit}><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Alex Taylor" required disabled={isSubmitting} /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="alex@example.com" required disabled={isSubmitting} /></label></div><label>What do you have in mind?<textarea name="message" rows="4" placeholder="Tell me a little about your idea…" required disabled={isSubmitting} /></label><button className="button button-light" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send message'}<span aria-hidden="true">↗</span></button><div className="form-status" role="status" aria-live="polite">{status && <p className={status.success ? 'success' : 'error'}>{status.message}</p>}</div></form>
  </div></section>;
}
