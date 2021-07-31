;(function(){
    const adminList = document.querySelector('.js-admin-1');
    const adminClose = document.querySelector('.js-admin-close');
    const adminBtn = document.querySelector('.js-admin-btn');
    const modalList = document.querySelector('.js-modal-1');
    const modalListAdd = document.querySelector('.js-modal-add');
    const modalClose = document.querySelectorAll('.js-modal-close');
    const overlay = document.querySelector('.overlay');
    const card = document.querySelector('.card');
    const modalEdit = document.querySelector('.modal-edit');
    const modalAdd = document.querySelector('.modal-add');
    const cardFooter = document.querySelector('.card-footer'); 


    adminList.addEventListener('click',adminToggle);
    adminClose.addEventListener('click',adminToggle);
    adminBtn.addEventListener('click',addminBtnToggle);
    modalList.addEventListener('click',modalToggle);
    modalListAdd.addEventListener('click', modalToggle);
    modalClose.forEach(item => {
        item.addEventListener('click',modalToggle);
    });

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
    function modalToggle(e){
        console.log(e.target.dataset.toggle)
        if(e.target.dataset.toggle === 'open-add'){
            overlay.classList.remove('d-none');
            modalAdd.classList.remove('hide');
            modalAdd.classList.add('show');
        }else if(e.target.dataset.toggle === 'add-close'){
            overlay.classList.add('d-none');
            modalAdd.classList.add('hide');
            modalAdd.classList.remove('show');
        }else{
            if(e.target.dataset.toggle === 'close'){
                overlay.classList.add('d-none');
                modalEdit.classList.remove('show');
                modalEdit.classList.add('hide');
            }else{
                overlay.classList.remove('d-none');
                modalEdit.classList.remove('hide');
                modalEdit.classList.add('show');
            }
        }
    }
})()