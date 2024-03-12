import Head from 'next/head'
import { createElement } from 'react'
import Image from "next/image"

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
      para.innerHTML = `This is a soccer like game built using Python and Turtle library. The approach involves building custom game engine parts to 
                        build the game logic and loop on top of.`;
      textTransition(para);
    }
    else if (e.target.id == "mrbluu"){
      para.innerHTML = `I made this for a game jam. I ranked 2nd for the game jam and recieved great feedback from other developers. This is a 2D strategy game where the player has
                        to carefully manage their resources. The game logic was the most difficult part to work on but it eventually contributed to the fun game loop.`;
      textTransition(para);
    }
    else if (e.target.id == "aboutlastnight"){
      para.innerHTML = `This is a browser game built using vanilla Javascript. My approach was to make a simple custom game engine to then build the 
                          game on top of. The physics is also built from scratch.`;
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
            <h1 id="main-head">Hey, I'm Kamvelihle!</h1>
          
            <div id="info-container">
                  <h1>About Me</h1>
                  <p id="myinfo">
                  My name is Kamvelihle Gwijana and I am a software developer based in Cape Town.<br></br>
                  I specialise in gamification and tackling socio-economic issues through developing software. Through my freelancing and personal projects I've had
                  the privilege of working with industry experts and I continue to grow my skills in developing interactive applications that aim to help people in the real world.
                  </p>
            </div>
          </div>
          <div id="work-container">
              <div id="projects">

                <div id="proj-head">
                <h1>My Projects</h1>
                </div>

                <h2>1. Slot Machine Game </h2>
                <img src="plinko.png" height="300" width="550" id="aboutlastnight" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with Javascript and PixiJS</label>
                <br></br><a href="https://github.com/kamvegwij/PlinkoGame">Source Code</a>

                <h2>2. Seasons In Isolation </h2>
                <img src="seasons.png" height="300" width="550" id="mrbluu" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with Godot and GDScript</label>
                <br></br><a href="https://itwasadream.itch.io/seasons-in-isolation">Deployed Version</a>

                <h2>3. Soccer Game </h2>
                <img src="pythonbg.png" height="300" width="550" id="heybud" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with Python</label>
                <br></br><a href="https://github.com/kamvegwij/Python-Turtle-Soccer-Game">Source Code</a>

              </div>

              <div id="description">
                <div id="descr-head">
                  <h1>Description</h1>
                </div>
                  <p id="descriptions">Click on the project image to see description below:</p>
              </div>
          </div>
          <h1>Technical Skills</h1>
          <div id="tech">
            
            <img src="pythonbg.png" id="tech_img" name="python"></img>
            <img src="cssbg.png" id="tech_img" name="css"></img>
            <img src="godot.png" id="tech_img" name="godot"></img>
            <img src="javabg.png" id="tech_img" name="java"></img>
            <img src="jsbg.png" id="tech_img" name="javascript"></img>
            <img src="Csharp_Logo.png" id="tech_img" name="csharp"></img>
            <img src="unity.png" id="tech_img" name="unity"></img>
            <img src="react.png" id="tech_img" name="unreal"></img>

          </div>
          <div id="bottom-container">
            <div id="bottom-info">
                <h1>Why hire me?</h1>
                <p id="myinfo">In my experience I have been part of projects from their early phases of SDD drafting, testing and laying out
                  the codebase structure all while adopting agile methodologies. This has helped me be confident in the work I do and the skills that I bring to a team, in these early phases I have 
                  also worked with amazing individuals and learned alot about maintaining applications, taking a more business like perspective and most importantly 
                  always testing the product with the customers to ensure the project stays in line with initial goals. I am eager to continue to grow in the industry and be part of game changing products. 
                </p>
            </div>
          </div>

          <div id="work-xp">
            <h1>Work Experience</h1>

            <div id="xp_item">
              <h1>TECHSPRUNG - Game Developer (Contract)</h1>
              <h1>April 2022 - </h1>

              <p id="myinfo">
              My role includes implementing game mechanics, UI/UX, software design, <br></br> code optimisation and version controlling using GitLab. 
              Through this role I have learned crucial skills needed for gamification and <br></br>
              I acquired a Games For Learning certificate which has equipped me with the necessary skills to be able to<br></br> 
              develop and implement applications that can integrate real life lessons and turn them into a fun and interactive products.
              </p>
            </div>
            <div id = "xp_item">
              <h1> ArchDevSoftware(USA) - Game Developer (Contract)</h1>
              <h1> March 2023 - December 2023 </h1>
              <p id="myinfo">
              My role in the team was implementing game mechanics, network programming from the game engine and debugging through an agile methodology.<br></br>
              With this project I learned important skills that have improved my ability to integrate real world scenarios into a mobile/desktop application.<br></br> 
              I also learned skills in network programming, C++ using Unreal Engine, code optimisation and debugging
              </p>
            </div>
            <div id = "xp_item">
              <h1>Yappy LLC(India) - Game Developer (Contract)</h1>
              <h1> March 2023 - April 2023</h1>
              <p id="myinfo">
              My role included finding open source projects and modifying them to get them ready for deployment,<br></br>
              building browser games using Unity and Godot Engine, configuring games 
              for Android and IOS devices, optimising the games for weaker devices <br></br> and deploying games for browser play.
              </p>
            </div>
            <div id = "xp_item">
              <h1>Flux-point Technologies - Developer</h1>
              <h1>August 2022 - October 2022</h1>

              <p id="myinfo">
                My role as a developer was to convert a clients powerpoint slides to interactive adobe captivate slides.<br></br>
                This introduced to me to working in a fast paced environment.
              </p>
            </div>
          </div>


    </main>
    </div>
  )
}
