export class Router {
  routes = {};
  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
    this.stylePage(event);
  }

  handle() {
    const { pathname } = window.location;

    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }

  stylePage(page) {
    const target = page.target;

    document.querySelectorAll("nav a").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector("html").removeAttribute("class");

    if (target.href == window.location.href) {
      console.log(target.classList);
      target.classList.add("active");
      document.querySelector("html").classList.add(target.dataset.name);
    }
  }
}
