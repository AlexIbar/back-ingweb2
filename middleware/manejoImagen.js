const path= require('path')
const multer = require('multer')
var uuid = require('uuid').v4

const storage = multer.diskStorage(
    {
        destination:'Public/img/uploads',
        filename:(req,file,cb)=>{
            console.log(file)
            cb(null, uuid()+path.extname(file.originalname))
        }
    }
)

module.exports=multer({storage})