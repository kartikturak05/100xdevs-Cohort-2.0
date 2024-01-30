const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

// const schema = zod.array(zod.number);
const schema = zod.number();
app.post("/health-checkup", function (req, res) {
    try {
        const kidney = req.body.kidneyId;
        const response = schema.safeParse(kidney);

        res.send({
            response
        });
    } catch (error) {
        res.status(411).json({
            msg: "Invalid input"
        });
    }
});
app.listen(3000);
