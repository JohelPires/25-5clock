const counter = 1500
let breakLengthValue = 5
let sessionLengthValue = 25

const breakLength = document.getElementById('break-length')
const sessionLength = document.getElementById('session-length')
const timeLeft = document.getElementById('time-left')

// const timer = setInterval(
//   () =>
//     setTheClock((prevTC) => ({
//       ...prevTC,
//       timeLeft: prevTC.timeLeft - 1,
//     })),
//   1000
// )

function breakIncrement(event) {
  switch (event.target.id) {
    case 'break-increment':
      breakLengthValue++
      breakLength.innerText = breakLengthValue
      break
    case 'break-decrement':
      breakLengthValue--
      breakLength.innerText = breakLengthValue
      break
    case 'session-increment':
      sessionLengthValue++
      sessionLength.innerText = sessionLengthValue
      break
    case 'session-decrement':
      sessionLengthValue--
      sessionLength.innerText = sessionLengthValue
      break

    default:
      break
  }

  console.log(event.target.id)
}
function toggleTimer() {
  alert('toggle timer')
}
function handleReset() {
  timeLeft.innerText = '25:00'
}
