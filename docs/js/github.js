$(document).ready(() => {
  const git = 'http://github.com/redbrick/docs/edit/master/docs'
  const t1 = window.location.pathname
  let url = null
  if (t1 === '/') {
    url = `${git}/index.md`
  } else {
    url = `${git + t1.substr(0, t1.length - 1)}.md`
  }
  const aGit = $('[href="https://github.com/redbrick/docs"]')
  aGit.attr('href', url).attr('target', '_blank')
})
