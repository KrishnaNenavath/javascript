let count = 0;

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')


btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const style = e.currentTarget.classList
        
        if(style.contains('decrease')){
            count --
            value.textContent = count
        }
        else if(style.contains('add') ){
            count ++
            value.textContent = count
        }
        else{
            count = 0
           value.textContent = count
        }
        if(count > 0){
            value.style.color='green'
        }
        else if (count < 0){
            value.style.color = 'red'
        }
      else {
         value.style.color = 'black'
      }
    })
})





