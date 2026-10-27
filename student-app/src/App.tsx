
import { useState } from 'react'
import StudentPage from './StudentPage'
import './App.css'

type Tab = 'Home' | 'My Learning' | 'Rewards' | 'News' | 'My Profile'

function GoldCoin({ small = false }: { small?: boolean }) {
  return (
    <span className={`gold-coin ${small ? 'gold-coin-small' : ''}`} aria-label="Gold coin">
      <span className="coin-rim">
        <span className="coin-face">M</span>
      </span>
    </span>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState<Tab>('Home')
  const [language, setLanguage] = useState('UZ')

  if (currentPage !== 'Home') {
    return (
      <StudentPage
        page={currentPage}
        onBack={() => setCurrentPage('Home')}
      />
    )
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <img
            className="brand-logo"
            src="/maverick-logo.png"
            alt="MaveRick — The way to success"
          />
        </div>

        <div className="topbar-actions">
          <select
            className="language-select"
            aria-label="Choose language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="UZ">UZ</option>
            <option value="RU">RU</option>
            <option value="EN">EN</option>
          </select>

          <button
            className="notification-button"
            aria-label="Notifications"
            onClick={() => window.alert('You are all caught up!')}
          >
            ♧
            <span className="notification-dot" />
          </button>
        </div>
      </header>

      <section className="welcome-section">
        <div>
          <p className="eyebrow">YOUR LEARNING JOURNEY</p>
          <h1>Assalomu alaykum, <span>Doniyor!</span></h1>
          <p className="welcome-subtitle">
            Bugun yangi bilimlar sari bir qadam tashlang.
          </p>
        </div>
        <div className="avatar">D</div>
      </section>

      <section className="balance-card">
        <div className="balance-glow balance-glow-one" />
        <div className="balance-glow balance-glow-two" />

        <div className="balance-content">
          <div className="balance-label">
            <span className="balance-label-icon">✦</span>
            MY COIN BALANCE
          </div>

          <div className="balance-amount">
            <GoldCoin />
            <span>250</span>
            <small>Coins</small>
          </div>

          <p className="balance-note">Keep learning. Keep earning.</p>

          <button
            className="balance-action"
            onClick={() => setCurrentPage('Rewards')}
          >
            Explore rewards <span>↗</span>
          </button>
        </div>

        <div className="coin-art" aria-hidden="true">
          <div className="coin-stack stack-back"><span>M</span></div>
          <div className="coin-stack stack-middle"><span>M</span></div>
          <div className="coin-stack stack-front"><span>M</span></div>
          <div className="coin-spark spark-one">✦</div>
          <div className="coin-spark spark-two">✧</div>
        </div>
      </section>

      <div className="section-heading">
        <div>
          <p className="eyebrow">STAY ON TRACK</p>
          <h2>Your overview</h2>
        </div>
        <span className="today-pill">Today <span>⌄</span></span>
      </div>

      <section className="overview-grid">
        <button className="overview-card lesson-card" onClick={() => setCurrentPage('My Learning')}>
          <div className="overview-icon lesson-icon">▣</div>
          <span className="card-label">NEXT LESSON</span>
          <strong className="overview-value">14:30</strong>
          <span className="overview-description">English · Pre-Intermediate</span>
          <span className="card-link">View schedule <span>→</span></span>
        </button>

        <button className="overview-card homework-card" onClick={() => setCurrentPage('My Learning')}>
          <div className="overview-icon homework-icon">✓</div>
          <span className="card-label">HOMEWORK</span>
          <strong className="overview-value">2 <small>tasks</small></strong>
          <span className="overview-description">Waiting to be completed</span>
          <span className="card-link">View tasks <span>→</span></span>
        </button>

        <button className="overview-card attendance-card" onClick={() => setCurrentPage('My Learning')}>
          <div className="overview-icon attendance-icon">↗</div>
          <span className="card-label">ATTENDANCE</span>
          <strong className="overview-value">80<small>%</small></strong>
          <div className="mini-progress"><span style={{ width: '80%' }} /></div>
          <span className="overview-description">Keep it up!</span>
        </button>

        <button className="overview-card progress-card" onClick={() => setCurrentPage('My Learning')}>
          <div className="overview-icon progress-icon">✦</div>
          <span className="card-label">MY PROGRESS</span>
          <strong className="overview-value">Level 3</strong>
          <span className="overview-description">You're making progress</span>
          <div className="mini-progress"><span style={{ width: '65%' }} /></div>
        </button>
      </section>

      <section className="learning-banner">
        <div className="learning-banner-copy">
          <span className="banner-kicker">YOUR NEXT MILESTONE</span>
          <h2>Every lesson takes you further.</h2>
          <p>Complete your tasks and unlock new rewards.</p>
          <button onClick={() => setCurrentPage('My Learning')}>
            Continue learning <span>→</span>
          </button>
        </div>

        <div className="banner-art" aria-hidden="true">
          <div className="banner-circle circle-back" />
          <div className="banner-circle circle-front">✦</div>
          <div className="banner-gift">🎁</div>
          <div className="banner-star">✧</div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="section-heading achievements-heading">
          <div>
            <p className="eyebrow">LITTLE WINS MATTER</p>
            <h2>Achievements</h2>
          </div>
          <button className="text-link" onClick={() => setCurrentPage('Rewards')}>
            View all →
          </button>
        </div>

        <div className="achievement-list">
          <div className="achievement-item">
            <div className="achievement-medal medal-gold">★</div>
            <div className="achievement-copy">
              <strong>Getting Started</strong>
              <span>Your learning journey has begun</span>
            </div>
            <span className="achievement-check">✓</span>
          </div>

          <div className="achievement-item">
            <div className="achievement-medal medal-blue">⚡</div>
            <div className="achievement-copy">
              <strong>Keep Going</strong>
              <span>Build your learning streak</span>
            </div>
            <span className="achievement-status">In progress</span>
          </div>
        </div>
      </section>

      <nav className="bottom-nav" aria-label="Main navigation">
        <button className="nav-item active" onClick={() => setCurrentPage('Home')}>
          <span className="nav-icon">⌂</span>
          <span>Bosh sahifa</span>
        </button>
        <button className="nav-item" onClick={() => setCurrentPage('My Learning')}>
          <span className="nav-icon">▤</span>
          <span>Ta’lim</span>
        </button>
        <button className="nav-item" onClick={() => setCurrentPage('Rewards')}>
          <span className="nav-icon">◇</span>
          <span>Rewards</span>
        </button>
        <button className="nav-item" onClick={() => setCurrentPage('News')}>
          <span className="nav-icon">▧</span>
          <span>Yangiliklar</span>
        </button>
        <button className="nav-item" onClick={() => setCurrentPage('My Profile')}>
          <span className="nav-icon">♙</span>
          <span>Profil</span>
        </button>
      </nav>
    </main>
  )
}

export default App
