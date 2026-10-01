import { Card, Icon, Tag } from '@blueprintjs/core'

export default function PlaceholderPage({ eyebrow, title, description, icon }) {
  return (
    <section className="placeholder-page">
      <div className="page-heading">
        <div>
          <div className="eyebrow"><span>LATOOKA UI</span><Icon icon="chevron-right" size={10} /><span>{eyebrow}</span></div>
          <h1>{title}</h1><p>{description}</p>
        </div>
        <Tag className="coming-soon-tag" minimal><Icon icon="build" size={12} />Coming soon</Tag>
      </div>
      <Card className="placeholder-card" elevation={0}>
        <div className="placeholder-icon"><Icon icon={icon} size={22} /></div>
        <div className="eyebrow">PAGE IN PROGRESS</div>
        <h2>{title}</h2>
        <p>This section is ready for its content. For now, use the navigation to explore the other areas of Latooka UI.</p>
      </Card>
    </section>
  )
}
