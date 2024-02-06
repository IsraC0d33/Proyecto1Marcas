//No evaluable -> intensidad:Poca

let destiny = document.querySelector('.destiny');
let foreign = document.querySelector('.foreign');
let project = document.querySelector('.project');

let dashDestinations = document.querySelector('.dash-destinations');
let dashIntern = document.querySelector('.dash-intern-abroad');
let dashProjects = document.querySelector('.dash-projects');

destiny.addEventListener('mouseover', () => dashDestinations.style.display = 'flex');

destiny.addEventListener('mouseout', () => dashDestinations.style.display = 'none');

foreign.addEventListener('mouseover', () => dashIntern.style.display = 'flex');

foreign.addEventListener('mouseout', () => dashIntern.style.display = 'none');


project.addEventListener('mouseover', () => dashProjects.style.display = 'flex');

project.addEventListener('mouseout', () => dashProjects.style.display = 'none');



