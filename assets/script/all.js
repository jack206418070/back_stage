;(function(){
    const adminList = document.querySelector('.js-admin-1');
    const adminClose = document.querySelector('.js-admin-close');
    const adminBtn = document.querySelector('.js-admin-btn');
    const overlay = document.querySelector('.overlay');
    const card = document.querySelector('.card');
    const cardFooter = document.querySelector('.card-footer'); 


    adminList.addEventListener('click',adminToggle);
    adminClose.addEventListener('click',adminToggle);
    adminBtn.addEventListener('click',addminBtnToggle);


    function adminToggle(e){
        if(e.target.dataset.toggle === 'close'){
            overlay.classList.add('d-none');
            card.classList.remove('show');
            card.classList.add('hide');
        }else{
            overlay.classList.remove('d-none');
            card.classList.remove('hide');
            card.classList.add('show');
        }
    }


    function addminBtnToggle(e){
        console.log(e)
        if(e.target.dataset.btntoggle === 'close'){
            adminBtn.classList.add('active');
            card.classList.add('show-bg');
            cardFooter.classList.remove('hide');
            cardFooter.classList.add('show');
            e.target.dataset.btntoggle = 'open'
        }else{
            adminBtn.classList.remove('active');
            card.classList.remove('show-bg');
            cardFooter.classList.add('hide');
            cardFooter.classList.remove('show');
            e.target.dataset.btntoggle = 'close'
        }
    }
})()