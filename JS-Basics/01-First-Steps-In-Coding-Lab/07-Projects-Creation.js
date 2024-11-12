function projectsCreation(input){

    let architect = input[0];
    let countProjects = input[1];
    let totalHours = countProjects * 3;

    console.log(`The architect ${architect} will need ${totalHours} hours to complete ${countProjects} project/s.`);
}

projectsCreation(["George",4]);