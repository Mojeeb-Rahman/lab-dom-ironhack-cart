// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');
  const subtotal = priceElement.innerText * quantityElement.value;
  subtotalElement.innerText = subtotal;
  // console.log(subtotal);
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productElements = document.getElementsByClassName('product');
  const totalElement = document.querySelector('#total-value span');

  let total = 0;

  // console.dir(productElements);
  for (const product of productElements) {
    total += updateSubtotal(product);
  }

  // ITERATION 3
  // console.log(total);
  totalElement.innerText = total;
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parentProduct = target.parentElement.parentElement;
  const parentTBody = parentProduct.parentElement;
  console.log('The target in remove is:', parentProduct);
  console.log('The parent Element in remove is:', parentTBody);
  parentTBody.removeChild(parentProduct);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const productNameElement = document.querySelector(
    '.create-product input[type="text"]'
  );
  const productPriceElement = document.querySelector(
    '.create-product input[type="number"]'
  );
  const tbodyElement = document.querySelector('tbody');

  // Extract contents of input
  const productName = productNameElement.value;
  const productPrice = productPriceElement.value;
  // Root TR Element Creation
  const trElement = document.createElement('tr');
  trElement.className = 'product';
  // Name TD Element Creation
  const tdNameElement = document.createElement('td');
  tdNameElement.className = 'name';
  tdNameElement.innerHTML = `<span>${productName}</span>`;
  //  TD Element injection to Root TR
  trElement.appendChild(tdNameElement);
  // Price TD Element Creation
  const tdPriceElement = document.createElement('td');
  tdPriceElement.className = 'price';
  tdPriceElement.innerHTML = `$<span>${productPrice}</span>`;
  //  TD Element injection to Root TR
  trElement.appendChild(tdPriceElement);
  // Quantity TD Element Creation
  const tdQuantityElement = document.createElement('td');
  tdQuantityElement.className = 'quantity';

  const tdQuantityInputElement = document.createElement('input');
  tdQuantityInputElement.type = 'number';
  tdQuantityInputElement.value = 0;
  tdQuantityInputElement.setAttribute('min', 0);
  tdQuantityInputElement.setAttribute('placeholder', 'Quantity');

  tdQuantityElement.appendChild(tdQuantityInputElement);
  //  TD Element injection to Root TR
  trElement.appendChild(tdQuantityElement);
  // Subtotal TD Element Creation
  const tdSubtotalElement = document.createElement('td');
  tdSubtotalElement.className = 'subtotal';
  tdSubtotalElement.innerHTML = `$<span>0</span>`;
  //  TD Element injection to Root TR
  trElement.appendChild(tdSubtotalElement);
  // Action TD Element Creation
  const tdActionElement = document.createElement('td');
  tdActionElement.className = 'action';

  const RemoveButtonElement = document.createElement('button');
  RemoveButtonElement.innerText = 'Remove';
  RemoveButtonElement.className = 'btn btn-remove';

  tdActionElement.appendChild(RemoveButtonElement);

  RemoveButtonElement.addEventListener('click', removeProduct);
  //  TD Element injection to Root TR
  trElement.appendChild(tdActionElement);
  //  Root TR Element injection to Tbody
  tbodyElement.appendChild(trElement);

  // Erase contents of input
  productNameElement.value = '';
  productPriceElement.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtonElements = document.querySelectorAll(
    '.product .action .btn-remove'
  );

  for (let buttonElement of removeButtonElements) {
    buttonElement.addEventListener('click', removeProduct);
  }

  const createElement = document.getElementById('create');
  createElement.addEventListener('click', createProduct);
});
