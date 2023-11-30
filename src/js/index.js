import { Router } from "./router.js";

const router = new Router();
router.add("/", "/src/pages/home.html");
router.add("/universe", "/src/pages/universe.html");
router.add("/explorer", "/src/pages/explorer.html");
