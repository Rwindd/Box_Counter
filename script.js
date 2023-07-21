console.log('box game')
let redbox = document.getElementById('red')
let greenbox = document.getElementById('green')
let bluebox = document.getElementById('blue')

 redbox.onclick=() => console.log('redbox')
greenbox.onclick=() => console.log('greenbox')
 bluebox.onclick=() => console.log('bluebox')

const squares = document.querySelectorAll('.colorbutton')

// squares.forEach(i =>{
//   i.onclick = () =>{
//     console.log(i.value)
//   }
// })
const clicker ={'red': 0, 'green': 0, 'blue': 0}
squares.forEach(i => {
  i.onclick = () =>{
    clicker[i.value]+=1
    i.innerText = clicker[i.value]
  }
})


  const clearGamebtn = document.getElementById('clear-game')
 
  clearGamebtn.onclick = () => {
    clicker.red= 0
  clicker.green = 0
  clicker.blue = 0
  squares.forEach(i =>{
    i.innerText = ' '
  })
}
