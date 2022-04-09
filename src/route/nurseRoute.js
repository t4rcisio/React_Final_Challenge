import Route from "express";
import UserController from "../controller/nurseController.js";

const route = Route();
const clientController = new UserController();

route.post("/new", clientController.Create.bind(clientController));
route.post("/profile", clientController.Update.bind(clientController));
route.delete("/delete", clientController.Delete.bind(clientController));
route.get("/find", clientController.FindOnebyID.bind(clientController));

export default route;
