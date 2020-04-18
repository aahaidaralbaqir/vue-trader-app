import portfolioRoutes from "./portfolio.routes"
import mainRoutes from "./main.routes"
import stockRoutes from "./stock.routes"

export default [
  ...portfolioRoutes,
  ...mainRoutes,
  ...stockRoutes
]