import logo from './logo2.png';

function App() {
  return (
    <div class="container">
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
          integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
          crossorigin="anonymous"
        />
      </head>

      <div class='spacer spacer3x'>
        <a href="https://www.twitch.tv/salvner" class='box purple'>
          <i class="fab fa-twitch"></i>
          <h2>Twitch</h2>
        </a>
        <a href="javascript://" class='box blurple'>
          <i class="fab fa-discord"></i>
          <h2>Discord</h2>
        </a>
        <a href="javascript://" class='box bluefish'>
          <i class="fab fa-twitter"></i>
          <h2>Twitter</h2>
        </a>
        <a href="https://www.youtube.com/c/Salvner/" class='box redgay'>
          <i class="fab fa-youtube"></i>
          <h2>YouTube</h2>
        </a>
        <a href="https://www.twitch.tv/popout/salvner/extensions/7hoqd16sufw9f9h3swlkdt6lqdn3ud/panel" class='box orange'>
          <i class="fas fa-desktop"></i>
          <h2>Salv's Setup</h2>
        </a>
        <img className="image" src={logo} alt="logo" />

        <a href="https://www.speedrun.com/subnautica" class='box lime'>
          <i class="fas fa-tachometer-alt"></i>
          <h2>Leaderboards</h2>
        </a>
        <a href="mailto:salvnerofthesea@gmail.com" class='box blue'>
          <i class="fas fa-envelope-square"></i>
          <h2>Email</h2>
        </a>
      </div>

    </div>




    // <div className="app">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <img className="image" src={logo}  alt="logo" />
    //     {/* <html>
    //       <iframe title="hello" src="https://www.twitch.tv/popout/salvner/extensions/7hoqd16sufw9f9h3swlkdt6lqdn3ud/panel"></iframe>
    //     </html> */}
    //     <div className="thing">
    //     <a href="https://www.twitch.tv/popout/salvner/extensions/7hoqd16sufw9f9h3swlkdt6lqdn3ud/panel" class="button">
    //       Salv Setup
    //     </a>
    //     <a href="https://discord.gg/XYQ24xF" class="button">
    //       <i class="fab fa-discord" /> Discord 
    //       {/* not working */}
    //     </a>
    //     <a href="https://www.youtube.com/c/Salvner/" class="button">Youtube</a>
    //     <a href="https://twitter.com/SalvnerS" class="button">Twitter</a>
    //     <a href="https://www.twitch.tv/salvner" class="button">Twitch</a>
    //     </div>
    //     <p> Made by an amazingly shit dev</p>
    // </div>
  );
}

export default App;
