var express = require('express')
var router = express.Router()
const MusicService = require('../service/music.service')


/** 音乐列表 */
router.get('/list', MusicService.getMusic)
/** 音乐列表 */
router.post('/search', MusicService.searchMusic)

module.exports = router