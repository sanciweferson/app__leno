// header.js - apenas carregar o header universal
function loadHeader() {
  return fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      const container = document.createElement("div")
      container.innerHTML = data
      document.body.prepend(container)
    })
}

loadHeader()



function loadFooter() {
  return fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      const container = document.createElement("footer")
      container.innerHTML = data
      document.body.prepend(container)
    })
}

loadFooter()

