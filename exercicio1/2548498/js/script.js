function selectCategory (elementHtml) {

    const category = elementHtml.innerHTML;

    elementHtml.style.background='red';
    
    let items = Array.from(document. getElementById('items').children)
    
    items.forEach((element)=> {
            
            const itemCategory = element.querySelector('.categories').innerHTML;

            if(itemCategory !== category){
                element.style.display = 'none';
            }else {
                element.style.display = 'flex';
            } 
        }
    )

}