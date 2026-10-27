import { GitHubCalendar } from 'react-github-calendar'

function GitHub() {
  const statsUrl = 'https://github-readme-stats.vercel.app/api?username=rajsekharrr&show_icons=true&theme=default&bg_color=ffffff&title_color=0057FF&icon_color=0057FF&text_color=0D0D0D&hide_border=true&rank_icon=github'
  const languagesUrl = 'https://github-readme-stats.vercel.app/api/top-langs/?username=rajsekharrr&layout=compact&bg_color=ffffff&title_color=0057FF&text_color=0D0D0D&hide_border=true'

  return (
    <section id="github" className="github">
      <h2 className="section-label">GITHUB</h2>
      <h3 className="github__heading">A little proof that I do, in fact, ship things</h3>
      <div className="github__stats">
        <div className="github__row">
          <div className="github__image-container">
            <img src={statsUrl} alt="GitHub stats" />
          </div>
          <div className="github__image-container">
            <img src={languagesUrl} alt="Top GitHub languages" />
          </div>
        </div>
        <div className="github__calendar">
          <GitHubCalendar
            username="rajsekharrr"
            colorScheme="light"
            blockSize={12}
            blockMargin={3}
            fontSize={12}
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