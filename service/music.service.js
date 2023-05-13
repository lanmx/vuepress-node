const db = require('../db/index')

class MusicService {
  /**获取音乐列表 */
  getMusic(req, res) {
    const sql = 'SELECT * FROM music ORDER BY id asc'
    db.query(sql,(err,results) => {
        if(err) return res.back(err)
        return res.send({
            status: 0,
            message: '获取音乐列表成功！',
            data: results
        })
    })
  }
  /**搜索音乐 */
  searchMusic(req, res) {
    const params = req.body
    const sql = `select * from music where songname like '%${params.name}%' OR author LIKE '%${params.name}%'; `;
    db.query(sql, (err,results) => {
      if(err) return res.back(err)
        return res.send({
            status: 0,
            message: '搜索音乐列表成功！',
            data: results
        })
    })
  }
}
module.exports = new MusicService()