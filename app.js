const tracker = document.querySelector('.tracker')
const jobs = tracker.querySelector('.jobs')



jobs.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const counter = key.parentNode.querySelector('.counter')
    const countervalue = parseInt(counter.textContent)
    console.log(counter)


    switch (action) {
      case 'minus':
        if (countervalue > 0){
          counter.textContent = countervalue-1
        }
        break
      case 'plus':
        counter.textContent = countervalue+1
        break
    }
  }
})