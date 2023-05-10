import React from 'react'
import Angel from "./Angel Villa.jpg"
import Max from "./Max.jpg"



export default function Home() {
  return (
    <div class="container">
        
        <h1> Welcome to our Video Game Review App!</h1>
        <h1> Created By: </h1>

        <div class="row">
          <div class="col offset-5">
           <div class="container">
              <h2>Max W.</h2>
              <img src={Max} alt="Max-img" width={150}></img>
              <a class="col offset " href="https://github.com/maxwattan"> Github </a>
              <a class="col offset-1" href="https://www.linkedin.com/in/maxwattana/"> LinkedIn </a>
            </div>
          </div>
        </div>

          <div class="row">
            <div class="col offset-5">
              <div class="container">
                <h2>Angel V.</h2>
              <img src={Angel} alt="Angel-img" width={150}></img>
              <a class="col offset" href='https://github.com/ajvee'>Github</a>
              <a class="col offset-1" href="https://www.linkedin.com/in/angeljvilla/"> LinkedIn </a>            
              </div>
            </div>
          </div>
        

    </div>
  )
}
