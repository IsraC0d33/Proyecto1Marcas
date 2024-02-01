    //No evaluable -> intensidad:Poca

    let destiny = document.querySelector('.destiny');
    let foreign = document.querySelector('.foreign');


    let dashDestinations = document.querySelector('.dash-destinations');    
    let dashIntern = document.querySelector('.dash-intern-abroad');
    
    destiny.addEventListener('mouseover', () => dashDestinations.style.display = 'flex');
  
    destiny.addEventListener('mouseout', () => dashDestinations.style.display = 'none');

    foreign.addEventListener('mouseover', () => dashIntern.style.display = 'flex');
  
    foreign.addEventListener('mouseout', () => dashIntern.style.display = 'none');

  
  
    