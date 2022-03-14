let header = document.getElementsByTagName('header');

header[0].style.backgroundColor = '#90be6d';


let emergencyTasks = document.getElementsByClassName('emergency-tasks');

for (let i = 0; i < emergencyTasks.length; i += 1) {
    emergencyTasks[i].style.backgroundColor = '#e07a5f';
}

let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');

for (let i = 0; i < noEmergencyTasks.length; i += 1) {
    noEmergencyTasks[i].style.backgroundColor = '#e9c46a';
}

let emergency = document.querySelectorAll('.emergency-tasks h3');

for (let i = 0; i < emergency.length; i += 1) {  
    emergency[i].style.backgroundColor = 'blue';
}

let noEmergency = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i < noEmergency.length; i += 1) {  
    noEmergency[i].style.backgroundColor = 'black';
}

let footer = document.getElementsByTagName('footer');

footer[0].style.backgroundColor = '#081c15';
