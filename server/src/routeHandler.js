//@ts-check
// global routes handler
import postRoutes from "./api/posts/routes";
import userRoutes from "./api/users/routes";
import commentRoutes from "./api/comments/routes";

const routes = [postRoutes, userRoutes, commentRoutes];

export default (app) => {
  routes.forEach((element) => {
    app.use(element);
  });
  return app;
};
