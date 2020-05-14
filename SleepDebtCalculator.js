function getSleepHours(day) {
  var day = day.toLowerCase();
  switch (day) {
    case 'monday':
      day = 8
      return day
      break
    case 'tuesday':
      day = 10
      return day
      break
    case 'wednesday':
      day = 10
      return day
      break
    case 'thursday':
      day = 2
      return day
      break
    case 'friday':
      day = 8
      return day
      break
    case 'saturday':
      day = 6
      return day
      break
    case 'sunday':
      day = 7
      return day
      break
  //console.log(day)
  return day
  }}

function getActualSleepHours() {
  sumSleep = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  return sumSleep
}

function getIdealSleepHours() {
  idealHours = 8
  idealHours *= 7
  return idealHours
}

getActualSleepHours()

getIdealSleepHours()

function calculateSleepDebt() {
  actualSleepHours = getActualSleepHours()
  idealSleepHours = getIdealSleepHours()
  if (actualSleepHours > idealSleepHours) {
    console.log('You slept more than you wanted!')
  } else if (actualSleepHours === idealSleepHours) {
    console.log('You got as much sleep as you wanted!')
  } else if (actualSleepHours < idealSleepHours) {
    var deficit = (actualSleepHours - idealSleepHours)
    console.log(`You're ${deficit} hours short of your ideal weekly sleeping time!`)
  }
}

calculateSleepDebt()