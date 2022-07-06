let counter = 1500
let breakLengthValue = 5
let sessionLengthValue = 25
let running = false
let timerLabelValue = 'Session'
let clock

const beep = document.getElementById('beep')
const timerLabel = document.getElementById('timer-label')
const breakLength = document.getElementById('break-length')
const sessionLength = document.getElementById('session-length')
const timeLeft = document.getElementById('time-left')
const startstop_icon = document.getElementById('start_stop')
timeLeft.innerText = format(counter)
timerLabel.innerText = timerLabelValue

// const timer = setInterval(
//   () =>
//     setTheClock((prevTC) => ({
//       ...prevTC,
//       timeLeft: prevTC.timeLeft - 1,
//     })),
//   1000
// )

function format(segundos) {
  let min = Math.floor(segundos / 60)
  let sec = Math.floor(segundos % 60)
  if (sec < 10) {
    sec = '0' + sec
  }
  if (min < 10) {
    min = '0' + min
  }

  const result = min + ':' + sec
  return result
}

function startTimer() {
  clock = setInterval(() => {
    counter--
    if (counter < 0 && timerLabelValue === 'Session') {
      counter = breakLengthValue * 60
      timerLabelValue = 'Break'
      timerLabel.innerText = timerLabelValue
      beep.play()
    } else if (counter < 0 && timerLabelValue === 'Break') {
      counter = sessionLengthValue * 60
      timerLabelValue = 'Session'
      timerLabel.innerText = timerLabelValue
      beep.play()
    }
    timeLeft.innerText = format(counter)
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
        timeLeft.innerText = format(counter)
      }

      break
    case 'session-decrement':
      if (!running) {
        sessionLengthValue > 1 && sessionLengthValue--
        sessionLength.innerText = sessionLengthValue
        counter = sessionLengthValue * 60
        timeLeft.innerText = format(counter)
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
    startstop_icon.innerHTML = '<i class="fa-regular fa-circle-play"></i>'
  } else {
    startTimer()
    running = true
    startstop_icon.innerHTML = '<i class="fa-regular fa-circle-pause"></i>'
  }
}
function handleReset() {
  beep.load()
  clearInterval(clock)
  timerLabelValue = 'Session'
  timerLabel.innerText = timerLabelValue
  running = false
  counter = 1500
  sessionLengthValue = 25
  sessionLength.innerText = sessionLengthValue
  breakLengthValue = 5
  breakLength.innerText = breakLengthValue
  timeLeft.innerText = format(counter)
}
