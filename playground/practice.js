// pretend this is a method that makes an API call to get a TV show
function getShow(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: name.length, name })
    }, 10)
  })
}

class ViewTracker {

  // implement the constructor
  constructor(nameOfShow) {
    this.nameOfShow = nameOfShow
    this.views = []
  }

  // add the trackView method
  trackView = async() => {
    const showInfo = await getShow(this.nameOfShow)
    showInfo.date = Date()
    this.views.push(showInfo)
  }

  // add the `summary` method returns in this format <"show name (show id) date">
  summary = () => {
    const formatted = []
    for (var i = 0; i < this.views.length; i++) {
      formatted.push(`${this.views[i].name} (${this.views[i].id}) ${this.views[i].date}`)
    }
    return formatted
  }

}

const tracker = new ViewTracker('Friends')

setTimeout(tracker.trackView, 1000)
setTimeout(tracker.trackView, 2000)
setTimeout(tracker.trackView, 3000)
setTimeout(() => {
  console.log(tracker.summary())
}, 5000)

const tracker2 = new ViewTracker('Seinfeld')

setTimeout(tracker2.trackView, 100)
setTimeout(tracker2.trackView, 200)
setTimeout(tracker2.trackView, 300)
setTimeout(() => {
  console.log(tracker2.summary())
}, 400)
