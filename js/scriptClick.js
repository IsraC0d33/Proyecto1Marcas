
    //No evaluable -> intensidad:Poca

    let container = document.querySelector('.change-language');
    let countries = container.querySelectorAll('div');

    function españa() {
        for (let i = 1; i < countries.length; i++) {
            if (countries[i].style.display == 'none') {
                countries[i].style.display = 'block'
            } else {
                countries[i].style.display = 'none'
            }
        }
    };