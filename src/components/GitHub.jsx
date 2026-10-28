import { GitHubCalendar } from 'react-github-calendar'
import 'react-activity-calendar/tooltips.css'

function GitHub() {
  return (
    <section id="github" className="github">
      <h2 className="section-label">GITHUB</h2>
    <h3 className="github__heading">The graph is a little shy, but I promise I do ship things lol</h3>
      <div className="github__stats">
        <div className="github__calendar">
          <GitHubCalendar
            username="rajsekharrr"
            colorScheme="light"
            blockSize={12}
            blockMargin={3}
            fontSize={12}
            tooltips={{
              activity: {
                text: ({ count, date }) => `${count} contribution${count === 1 ? '' : 's'} on ${date}`,
              },
            }}
            theme={{
              light: ['#f0f0f0', '#c7d7ff', '#91b4ff', '#4d86ff', '#0057FF'],
            }}
          />
        </div>
      </div>
      <a
        className="github__profile-link"
        href="https://github.com/rajsekharrr"
        target="_blank"
        rel="noopener noreferrer"
      >
        → github.com/rajsekharrr
      </a>
    </section>
  )
}

export default GitHub