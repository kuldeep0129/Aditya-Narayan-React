export default function Mandala() {
  return (
    <>
      <svg className="mandala" viewBox="0 0 400 400" fill="none" stroke="#ffd166" strokeWidth="1" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => <ellipse key={i} cx="200" cy="110" rx="26" ry="82" transform={`rotate(${i * 15} 200 200)`} />)}
        {[1, 2, 3, 4, 5, 6].map((j) => <circle key={j} cx="200" cy="200" r={j * 30} />)}
      </svg>
      <svg className="mandala b" viewBox="0 0 400 400" fill="none" stroke="#ff9933" strokeWidth="1.2" aria-hidden="true">
        {Array.from({ length: 12 }, (_, k) => <path key={k} d="M200 40 Q230 120 200 200 Q170 120 200 40" transform={`rotate(${k * 30} 200 200)`} />)}
        <circle cx="200" cy="200" r="60" /><circle cx="200" cy="200" r="150" />
      </svg>
    </>
  );
}
