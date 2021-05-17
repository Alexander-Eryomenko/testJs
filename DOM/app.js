const paragrafText = document.querySelector('p').textContent
const ul = document.querySelector('ul')
const h1 = document.createElement('h1')
const paragraf = document.querySelector('p')
const link = document.querySelectorAll('a')
document.body.appendChild(h1)


// 1. Найти параграф и получить его текстовое содержимое (только текст!)

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]


function getInfoOfTag(tag) {
  return {
    type: tag.nodeType === 1 ? 'ElementNode' : tag.nodeType === 3 ? 'TextNode' : tag.nodeType === 8 ? 'CommentNode' : 'Error',
    tagName: tag.tagName,
    countChildNodes: tag.children.length
  }
}

console.log(getInfoOfTag(ul))

h1.appendChild(document.createElement('h2'))

function getTextFromUl(ul) {
  const [...liFromUl] = ul.children
  const textLiArr = liFromUl.map((item) => {
    return item.textContent
  })
  return textLiArr
}

console.log(getTextFromUl(ul))


// 1. Найти в коде список ul и добавить класс “list”
// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// 3. На li через один (начиная с самого первого) установить класс “item”
// 4. На все ссылки в примере установить класс “custom-link”

ul.classList.add('list')

const firstLinkAfterUl = ul.nextElementSibling.nextElementSibling
firstLinkAfterUl.id = 'link'
console.log(link)


// function changeClass(ul) {
//   const [...liFromUl] = ul.children
  
//   const changeClass = liFromUl.forEach((item, index) => {
//     if (index % 2 === 0) {
//       item.children[0].classList.add('custom-link')
//     }
//   })
//   return changeClass
// }

// changeClass(ul)

function changeClass(ul) {
  const [...liFromUl] = ul.children
  
  const changeClass = liFromUl.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add('item')
    }
  })
  return changeClass
}

changeClass(ul)

link.forEach( link => link.classList.add('custom-link'))

// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li

function addLi() {
  const liLength = ul.children.length
  const fragmentLi = document.createDocumentFragment()
  
  for (let i = 0; i < liLength; i++) {
    const li = document.createElement('li')
    li.classList.add('new-item')
    li.textContent = `item ${i + 1}`
    fragmentLi.appendChild(li)
  }
  return fragmentLi
}

ul.appendChild(addLi())