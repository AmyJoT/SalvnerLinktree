import logo from './logo2.png';

function App() {
  return (
    <div className="container">
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
          integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
          crossOrigin="anonymous"
        />
      </head>

      <div className='spacer spacer3x'>
        <a href="https://www.twitch.tv/salvner" className='box purple'>
          <i className="fab fa-twitch"></i>
          <h2>Twitch</h2>
        </a>
        <a href="https://discord.gg/XYQ24xF" className='box blurple'>
          <i className="fab fa-discord"></i>
          <h2>Discord</h2>
        </a>
        <a href="https://twitter.com/SalvnerS" className='box bluefish'>
          <i className="fab fa-twitter"></i>
          <h2>Twitter</h2>
        </a>
        <a href="https://www.youtube.com/c/Salvner/" className='box redgay'>
          <i className="fab fa-youtube"></i>
          <h2>YouTube</h2>
        </a>
        <a href="https://www.twitch.tv/popout/salvner/extensions/7hoqd16sufw9f9h3swlkdt6lqdn3ud/panel" className='box orange'>
          <i className="fas fa-desktop"></i>
          <h2>Salv's Setup</h2>
        </a>
          <img className="image" src={logo} alt="logo" />

        <a href="https://www.speedrun.com/subnautica" className='box lime'>
          <i className="fas fa-tachometer-alt"></i>
          <h2>Leaderboards</h2>
        </a>
        <a href="mailto:salvnerofthesea@gmail.com" className='box blue'>
          <i className="fas fa-envelope-square"></i>
          <h2>Email</h2>
        </a>
      </div>

    </div>
  );
}

export default App;
