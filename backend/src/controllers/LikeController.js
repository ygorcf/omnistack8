const Dev = require('../models/Dev')

module.exports = {
  async store (req, res) {
    const { user } = req.headers
    const { devId } = req.params

    const [ loggedDev, targetDev ] = await Promise.all([
      Dev.findById(user),
      Dev.findById(devId)
    ])

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' })
    }

    loggedDev.likes.push(targetDev._id)

    await loggedDev.save()

    return res.json(loggedDev)
  }
}
