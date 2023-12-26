import myName from './myName';

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.textContent = myName('Ivan');

   return element;
 }

 document.body.appendChild(component());