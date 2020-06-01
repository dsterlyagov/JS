const dragAndDrop = () =>{
    const card = document.querySelector('.js-card');
    const cells = document.querySelectorAll('.js-cell');
    const dragStart= function(){
        //console.log('dragstart');
        setTimeout(()=>{
            this.classList.add('hide');
        },0);
    };
    const dragEnd = function(){
        this.classList.remove('hide')
    };
    const dragOver = function(event){
      //  console.log('over');
        event.preventDefault();

    };
    const dragEnter = function(event){
        event.preventDefault();
        //console.log('enter');
        this.classList.add('hovered');
    };
    const dragLeave = function(){
        //console.log('leave');
        this.classList.remove('hovered');
    };
    const dragDrop = function(){
        //console.log('drop');
        this.append(card);
        this.classList.remove('hovered');
    }
    cells.forEach((cell)=>{
      //  console.log(cell);
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    })
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
};

dragAndDrop();