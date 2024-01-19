const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const {connectToMongo} = require("./config/db");
const PORT = 3000;

connectToMongo("mongodb+srv://arpitrajput871:<password>@cluster0.go7oob6.mongodb.net/?retryWrites=true&w=majority");
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.get('*', (req, res) => {
    res.status(404).send('route not found');
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
