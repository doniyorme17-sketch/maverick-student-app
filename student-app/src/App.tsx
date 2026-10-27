
import { useState } from 'react'
import StudentPage from './StudentPage'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  const menuItems = [
    { icon: '📚', title: 'My Learning', desc: 'Lessons, homework and grades' },
    { icon: '🎮', title: 'Games', desc: 'Learn and earn coins' },
    { icon: '🎁', title: 'Rewards', desc: 'Spend your coins' },
    { icon: '👤', title: 'My Profile', desc: 'Your personal information' },
  ]

  if (currentPage !== 'Home') {
    return (
      <StudentPage
        page={currentPage}
        onBack={() => setCurrentPage('Home')}
      />
    )
  }

  return (
    <div style={{
      padding: '28px 24px',
      maxWidth: '420px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box',
    }}>
      <header style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h1 style={{
          color: '#0B1F44',
          fontSize: '42px',
          lineHeight: 1.2,
          margin: '0 0 8px',
          fontWeight: 700,
        }}>
          MaveRick
        </h1>

        <p style={{
          color: '#D71935',
          fontSize: '18px',
          lineHeight: 1.4,
          margin: 0,
        }}>
          The way to success
        </p>
      </header>

      <section style={{
        background: '#0B1F44',
        color: '#ffffff',
        padding: '22px 18px',
        borderRadius: '20px',
        marginBottom: '30px',
        textAlign: 'center',
      }}>
        <p style={{
          margin: '0 0 12px',
          fontSize: '17px',
          color: '#ffffff',
        }}>
          My Balance
        </p>

        <h2 style={{
          margin: '0 0 14px',
          fontSize: '28px',
          lineHeight: 1.3,
          color: '#ffffff',
          fontWeight: 700,
        }}>
          🪙 250 Coins
        </h2>

        <p style={{
          margin: 0,
          fontSize: '17px',
          color: '#ffffff',
        }}>
          Welcome back, Student!
        </p>
      </section>

      <h2 style={{
        color: '#0B1F44',
        fontSize: '24px',
        margin: '0 0 16px',
      }}>
        Dashboard
      </h2>

      <div style={{ display: 'grid', gap: '14px' }}>
        {menuItems.map((item) => (
          <button
            key={item.title}
            onClick={() => setCurrentPage(item.title)}
            style={{
              background: '#ffffff',
              padding: '18px',
              borderRadius: '16px',
              border: '1px solid #e1e7f0',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'left',
              cursor: 'pointer',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontSize: '30px', flexShrink: 0 }}>
              {item.icon}
            </span>

            <span>
              <strong style={{
                display: 'block',
                color: '#0B1F44',
                fontSize: '18px',
                marginBottom: '4px',
              }}>
                {item.title}
              </strong>

              <span style={{
                color: '#68758b',
                fontSize: '13px',
                lineHeight: 1.4,
              }}>
                {item.desc}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
