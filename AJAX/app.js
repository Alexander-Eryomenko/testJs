const users = document.querySelector('.users')
const data = document.querySelector('.data')


 function getUsers (fn) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
  xhr.addEventListener('load', (event) => {
    fn(JSON.parse(xhr.response))
  })
  
  xhr.send()
 }

 getUsers(render)

 function render(response) {
  const fragment = document.createDocumentFragment()
  const fragmentAbout = document.createDocumentFragment()
    response.forEach(user => {
      const userName = document.createElement('div')
      userName.textContent = user.name
      userName.style.cursor = 'pointer'
      userName.addEventListener('mousemove', (event) => {
        userName.style.color = 'green'
      })
      userName.addEventListener('mouseout', (event) => {
        userName.style.color = ''
      })
      userName.addEventListener('click', function(event) {
        const nick = document.createElement('div')
        nick.textContent = `Nickname: ${user.username}`
        const phone = document.createElement('div')
        phone.textContent = `Phone: ${user.phone}`
        const company = document.createElement('div')
        company.textContent = `Company name: ${user.company.name}`
        fragmentAbout.appendChild(nick)
        fragmentAbout.appendChild(phone)
        fragmentAbout.appendChild(company)
        data.appendChild(fragmentAbout)
        setTimeout(() => {
          data.innerHTML = ''
        }, 2000)
      })
      fragment.appendChild(userName)
    console.log(user)
  })
  users.appendChild(fragment)
  
 }




