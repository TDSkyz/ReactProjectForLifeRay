'use strict';
import { userController } from "../controllers"
module.exports = (app) => {
    app.route('/user/getAllUsers')
        .get(userController.getAllUser);
    app.route('/user/:id')
        .get(userController.getUserById);
    app.route('/user/register')
        .post(userController.createNewUser);
    app.route('/login')
        .post(userController.login);
    app.route('/user/:id')
        .delete(userController.deleteUser);
    app.route('/user/:id')
        .put(userController.updateUser);
}