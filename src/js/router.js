export class Router {
  routes = {};
  add(routeName, page) {
    routes[routeName] = page;
  }
}
