export default function PageHead({ icon, title, sub }) {
  return (
    <div className="pagehead wrap">
      <div className="glass ph-card">
        <span className="ph-ic">{icon}</span>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
    </div>
  );
}
