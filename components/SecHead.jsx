import Reveal from './Reveal';
export default function SecHead({ t, s }) {
  return <Reveal><h2 className="sec-t">{t}</h2>{s && <p className="sec-s">{s}</p>}</Reveal>;
}
