const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";


// set up the view engine
app.set('view engine', 'ejs');
// app.set('views', './views');

// app.use(express.static(path.join(__dirname, 'assets')));
// app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Listening to request on http://localhost: ${port}`);
});