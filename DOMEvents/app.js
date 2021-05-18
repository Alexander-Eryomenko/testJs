const btnShowMessage = document.getElementById('btn-msg')
const btnGenerateItem = document.getElementById('btn-generate')
const btnDeleteItem = document.getElementById('btn-delete')
const body = document.body
const tag = document.getElementById('tag')
const list = document.querySelector('ul')


// По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.

btnShowMessage.addEventListener('click', function(event) {
  const textInAttribute = btnShowMessage.dataset.text
  alert(textInAttribute)
})

// При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

function installRedColor(event) {
  btnShowMessage.style.background = 'red'
}
function uninstallRedColor(event) {
  btnShowMessage.style.background = ''
}

btnShowMessage.addEventListener('mouseover', installRedColor)
btnShowMessage.addEventListener('mouseout', uninstallRedColor)

// При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

body.addEventListener('click', function(event) {
  const tagName = event.target.nodeName.toLowerCase()
  const span = document.createElement('span')
  span.textContent = ` ${tagName}`
  tag.appendChild(span)
  setTimeout(() => {
    span.remove()
  }, 1000)
})

// При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д

function addListItem(event) {
  let fragmentListItem = document.createDocumentFragment()
  const [...listItemArr] = list.children
  const listItem = document.createElement('li')
  listItemArr.push(listItem)

  listItemArr.forEach((item, index) => {
    item.textContent = `Item ${index + 1}`
    fragmentListItem.appendChild(item)
  })
  list.appendChild(fragmentListItem)
}

btnGenerateItem.addEventListener('click', addListItem)

function removeLastListItem (event) {
  list.lastElementChild.remove()
}

btnDeleteItem.addEventListener('click', removeLastListItem)



