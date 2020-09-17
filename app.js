const express = require("express");

const config = require('./config');

let app = express();

app.listen(config._serverPort, () => {
 console.log(`Server running on port ${config._serverPort}`);
});

app.get("/users/list", (_, res) => {
    res.json();
});

app.post("/users/add", async (req, res) => {

    try {

        const user = req.body;

        if ( config._fakeErrors )
            throw Error("Error saving user.");

        // await saveUser(user)

        res.json("Saved user {user.name}");
 
    } catch(error) {

        res.status(400).send(error.message);

    }

});

app.put("/users/update", async (req, res) => {

    try {

        const user = req.body;

        // await updateUser(user)

        if ( config._fakeErrors )
            throw Error("Error updating user")

        

    } catch(error) {

    }

})

app.delete("users/delete", async (req, res) => {

    try {

        const { id } = req.body;

        if ( config._fakeErrors )
            throw Error(`Error deleting user {id}`)

        // await deleteUser(user)

        res.json(`Deleted user {id}`);

    } catch(error) {

        res.status(400).send(error.Message);

    }

});