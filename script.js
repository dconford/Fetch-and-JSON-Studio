window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            json.sort(function (a, b) { 
                return b.hoursInSpace - a.hoursInSpace;
            });
            const div = document.getElementById("container");
            let holder = '';
            let holdArray = [];
            for (let i = 0; i < json.length; i++){
                if (json[i].active === true) {
                    holder = `
                        <div class="astronaut">
                            <div class="bio">
                              <h3>${json[i].firstName} ${json[i].lastName} </h3>
                                <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    <li style="color:green">Active: ${json[i].active} </li>
                                    <li>Skills: ${json[i].skills} </li>
                                </ul>
                            </div>
                            <img class="avatar" src="${json[i].picture}">
                        </div>
                    `;
                } else {
                    holder = `
                        <div class="astronaut">
                            <div class="bio">
                                <h3>${json[i].firstName} ${json[i].lastName} </h3>
                                <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    <li>Active: ${json[i].active} </li>
                                    <li>Skills: ${json[i].skills} </li>
                                </ul>
                            </div>
                            <img class="avatar" src="${json[i].picture}">
                        </div>
                    `;
                }
                holdArray.push(holder);
            }
            div.innerHTML = holdArray + `<h2 style="color:blue">Total # of Astronauts = ${json.length}`;
        });
    });
});
