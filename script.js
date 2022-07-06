let counter = 1500
let breakLengthValue = 5
let sessionLengthValue = 25
let running = false

const breakLength = document.getElementById('break-length')
const sessionLength = document.getElementById('session-length')
const timeLeft = document.getElementById('time-left')
timeLeft.innerText = counter

// const timer = setInterval(
//   () =>
//     setTheClock((prevTC) => ({
//       ...prevTC,
//       timeLeft: prevTC.timeLeft - 1,
//     })),
//   1000
// )

function startTimer() {
  clock = setInterval(() => {
    counter--
    timeLeft.innerText = counter
  }, 1000)
}

function breakIncrement(event) {
  switch (event.target.id) {
    case 'break-increment':
      breakLengthValue < 60 && breakLengthValue++
      if (!running) {
        breakLength.innerText = breakLengthValue
      }
      break
    case 'break-decrement':
      breakLengthValue > 1 && breakLengthValue--
      if (!running) {
        breakLength.innerText = breakLengthValue
      }
      break
    case 'session-increment':
      if (!running) {
        sessionLengthValue < 60 && sessionLengthValue++
        sessionLength.innerText = sessionLengthValue
        counter = sessionLengthValue * 60
        timeLeft.innerText = counter
      }

      break
    case 'session-decrement':
      if (!running) {
        sessionLengthValue > 1 && sessionLengthValue--
        sessionLength.innerText = sessionLengthValue
        counter = sessionLengthValue * 60
        timeLeft.innerText = counter
      }
      break

    default:
      break
  }
}
function toggleTimer() {
  if (running) {
    clearInterval(clock)
    running = false
  } else {
    startTimer()
    running = true
  }
}
function handleReset() {
  clearInterval(clock)
  running = false
  counter = 1500
  sessionLengthValue = 25
  sessionLength.innerText = sessionLengthValue
  breakLengthValue = 5
  breakLength.innerText = breakLengthValue
  timeLeft.innerText = counter
}
