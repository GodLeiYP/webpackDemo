import _ from 'lodash';
import './style.css';
import Icon from './timg.jpg'
function component() {
    var element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
      // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello");
    //add the image to exist div
    var myimage = new Image();
    myimage.src = Icon;
   // element.appendChild(myimage);
    return element;
  }
  
  document.body.appendChild(component());