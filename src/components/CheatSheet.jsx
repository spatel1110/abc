import { Highlight, themes } from 'prism-react-renderer';

export default function CheatSheet({ items }) {
  return (
    <div className="cs-grid">
      {items.map((item, i) => (
        <div key={i} className="cs-card">
          <div className="cs-method">{item.method}</div>
          <div className="cs-desc">{item.desc}</div>
          <div className="cs-code-wrap">
            <Highlight theme={themes.nightOwl} code={item.example.trim()} language="python">
              {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre className="cs-code" style={{ ...style, margin: 0, padding: '0.6rem 0.8rem', fontSize: '0.78rem', lineHeight: '1.5', borderRadius: '0 0 6px 6px', overflow: 'auto' }}>
                  {tokens.map((line, li) => (
                    <div key={li} {...getLineProps({ line })}>
                      {line.map((token, ti) => (
                        <span key={ti} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </div>
      ))}

      <style>{`
        .cs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 0.8rem;
        }
        .cs-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          overflow: hidden;
          transition: var(--transition);
        }
        .cs-card:hover {
          border-color: rgba(184,242,230,0.35);
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(184,242,230,0.08);
        }
        .cs-method {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--mint);
          padding: 0.7rem 0.9rem 0.3rem;
        }
        .cs-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          padding: 0 0.9rem 0.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        .cs-code-wrap {
          background: var(--code-bg);
        }
      `}</style>
    </div>
  );
}
