import Head from 'next/head'
import { createElement } from 'react'
export default function Home() {
  
  var id = null;
  function textTransition(x){
    //I want to animate this transition:
      var inset_count = 0;
      clearInterval(id);
      id = setInterval(frame, 2);

      //define transition function:
      function frame(){
        if (inset_count == 200){
          x.style.boxShadow = "inset 0 0 0 0 #d0b644";
          clearInterval(id);
        }
        else{
          inset_count += 1;
          x.style.boxShadow = "inset 100px 0 0 0 #d0b644";
          x.style.transition = "color .6s ease-in-out, box-shadow .3s ease-in-out";
          x.style.color = "rgba(0, 0, 2)";
        }
      }
  }
  const itemClick = (e) => {
    console.log(e.target);//test which item selected

    //I also want to highlight the tech used for the different projects

    //i will later then change some of its style properties when clicked.
    //get first element of nodelist returned by getElementsByName() using index 0
    const python = document.getElementsByName("python")[0];
    const css = document.getElementsByName("css")[0];
    const godot = document.getElementsByName("godot")[0];
    const java = document.getElementsByName("java")[0];
    const javascript = document.getElementsByName("javascript")[0];
    const captivate = document.getElementsByName("captivate")[0];
    const html = document.getElementsByName("html")[0];

    //now for conditions to allow me to show the description for each project:
    const para = document.getElementById("descriptions");
    if (e.target.id == "heybud"){
      para.innerHTML = `This is a short top-down adventure game I made using Godot and wrote in GDScript. 
                        You begin in the characters farm, 
                        his name Buddy, and are instructed to find his tools that have gone missing. Once every item is collected you are prompted
                        to go to his house to then enter the next level. There is currently only one level.`;
      textTransition(para);
    }
    else if (e.target.id == "aboutlastnight"){
      para.innerHTML = `This is a submission for my first game jam. I worked solo on this game and made it using Godot and some royalty free
                        assets on Sketchfab. More info on this game is in the link below`;
      textTransition(para);
                      }
    else if (e.target.id == "cinema"){
      para.innerHTML = `This is one of the two final year projects in Computer Science and it is web app that allows a user to
                        choose a featured movie, book a seat and also allow them to cancel the seat. This user data is then stored
                        in a database for admin purposes. I worked mainly on backend in this project using Flask.`;
      textTransition(para);
      textTransition(para);
                      }
    else if (e.target.id == "help"){
      para.innerHTML = `This is the last final year project and it is a web app that allows a user to login and have access to a page with helplines
                        in which they can be immediately taken to a call with one or they can access the chatroom where they can have a one on one
                        talk with a psychologist registered on our service. In this project I was a fullstack developer as I made the pages,
                        flask implementation, API data fetching and some of the main interactions.`;
      textTransition(para);
                      }
    else if (e.target.id == "game"){
      para.innerHTML = `This is a project I am working on with a team for a company and I am a backend developer. We're using Godot and GDScript to
                        make an educational video game.`;
      textTransition(para);    
                      }

  }

  const showStack = (item) => {
    console.log(item);//tech used held here.
    items = ["python, css, godot, html, java, javascript, captivate"]//this is an array of the tech used
  }

  return (
  <div className="container">
    <Head>
        <title>Kamvelihle Gwijana</title>
      </Head>
      
      <main>
          <div id="top-container">
            <h1 id="main-head">Hey, I'm Kamve!</h1>
          
            <div id="info-container">
                  <h1>About Me</h1>
                  <p>
                  My name is Kamvelihle Gwijana and I am from 
                  Queenstown, Eastern Cape South Africa.
                  I am a Full Stack Developer and Game Developer with a passion for learning new technologies and applying them practically.
                  I have strong leadership qualities as I served as the chairman and club captain for the UWC Tennis Club and for the final year project I took the initiative to 
                  make sure the team stayed on track and met the constant deadlines. I work well in a team and as a practical learner I enjoy socialising with other people
                  and coming up with new ways of solving problems.
                  </p>
            </div>
          </div>
          <div id="work-container">
              <div id="projects">

                <div id="proj-head">
                <h1>My Projects</h1>
                </div>

                <h2>1. About Last Night</h2>
                <img src="gameshot.png" height="300" width="550" id="aboutlastnight" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with Godot and GDScript</label>
                <br></br><a href="https://itwasadream.itch.io/about-last-night">Deployed Version</a>

                <h2>2. Hey Buddy - Top Down Adventure Game</h2>
                <img src="heybud.jpg" height="300" width="550" id="heybud" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with Godot and GDScript.</label>
                <br></br><a href="https://github.com/kamvegwij/HeyBuddyProject/tree/main/project_files">Source Code</a>
                <br></br><a href="https://youtu.be/DEqJ1oXKJUI">Gameplay Runthrough</a>

                <h2>3. Cinema Booking</h2>
                <img src="akatsukicinema.jpg" height="300" width="550" id="cinema" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with HTML, CSS, JavaScript, Flask and SQL.</label>
                <br></br><a href="https://github.com/kamvegwij/AKATSUKI/tree/main/OnlineCinemaBooking">Source Code </a>

                <h2>4. QuickHelp</h2>
                <img src="quickhelp.jpg" height="300" width="550" id="help" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with HTML, CSS, JavaScript, Flask, SQL, Type.fit API, Twilio and deployed on Heroku.</label>
                <br></br><a href="https://github.com/kamvegwij/FINAL-CAPSTONE/tree/main/Product%20Development">Source Code</a>
                <br></br><a href="https://myquickhelp.herokuapp.com/">Deployed Version </a>

                <h2>5. Educational Video Game</h2>
                <img src="bg3.png" height="300" width="550" id="game" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with Godot and GDScript.</label>

              </div>

              <div id="description">
                <div id="descr-head">
                  <h1>Description</h1>
                </div>
                  <p id="descriptions">Click on the project image to see description below:</p>
              </div>
          </div>
          <h1>What Do I Know?</h1>
          <div id="tech">
            
            <img src="pythonbg.png" id="tech_img" name="python"></img>
            <img src="cssbg.png" id="tech_img" name="css"></img>
            <img src="godot.png" id="tech_img" name="godot"></img>
            <img src="htmlbg.png" id="tech_img" name="html"></img>
            <img src="javabg.png" id="tech_img" name="java"></img>
            <img src="jsbg.png" id="tech_img" name="javascript"></img>
            <img src="Csharp_Logo.png" id="tech_img" name="csharp"></img>
            <img src="unity.png" id="tech_img" name="unity"></img>

          </div>
          <div id="bottom-container">
          <div id="bottom-info">
              <h1>Why hire me?</h1>
              <p>I'm a young and enthusiastic developer and I'm ready to challenge myself by aquiring more skills and knowledge in the
                 field of Software Development. I truly believe in thinking different and allowing myself to 
                 take up unfamiliar technologies as this in turn makes me grow greatly as a developer and overall as a person because accomplishing something I 
                 had little to no prior knowledge is a great source of motivation for any future project.
              </p>
          </div>
          </div>

          <div id="embedProj">
            <h1>Download my Project(s)</h1>
            <iframe height="167" frameBorder="0" src="https://itch.io/embed/1855873" width="552" id="downloadLink"><a href="https://itwasadream.itch.io/about-last-night">About Last Night by Kamve</a></iframe>
          </div>

          <footer>
            <p>Find more of my projects on my GitHub page</p>
            <a href="https://github.com/kamvegwij">GitHub</a>
          </footer>
    </main>
    </div>
  )
}
