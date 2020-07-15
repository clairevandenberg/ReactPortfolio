import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
                <a href = "https://github.com/TeamCABBN/GiphyBoggle">
                <h3>Boggle Game</h3>
                </a>        
                <p>As a user who is looking to waste time i want to be able to play a word game and get a gif that will entertain me so that i can still be happy and waste some time in a fun way while I’m social distancing</p>
                <a href = "https://teamcabbn.github.io/GiphyBoggle/" class = "btn" role = "button" aria-disabled="true">
                <p>Try it</p>
                </a> 
            </Col>
               
            <Col size="md-12">
             <a href = "https://github.com/bhamann-collab/shop">
                <h3>Kicks United</h3>
                </a>        
                <p>A shoe store app that allows users to login as members using passport and search for shoes listed in the stores database. When the user finds shoes they want to purchase they can add shoes to the cart and contiue checkout. User/Member infomation will be saved into the shops database to be used to keep track of their purchases.    </p>
                <a href = "https://kicksunited.herokuapp.com/" class = "btn" role = "button" aria-disabled="true">
                <p>Try it</p>
                </a> 
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
                <a href = "https://github.com/clairevandeneberg/Burger_ExpressHandleBars">
                <h3>Eat-Da-Burger</h3>
                </a>
                <p>Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page. Your app will store every burger in a database, whether devoured or not. </p>
                <a href = "https://stormy-spire-47508.herokuapp.com/"class = "btn" role = "button" aria-disabled="true">
                <p>Try it</p>
                </a> 
              </Col>

             <Col size="md-12">

                <a href = "https://github.com/clairevandeneberg/NoteTaker-Express">
                <h3>Note Taker App</h3>
                </a>
                <p>Application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file. Application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.    </p>
                <a href = "https://guarded-mesa-87525.herokuapp.com/"class = "btn" role = "button" aria-disabled="true">
                <p>Try it</p>
                </a> 
              </Col>
          </Row>

          <Row>
          <Col size="md-12">
                <a href = "https://github.com/clairevandeneberg/ReadMe-Generator">
                <h3>ReadMe Generator</h3>
                </a>
                <p>Application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file. Application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.    </p>
                <p>Fork to try it</p>
              </Col>

              <Col size="md-12">
                <a href = "https://github.com/clairevandeneberg/WeatherDashboardAPI">
                <h3>Weather DashBoard</h3>
                </a>
                <p>Simple Weather Dashboard that retrieves data from Open Weathers API and to use to geneate an application that retrieves weather data for cities and save events for each hour of the day. </p>
                <a href = "https://clairevandeneberg.github.io/WeatherDashboardAPI/"class = "btn" role = "button" aria-disabled="true">
                <p>Try it</p>
                </a> 
            </Col>
            
            <Row>
            <Col size="md-12">
                <a href = "https://github.com/clairevandeneberg/WorkDayScheduler">
                <h3>Work Day Scheduler</h3>
                </a>    
                <p>Simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Used Moment.js library to work with date and time.</p>
                <a href = "https://clairevandeneberg.github.io/PlannerDiary/" class = "btn" role = "button" aria-disabled="true">
                <p>Try it</p>
                </a> 
            </Col>

            <Col size="md-12">
                <a href = "https://github.com/clairevandeneberg/HomeworkThree">
                <h3>Random Password Generator</h3>
                </a>       
                <p>Test yourself on this quiz. Timed Quiz which will save your score via your local storage when you enter your initials.</p>
                <a href = "https://clairevandeneberg.github.io/HomeworkThree/" class = "btn" role = "button" aria-disabled="true">
                <p>Try it</p>
                </a> 
            </Col>
            </Row>

          </Row>
        </Container>
    </div>
  );
}

export default About;
