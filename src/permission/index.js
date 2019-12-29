import router from '../router'
import progress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach(function (to, from, next) {
  progress.start()
  if (to.path.startsWith('/home')) {
    console.log(to)
    let token = window.localStorage.getItem('user-token')

    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

router.afterEach(function () {
  setTimeout(() => progress.done(), 300)
})
