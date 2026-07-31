import { useState } from 'react';
import ProblemCard from './ProblemCard';
import { ProgressBar, useProgress } from './ProgressTracker';
import SearchBar from './SearchBar';
import { getAnimation } from '../data/allAnimations';

export default function ProblemSection({ problems, topic, count }) {
  const [filter, setFilter] = useState('all');
  const { toggle, isSolved, count: solvedCount } = useProgress();

  const filtered = filter === 'all'
    ? problems
    : problems.filter(p => p.difficulty.toLowerCase() === filter);

  const topicSolved = problems.filter(p => isSolved(p.name)).length;

  return (
    <div>
      <ProgressBar solved={topicSolved} total={problems.length} label="Progress" />
      <SearchBar />
      <div className="ps-filters">
        <button className={`ps-filter ${filter==='all'?'active':''}`} onClick={()=>setFilter('all')}>All ({problems.length})</button>
        <button className={`ps-filter ${filter==='easy'?'active':''}`} onClick={()=>setFilter('easy')}>Easy ({problems.filter(p=>p.difficulty==='Easy').length})</button>
        <button className={`ps-filter ${filter==='medium'?'active':''}`} onClick={()=>setFilter('medium')}>Medium ({problems.filter(p=>p.difficulty==='Medium').length})</button>
        <button className={`ps-filter ${filter==='hard'?'active':''}`} onClick={()=>setFilter('hard')}>Hard ({problems.filter(p=>p.difficulty==='Hard').length})</button>
      </div>
      <p style={{fontSize:'0.78rem',color:'var(--text-muted)',margin:'0.5rem 0 1rem'}}>
        Click any problem to see animation + 3 solutions (Brute → Better → Optimal). Check ✓ to mark solved.
      </p>
      <div className="ps-list">
        {filtered.map((problem) => (
          <ProblemCard
            key={problem.name}
            problem={problem}
            animation={getAnimation(topic, problem.name)}
            isSolved={isSolved(problem.name)}
            onToggleSolved={() => toggle(problem.name)}
          />
        ))}
      </div>

      <style>{`
        .ps-filters {
          display: flex;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }
        .ps-filter {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.35rem 0.8rem;
          border-radius: 16px;
          cursor: pointer;
          font-size: 0.78rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        .ps-filter:hover { border-color: var(--accent-purple); color: var(--text-primary); }
        .ps-filter.active { background: rgba(124,58,237,0.12); border-color: var(--accent-purple); color: var(--accent-purple); }
        .ps-list {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
