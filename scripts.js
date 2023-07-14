// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeoff = document.getElementById("takeoff");
    const status = document.getElementById("flightStatus");
    const background = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const shuttleHeight = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;
    const rocket = document.getElementById("rocket");
    let altitude = 0;
    takeoff.addEventListener('click', function () {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.") == true){
            status.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
            altitude = 10000;
            height.innerHTML = altitude;
        };
    });

    land.addEventListener('click', function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed";
        background.style.backgroundColor = "green";
        altitude = 0;
        height.innerHTML = altitude;
    });

    abort.addEventListener('click', function(){
        if (window.confirm("Confirm that you want to abort the mission.") == true){
            status.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "green";
            altitude = 0;
            height.innerHTML = altitude;
        };
    });
//event delegation
    document.addEventListener('click', function(event){
        if (event.target.id === "left"){
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "right"){
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "up"){
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            height.innerHTML = altitude;
        }
        if (event.target.id === "down"){
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            height.innerHTML = altitude;
        }
    })

    



    










}
window.addEventListener("load", init);