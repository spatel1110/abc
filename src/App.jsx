import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ListsPage from './pages/ListsPage';
import StringsPage from './pages/StringsPage';
import DictionariesPage from './pages/DictionariesPage';
import SortingSearchingPage from './pages/SortingSearchingPage';
import StacksQueuesPage from './pages/StacksQueuesPage';

function App() {
  return (
    <Router basename="/abc">
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lists" element={<ListsPage />} />
            <Route path="/strings" element={<StringsPage />} />
            <Route path="/dictionaries" element={<DictionariesPage />} />
            <Route path="/sorting-searching" element={<SortingSearchingPage />} />
            <Route path="/stacks-queues" element={<StacksQueuesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
