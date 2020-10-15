const http = require('http')
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('./app/controllers/productController')
const Server= require('./app/app')



const PORT =  process.env.PORT || 5000
const HOST =  process.env.HOST || 'http://localhost'



Server.listen(PORT, () => console.log(`Server running on port ${HOST}:${PORT}`))