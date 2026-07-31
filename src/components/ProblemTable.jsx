export default function ProblemTable({ problems }) {
  const getLeetCodeUrl = (name) => {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');
    return `https://leetcode.com/problems/${slug}/`;
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="problem-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Problem</th>
            <th>Difficulty</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((p, i) => (
            <tr key={i}>
              <td style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                {i + 1}
              </td>
              <td>
                <a href={getLeetCodeUrl(p.name)} target="_blank" rel="noopener noreferrer">
                  {p.name}
                </a>
              </td>
              <td>
                <span className={`badge badge-${p.difficulty.toLowerCase()}`}>
                  {p.difficulty}
                </span>
              </td>
              <td>
                <span className="badge badge-frequency">{p.frequency}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
