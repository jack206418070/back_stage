;(function(){
    const messageOpen = document.querySelector('.js-message-open');
    const messageClose = document.querySelector('.js-message-close');
    const messageModal = document.querySelector('.replay-modal');
    messageClose.addEventListener('click', replayToggle);
    messageOpen.addEventListener('click', replayToggle);
    

    function replayToggle(e){
        console.log(e)
        if(e.target.dataset.toggle === 'close'){
            messageModal.classList.add('hide');
            messageModal.classList.remove('show');
        }else{
            messageModal.classList.add('show');
            messageModal.classList.remove('hide');
        }
    }
})()