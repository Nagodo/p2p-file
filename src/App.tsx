import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function Homepage() {
    return(
        <div>
            <h1 className="text-red-600">Hello react in electrodwdwn</h1>
            <h1 className="red">Homepage</h1>
        </div>
    )
}

export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    );
  }