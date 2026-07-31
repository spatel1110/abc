export default function CodeBlock({ title, code }) {
  return (
    <div className="code-block">
      {title && <div className="code-block-title">{title}</div>}
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
