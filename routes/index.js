const userRoutes = require("./users");
const garageOwnerRoutes = require("./garageOwner");
const loginRoutes = require("./login");

const constructorMethod = app => {
    app.use("/users", userRoutes);
    app.use("/garage", garageOwnerRoutes);
    app.use("/login", loginRoutes);

    app.get('/', (req, res) => {
        res.redirect('http://localhost:3000/login');
    });

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;