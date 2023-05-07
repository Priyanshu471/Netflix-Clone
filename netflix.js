const tabitems = document.querySelectorAll('.tab-item');
const tabcontentitems = document.querySelectorAll('.tab-content-item');

//tab selection bar
function selectitem(e)
{
    removeborder();
    removeshow();
    this.classList.add('tab-border');
    // console.log(this.id);
    // console.log(this.id);
    const tabcontentitem = document.querySelector(`#${this.id}-content`);
    tabcontentitem.classList.add('show');
}
function removeborder()
{
    tabitems.forEach(item => item.classList.remove('tab-border'));
}

function removeshow(){
    tabcontentitems.forEach(item => item.classList.remove('show'));
}


tabitems.forEach(item =>item.addEventListener('click',selectitem));
 
