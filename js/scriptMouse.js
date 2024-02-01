    //No evaluable -> intensidad:Poca

    var destiny = document.querySelector('.destiny');
    var foreign = document.querySelector('.foreign');


    var dashDestinations = document.querySelector('.dash-destinations');
    var dashIntern = document.querySelector('.dash-intern-abroad');

    
    destiny.addEventListener('mouseover', function() {
      dashDestinations.style.display = 'flex';
    });
  
    destiny.addEventListener('mouseout', function() {
      dashDestinations.style.display = 'none';
    });

    foreign.addEventListener('mouseover', function() {
      dashIntern.style.display = 'flex';
    });
  
    foreign.addEventListener('mouseout', function() {
      dashIntern.style.display = 'none';
    });

    
  
  
    