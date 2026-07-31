import { Highlight, themes } from 'prism-react-renderer';

export default function CodeBlock({ title, code, language = 'python' }) {
  return (
    <div className="code-block">
      {title && <div className="code-block-title">{title}</div>}
      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, margin: 0, borderRadius: title ? '0 0 8px 8px' : '8px', padding: '1.2rem', overflow: 'auto', fontSize: '0.85rem', lineHeight: '1.7' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="line-number">{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <style>{`
        .line-number {
          display: inline-block;
          width: 2.5em;
          text-align: right;
          margin-right: 1em;
          color: rgba(255,255,255,0.2);
          user-select: none;
          font-size: 0.75rem;
        }
      `}</style>
    </div>
  );
}
