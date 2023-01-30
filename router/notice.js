const express = require ('express');
const router = express.Router();

/* 요청이 오면 ex. axios.get('/notice?type=list&no=1') 
  뜻 req.query.type - query라는 키워드가 '/notice?type=list&no=1' 얘네를 인식하는 지정된 매개임*/
router.get('/' , (req,res, next) => {

res.send('보내줄게')
//뜻 리액트는 res.body.data로 보내줄게를 받게 된다.

})
module.exports = router; // 뱉어내도록 만듦