const PAGES = ['Home', 'About', 'Projects', 'Contact'];

export default function Navbar({ page, setPage }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0 28px' }}>
      <nav className="nav-pill">
        {PAGES.map((p) => (
          <button
            key={p}
            className={`nav-item ${page === p ? 'active' : ''}`}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}
      </nav>
    </div>
  );
}
