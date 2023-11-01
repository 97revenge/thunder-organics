"use strict";
exports.__esModule = true;
var express_1 = require("express");
// import cors from "cors";
var product_1 = require("./product");
var app = (0, express_1["default"])();
var port = process.env.PORT || 4000;
app.use(product_1["default"]);
app.get("/", function (req, res) {
    console.log(req.params);
    res.send("sd,fmsdklfgjm");
});
app.listen(port, function () { return console.log("ok"); });
// async function main() {
//   // [] - primeiro teste e validacao dele para a api
//   // [] - entidade post
//   // [] - entidade product
//   // [] - query validations
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.log(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
