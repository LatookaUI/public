import { Button, Card, Icon, Tag } from '@blueprintjs/core'

const services = [
  { icon: 'code', title: 'Web development', text: 'Thoughtful, accessible web experiences built around real user needs.' },
  { icon: 'layout', title: 'Frontend engineering', text: 'Responsive interfaces with clear visual systems and careful details.' },
  { icon: 'database', title: 'Full-stack thinking', text: 'From polished interactions to dependable data and integrations.' },
]
const skills = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'HTML & CSS', 'Responsive UI'] },
  { title: 'Backend & data', items: ['Node.js', 'REST APIs', 'SQL', 'Integrations'] },
  { title: 'Workflow', items: ['Git', 'Testing', 'Accessibility', 'Design systems'] },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-copy">
          <div className="about-kicker"><span className="about-kicker-line" />ABOUT ME <span>·</span> PORTFOLIO DRAFT</div>
          <p className="about-greeting">HELLO, I’M</p><h1 id="about-title">Your Name<span>.</span></h1>
          <p className="about-role">Full-stack developer <i aria-hidden="true" /></p>
          <p className="about-intro">I build useful, considered digital experiences—from the first sketch to the details that make a product feel effortless. This is a starting point for your story.</p>
          <div className="about-hero-actions">
            <Button className="about-primary-action" intent="primary" icon="envelope" onClick={() => document.getElementById('about-contact')?.scrollIntoView({ behavior: 'smooth' })}>Get in touch</Button>
            <Button className="about-secondary-action" icon="arrow-down" onClick={() => document.getElementById('about-expertise')?.scrollIntoView({ behavior: 'smooth' })}>Explore capabilities</Button>
          </div>
          <div className="about-availability"><span /> Availability <small>·</small> Customize this line</div>
          <div className="about-social-placeholder"><span>Social links</span><span className="social-placeholder-icon"><Icon icon="link" /></span><span className="social-placeholder-icon"><Icon icon="envelope" /></span><span className="social-placeholder-icon"><Icon icon="share" /></span></div>
        </div>
        <div className="about-hero-art" aria-label="Profile portrait placeholder">
          <div className="portrait-orbit portrait-orbit-outer" /><div className="portrait-orbit portrait-orbit-inner" /><div className="portrait-glow" />
          <div className="portrait-placeholder"><div className="portrait-monogram">YN</div><div className="portrait-caption"><Icon icon="media" /><span>Replace with your portrait</span></div></div>
          <div className="floating-skill skill-react"><span className="skill-dot" />React</div><div className="floating-skill skill-node"><span className="skill-dot" />Node.js</div><div className="floating-skill skill-design"><span className="skill-dot" />Product-minded</div><div className="hero-art-index">01 <span>/</span> 04</div>
        </div>
      </section>

      <section className="about-summary" aria-labelledby="about-summary-title">
        <div className="about-summary-copy"><p className="about-section-kicker">A LITTLE ABOUT ME</p><h2 id="about-summary-title">Building digital experiences<br />with care and curiosity.</h2>
          <p className="about-body-copy">I’m a developer who enjoys turning complex ideas into clear, welcoming products. I care about the whole experience: useful engineering, accessible interfaces, and the small details that help people feel at home.</p>
          <p className="about-body-copy">Use this space to add your own background, what motivates you, and the kind of problems you love to solve.</p>
          <div className="about-metrics"><div><strong>—</strong><span>Years experience</span></div><div><strong>—</strong><span>Projects shipped</span></div><div><strong>—</strong><span>People helped</span></div></div>
        </div>
        <Card className="about-details-card" elevation={0}>
          <div className="about-details-heading"><div className="about-detail-avatar">YN</div><div><strong>Your Name</strong><span>Developer · Creator</span></div><span className="details-edit-tag">EDIT ME</span></div>
          <div className="about-detail-row"><Icon icon="envelope" /><span>Email</span><strong>Add your email</strong></div><div className="about-detail-row"><Icon icon="map-marker" /><span>Location</span><strong>Add your location</strong></div><div className="about-detail-row"><Icon icon="time" /><span>Availability</span><strong>Update your status</strong></div>
          <div className="about-details-note"><Icon icon="info-sign" /><span>Swap these prompts for your real contact details.</span></div>
        </Card>
      </section>

      <section className="about-expertise" id="about-expertise" aria-labelledby="about-expertise-title">
        <div className="about-centered-heading"><p className="about-section-kicker">WHAT I BRING</p><h2 id="about-expertise-title">Ideas into impact.</h2><p>Choose the strengths and services that best represent your work.</p></div>
        <div className="about-capability-grid">{services.map((item, index) => <Card className="about-capability-card" elevation={0} key={item.title}><div className="capability-topline"><span>0{index + 1}</span><Icon icon={item.icon} /></div><h3>{item.title}</h3><p>{item.text}</p><a href="#about-contact">Let’s talk <Icon icon="arrow-right" size={12} /></a></Card>)}</div>
      </section>

      <section className="about-skills" aria-labelledby="about-skills-title">
        <div className="about-skills-intro"><p className="about-section-kicker">MY TOOLKIT</p><h2 id="about-skills-title">Skills &amp; technologies</h2><p>Replace the starter tags and illustrative skill levels with the tools and strengths you use most.</p>
          <div className="skill-meter-list"><div><span>Product thinking</span><i><b style={{ width: '82%' }} /></i></div><div><span>Interface craft</span><i><b style={{ width: '76%' }} /></i></div><div><span>Engineering</span><i><b style={{ width: '88%' }} /></i></div></div>
        </div>
        <div className="skill-group-grid">{skills.map((group) => <Card className="skill-group-card" elevation={0} key={group.title}><h3>{group.title}</h3><div>{group.items.map((skill) => <Tag key={skill} className="about-skill-tag" minimal>{skill}</Tag>)}</div></Card>)}</div>
      </section>

      <section className="about-journey" aria-labelledby="about-journey-title">
        <div className="about-journey-heading"><div><p className="about-section-kicker">THE JOURNEY</p><h2 id="about-journey-title">Experience &amp; education</h2></div><span className="draft-label">YOUR STORY GOES HERE</span></div>
        <div className="journey-entry"><span className="journey-marker" /><div><span className="journey-date">MOST RECENT · ADD DATES</span><h3>Your role · Company</h3><p>Add a short description of your impact, responsibilities, and the work you’re proud of.</p></div><Icon icon="briefcase" /></div>
        <div className="journey-entry"><span className="journey-marker" /><div><span className="journey-date">EDUCATION · ADD DATES</span><h3>Your degree or learning path</h3><p>Add your school, training, certifications, or the experiences that shaped your craft.</p></div><Icon icon="book" /></div>
      </section>

      <section className="about-contact" id="about-contact" aria-labelledby="about-contact-title">
        <div><p className="about-section-kicker">HAVE A GOOD ONE IN MIND?</p><h2 id="about-contact-title">Let’s make something<br />meaningful together.</h2><p>Have a project, a question, or just want to say hello? Add your preferred contact details and invite people to reach out.</p></div>
        <Button className="about-primary-action" intent="primary" icon="envelope" onClick={() => document.getElementById('about-summary-title')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Add your contact details</Button>
        <span className="about-contact-mark"><Icon icon="chat" size={28} /></span>
      </section>
    </div>
  )
}
