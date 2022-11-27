//Basic function that creates a node with the provided tag, id and content
function createNode(tag, id, content) {
 let element = document.createElement(tag);
 element.id = id;
 element.innerHTML = content;
 return element 
}

//Create and append html elements

const container = createNode('div', 'container', ''); //create container
document.body.append(container);

const increase = createNode('button', 'increase', '+'); //create + button
container.append(increase);

const decrease = createNode('button', 'decrease', '-'); //create - button
container.prepend(decrease);

const valueContainer = createNode('div', 'valueContainer', '0'); //create value container
decrease.after(valueContainer);

const reset = createNode('button', 'reset', 'reset'); //create reset button
container.append(reset);



function changeValue(event) {
  switch(event.target.id){
    case 'increase':
    valueContainer.innerHTML++
    break;
    case 'decrease':
    valueContainer.innerHTML--
    break;
    case 'reset':
    valueContainer.innerHTML = 0;
    break;
  }
}

function changeColor() {
  if(valueContainer.innerHTML >= 0) {valueContainer.style.color = ''}
  else {valueContainer.style.color = 'red'};
}

//Increase, decrease or reset the counter
container.addEventListener('click', (event)=> {
  changeValue(event);
  changeColor();
});