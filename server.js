const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3001;
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');


mongoose.connect('mongodb+srv://mohdeep1:work1@cluster0.vcd3yi5.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });




const uri = "mongodb+srv://mohdeep1:work1@cluster0.vcd3yi5.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,{
    // useNewurlParser:true,
    // useUnifiedTopology:true
    // useCreateIndex:true
}).then(()=> console.log(`Database connect`))
.catch(() => console.log(Error));


// // Create product
// app.post('/products', async (req, res) => {
// });

// // Get products with pagination
// app.get('/products', async (req, res) => {
//   const { page, size } = req.query;
//   const products = await getProducts(parseInt(page), parseInt(size));
//   res.json(products);
// });


// app.post('/reviews', async (req, res) => {

// });

// app.get('/reviews/:productId', async (req, res) => {
//   const { page, size } = req.query;
//   const reviews = await getReviews(req.params.productId, parseInt(page), parseInt(size));
//   res.json(reviews);
// });

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
