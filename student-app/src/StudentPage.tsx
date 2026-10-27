
import { useState } from 'react'

type StudentPageProps = {
  page: string
  onBack: () => void
}

type MaterialType = 'All' | 'PDF' | 'Audio' | 'Video' | 'Document'

function StudentPage({ page, onBack }: StudentPageProps) {
  const [selectedSection, setSelectedSection] = useState('')
  const [submitted, setSubmitted] = useState<number[]>([])
  const [materialFilter, setMaterialFilter] = useState<MaterialType>('All')

  const sections: Record<string, string[]> = {
    'My Learning': [
      '📅 Lesson Schedule',
      '📝 Homework',
      '📊 Grades',
      '✅ Attendance',
      '📚 Study Materials',
    ],
    Games: ['🎮 Educational Games', '🪙 Earn Coins'],
    Rewards: ['🎁 Rewards Shop', '🪙 Your Coins'],
    'My Profile': ['👤 Personal Information', '🌐 Language'],
  }

  const schedule = [
    { day: 'Monday', time: '14:30–16:00', subject: 'English' },
    { day: 'Monday', time: '16:00–17:00', subject: 'IT Foundation' },
    { day: 'Wednesday', time: '14:30–16:00', subject: 'English' },
    { day: 'Friday', time: '14:30–16:00', subject: 'English' },
  ]

  const homework = [
    { subject: 'English', title: 'Grammar Practice', due: 'Friday, 18:00' },
    { subject: 'English', title: 'Vocabulary Exercise', due: 'Saturday, 12:00' },
    { subject: 'IT Foundation', title: 'Computer Basics Task', due: 'Monday, 17:00' },
  ]

  const grades = [
    { subject: 'English', score: 88, exam: 'Grammar Test', examScore: '88/100' },
    { subject: 'IT Foundation', score: 94, exam: 'Computer Basics', examScore: '94/100' },
    { subject: 'Vocabulary', score: 82, exam: 'Vocabulary Test', examScore: '82/100' },
  ]

  const attendance = [
    { date: '20 Oct 2026', subject: 'English', status: 'Present' },
    { date: '22 Oct 2026', subject: 'English', status: 'Present' },
    { date: '24 Oct 2026', subject: 'IT Foundation', status: 'Absent' },
    { date: '26 Oct 2026', subject: 'English', status: 'Present' },
    { date: '27 Oct 2026', subject: 'English', status: 'Present' },
  ]

  const materials = [
    {
      id: 1,
      title: 'English Grammar Notes',
      type: 'PDF' as const,
      description: 'Grammar rules and examples',
      icon: '📄',
    },
    {
      id: 2,
      title: 'Vocabulary Practice',
      type: 'PDF' as const,
      description: 'Useful words and practice exercises',
      icon: '📄',
    },
    {
      id: 3,
      title: 'Listening Practice 1',
      type: 'Audio' as const,
      description: 'English listening practice',
      icon: '🎧',
    },
    {
      id: 4,
      title: 'Pronunciation Lesson',
      type: 'Video' as const,
      description: 'Learn English pronunciation',
      icon: '🎬',
    },
    {
      id: 5,
      title: 'English Exercises',
      type: 'Document' as const,
      description: 'Written practice activities',
      icon: '📝',
    },
  ]

  const presentCount = attendance.filter(
    (lesson) => lesson.status === 'Present'
  ).length

  const absentCount = attendance.filter(
    (lesson) => lesson.status === 'Absent'
  ).length

  const attendanceRate = Math.round(
    (presentCount / attendance.length) * 100
  )

  const average = Math.round(
    grades.reduce((total, item) => total + item.score, 0) / grades.length
  )

  const cleanTitle = (title: string) => title.replace(/^[^\w]+/, '').trim()

  const buttonStyle = {
    background: '#ffffff',
    color: '#0B1F44',
    padding: '18px',
    borderRadius: '14px',
    border: '1px solid #e1e7f0',
    fontSize: '16px',
    textAlign: 'left' as const,
    cursor: 'pointer',
    width: '100%',
  }

  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e1e7f0',
    borderLeft: '5px solid #D71935',
    borderRadius: '14px',
    padding: '18px',
  }

  if (selectedSection) {
    const title = cleanTitle(selectedSection)

    return (
      <div style={{
        padding: '24px',
        maxWidth: '520px',
        width: '100%',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        boxSizing: 'border-box',
      }}>
        <button
          onClick={() => setSelectedSection('')}
          style={{
            background: '#0B1F44',
            color: '#ffffff',
            border: 'none',
            borderRadius: '10px',
            padding: '12px 16px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          ← Back to {page}
        </button>

        <h1 style={{
          color: '#0B1F44',
          fontSize: '28px',
          lineHeight: 1.3,
          margin: '28px 0 20px',
        }}>
          {title}
        </h1>

        {title === 'Lesson Schedule' ? (
          <div style={{ display: 'grid', gap: '14px' }}>
            {schedule.map((lesson, index) => (
              <div key={index} style={cardStyle}>
                <p style={{ margin: '0 0 8px', color: '#D71935', fontWeight: 700 }}>
                  {lesson.day} · {lesson.time}
                </p>
                <h3 style={{ margin: '0 0 8px', color: '#0B1F44', fontSize: '18px' }}>
                  {lesson.subject}
                </h3>
                <p style={{ margin: 0, color: '#68758b', fontSize: '14px' }}>
                  Teacher: Mr Doniyor
                </p>
              </div>
            ))}
            <p style={{ color: '#68758b', fontSize: '12px' }}>
              Demo schedule — confirm times with your education center.
            </p>
          </div>
        ) : title === 'Homework' ? (
          <div style={{ display: 'grid', gap: '14px' }}>
            {homework.map((task, index) => (
              <div key={index} style={cardStyle}>
                <span style={{
                  color: submitted.includes(index) ? '#16803d' : '#b45309',
                  background: submitted.includes(index) ? '#dcfce7' : '#fef3c7',
                  padding: '5px 9px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 700,
                }}>
                  {submitted.includes(index) ? 'Submitted' : 'Pending'}
                </span>
                <p style={{ color: '#68758b', fontSize: '13px', margin: '14px 0 5px' }}>
                  {task.subject}
                </p>
                <h3 style={{ color: '#0B1F44', fontSize: '18px', margin: '0 0 12px' }}>
                  {task.title}
                </h3>
                <p style={{ color: '#68758b', fontSize: '14px' }}>
                  Deadline: {task.due}
                </p>
                <button
                  disabled={submitted.includes(index)}
                  onClick={() => setSubmitted((old) => [...old, index])}
                  style={{
                    background: submitted.includes(index) ? '#d1d5db' : '#0B1F44',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    cursor: submitted.includes(index) ? 'default' : 'pointer',
                    fontSize: '14px',
                    width: '100%',
                  }}
                >
                  {submitted.includes(index) ? 'Homework Submitted ✓' : 'Submit Homework'}
                </button>
              </div>
            ))}
            <p style={{ color: '#68758b', fontSize: '12px' }}>
              Demo only — submissions are not uploaded to a teacher yet.
            </p>
          </div>
        ) : title === 'Grades' ? (
          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={{
              background: '#0B1F44',
              padding: '22px',
              borderRadius: '16px',
              color: '#ffffff',
            }}>
              <p style={{ margin: 0, color: '#ffffff', opacity: 0.85 }}>
                Overall Average
              </p>
              <h2 style={{
                fontSize: '38px',
                color: '#ffffff',
                margin: '8px 0',
              }}>
                {average}%
              </h2>
              <div style={{
                background: '#ffffff40',
                height: '8px',
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: `${average}%`,
                  height: '100%',
                  background: '#D71935',
                }} />
              </div>
            </div>

            {grades.map((item) => (
              <div key={item.subject} style={cardStyle}>
                <p style={{ color: '#68758b', margin: '0 0 6px', fontSize: '13px' }}>
                  {item.subject}
                </p>
                <h3 style={{ color: '#0B1F44', margin: '0 0 12px', fontSize: '18px' }}>
                  {item.exam}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                  <span style={{ color: '#68758b', fontSize: '14px' }}>Exam result</span>
                  <strong style={{ color: '#D71935' }}>{item.examScore}</strong>
                </div>
              </div>
            ))}
            <p style={{ color: '#68758b', fontSize: '12px' }}>
              Demo grades only — these are not real student results.
            </p>
          </div>
        ) : title === 'Attendance' ? (
          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={{
              background: '#0B1F44',
              color: '#ffffff',
              padding: '22px',
              borderRadius: '16px',
            }}>
              <p style={{ margin: 0, color: '#ffffff', opacity: 0.85 }}>
                Attendance Rate
              </p>
              <h2 style={{ fontSize: '38px', color: '#ffffff', margin: '8px 0' }}>
                {attendanceRate}%
              </h2>
              <div style={{
                background: '#ffffff40',
                height: '8px',
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: `${attendanceRate}%`,
                  height: '100%',
                  background: '#D71935',
                }} />
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '18px',
                gap: '12px',
              }}>
                <span>Present: {presentCount}</span>
                <span>Absent: {absentCount}</span>
              </div>
            </div>

            <h2 style={{ color: '#0B1F44', fontSize: '20px' }}>
              Attendance History
            </h2>

            {attendance.map((lesson, index) => (
              <div key={index} style={{
                ...cardStyle,
                borderLeftColor: lesson.status === 'Present' ? '#16a34a' : '#D71935',
              }}>
                <p style={{ color: '#68758b', margin: '0 0 8px', fontSize: '13px' }}>
                  {lesson.date}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <strong style={{ color: '#0B1F44' }}>{lesson.subject}</strong>
                  <span style={{
                    color: lesson.status === 'Present' ? '#166534' : '#b91c1c',
                    background: lesson.status === 'Present' ? '#dcfce7' : '#fee2e2',
                    padding: '6px 10px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}>
                    {lesson.status}
                  </span>
                </div>
              </div>
            ))}
            <p style={{ color: '#68758b', fontSize: '12px' }}>
              Demo attendance — actual records will be connected later.
            </p>
          </div>
        ) : title === 'Study Materials' ? (
          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={{
              background: '#0B1F44',
              color: '#ffffff',
              borderRadius: '16px',
              padding: '18px',
            }}>
              <h2 style={{
                margin: '0 0 8px',
                fontSize: '21px',
                lineHeight: 1.4,
                color: '#ffffff',
              }}>
                🇬🇧 English Materials
              </h2>
              <p style={{
                margin: 0,
                fontSize: '14px',
                lineHeight: 1.5,
                color: '#ffffff',
              }}>
                PDFs, listening audio, videos and documents
              </p>
            </div>

            <div style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
            }}>
              {(['All', 'PDF', 'Audio', 'Video', 'Document'] as MaterialType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setMaterialFilter(type)}
                  style={{
                    background: materialFilter === type ? '#0B1F44' : '#ffffff',
                    color: materialFilter === type ? '#ffffff' : '#0B1F44',
                    border: '1px solid #dbe3ef',
                    borderRadius: '20px',
                    padding: '9px 13px',
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}
                >
                  {type}
                </button>
              ))}
            </div>

            {materials
              .filter((material) => materialFilter === 'All' || material.type === materialFilter)
              .map((material) => (
                <div key={material.id} style={cardStyle}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '12px',
                  }}>
                    <span style={{ fontSize: '30px' }}>{material.icon}</span>
                    <div>
                      <h3 style={{
                        color: '#0B1F44',
                        fontSize: '17px',
                        margin: '0 0 6px',
                      }}>
                        {material.title}
                      </h3>
                      <span style={{
                        color: '#D71935',
                        fontSize: '12px',
                        fontWeight: 700,
                      }}>
                        ENGLISH · {material.type.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <p style={{
                    color: '#68758b',
                    fontSize: '14px',
                    lineHeight: 1.5,
                    margin: '0 0 14px',
                  }}>
                    {material.description}
                  </p>

                  <button
                    onClick={() => alert(
                      `${material.title}: demo item. A real file has not been uploaded yet.`
                    )}
                    style={{
                      background: '#0B1F44',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '12px 16px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      width: '100%',
                    }}
                  >
                    Open Material
                  </button>
                </div>
              ))}

            {materials.filter(
              (material) => materialFilter === 'All' || material.type === materialFilter
            ).length === 0 && (
              <div style={{
                border: '1px dashed #cbd5e1',
                borderRadius: '14px',
                padding: '24px',
                textAlign: 'center',
                color: '#68758b',
              }}>
                No materials in this category yet.
              </div>
            )}

            <p style={{
              color: '#68758b',
              fontSize: '12px',
              lineHeight: 1.5,
            }}>
              These are demo entries. Real files and downloads will be connected later.
            </p>
          </div>
        ) : (
          <div style={{
            background: '#ffffff',
            border: '1px solid #e1e7f0',
            borderRadius: '14px',
            padding: '20px',
          }}>
            <p style={{ color: '#68758b', lineHeight: 1.6, margin: 0 }}>
              The {title.toLowerCase()} section will appear here.
            </p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div style={{
      padding: '24px',
      maxWidth: '420px',
      width: '100%',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box',
    }}>
      <button
        onClick={onBack}
        style={{
          background: '#0B1F44',
          color: '#ffffff',
          border: 'none',
          borderRadius: '10px',
          padding: '12px 16px',
          fontSize: '14px',
          cursor: 'pointer',
        }}
      >
        ← Back to Home
      </button>

      <h1 style={{
        color: '#0B1F44',
        fontSize: '30px',
        lineHeight: 1.3,
        margin: '24px 0 20px',
      }}>
        {page}
      </h1>

      <div style={{ display: 'grid', gap: '14px' }}>
        {(sections[page] || []).map((item) => (
          <button
            key={item}
            onClick={() => setSelectedSection(item)}
            style={buttonStyle}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default StudentPage
