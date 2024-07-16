
import URL_ShortenerRouter from "./URL_ShortenerRouter.js"
import RedirectionRouter from "./RedirectionRouter.js"

const allRoutes = (app) => {
  app.use("/shorten-url", URL_ShortenerRouter)
  app.use("/", RedirectionRouter)

};

export default allRoutes;