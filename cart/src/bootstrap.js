import faker from 'faker'


const mount = (element) => {
    const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`
    element.innerHTML = cartText;
  };

  if(process.env.NODE_ENV !== 'production') {
    const htmlElement = document.querySelector('#dev-cart');
    if(htmlElement) {
      mount(htmlElement);
    }
  }

  export {mount};