// TODO: add code here<script>
      window.addEventListener("load", function() {
        fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
            console.log(response);
            // Access the JSON in the response
            response.json().then(function(json) {
              const div = document.getElementById("container");
              div.innerHTML = `
              <div class="astronaut">
                <div class="bio">
                    <h3>${json[0].firstName} ${json[0].lastName} </h3>
                    <ul>
                        <li>Hours in space: ${json[0].hoursInSpace}</li>
                        <li>Active: ${json[0].active} </li>
                        <li>Skills: ${json[0].skills} </li>
                    </ul>
                </div>
                <img class="avatar" src="${json[0].picture}">
              </div>
              `;
            });
        });
    });



    

    
//   <div class="astronaut">
//    <div class="bio">
//       <h3>Mae Jemison</h3>
//       <ul>
//          <li>Hours in space: 190</li>${json.temp}
//          <li>Active: false</li>
//          <li>Skills: Physician, Chemical Engineer</li>
//       </ul>
//    </div>
//    <img class="avatar" src="images/mae-jemison.jpg">
// </div>



//   {
//     "id": 1,
//     "active": false,
//     "firstName": "Mae",
//     "lastName": "Jemison",
//     "skills": [
//           "Physician", "Chemical Engineer"
//     ],
//     "hoursInSpace": 190,
//     "picture": "mae-jemison.jpg"
//  },






//   Add code that runs on the window load event.
// This is done because we can't interact with the HTML elements until the page has loaded.
// Make a GET request using fetch to the astronauts API https://handlers.education.launchcode.org/static/astronauts.json
// Do this part inside the load event handler.
// Add each astronaut returned to the web page.
// Use the HTML template shown below.
// Be sure to use the exact HTML including the CSS classes. (starter code contains CSS definitions)
