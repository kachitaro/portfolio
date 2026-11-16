import { ImageResponse } from 'next/og';

export const alt = 'John (Anh Tai) – Freelance Frontend Developer, React · Next.js · TypeScript';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Indigo scale from Radix Colors (steps 3–11), the site's default accent.
const SCALE = [
  '#e1e9ff',
  '#d2deff',
  '#c1d0ff',
  '#abbdf9',
  '#8da4ef',
  '#3e63dd',
  '#3358d4',
  '#3a5bc7',
  '#1f2d5c',
];

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px 80px',
        background: '#fcfcfd',
        color: '#1c2024',
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: '#3e63dd',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 40,
            fontWeight: 800,
          }}>
          J.
        </div>
        <div style={{ fontSize: 30, color: '#60646c' }}>portfolio.gen-nex.tech</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>
          John (Anh Tai)
        </div>
        <div style={{ fontSize: 40, marginTop: 20, color: '#3a5bc7' }}>
          Freelance Frontend Developer · React · Next.js · TypeScript
        </div>
        <div style={{ fontSize: 28, marginTop: 16, color: '#60646c' }}>
          I turn ideas into functional web experiences · Available for projects
        </div>
      </div>
      <div style={{ display: 'flex', height: 28, borderRadius: 8, overflow: 'hidden' }}>
        {SCALE.map((c) => (
          <div key={c} style={{ flex: 1, background: c }} />
        ))}
      </div>
    </div>,
    size,
  );
}
