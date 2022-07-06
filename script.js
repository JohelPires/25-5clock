const timer = setInterval(
  () =>
    setTheClock((prevTC) => ({
      ...prevTC,
      timeLeft: prevTC.timeLeft - 1,
    })),
  1000
)

function breakIncrement() {
  alert('break increment')
}
