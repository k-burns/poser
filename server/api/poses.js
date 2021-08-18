const router = require('express').Router()
const { Pose } = require('../db/models')
module.exports = router

// '/api/poses' routes

router.get('/', async (req, res, next) => {
  try {
    const poses = await Pose.findAll({})
    res.json(poses)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await Pose.create(req.body)
  } catch (err) {
    next(err)
  }
})


router.get('/:userId', async (req, res, next) => {
  try {
    let userId = req.params.userId
    const poses = await Pose.findAll({
      where: {
        userId: userId
      }
    })
    res.json(poses)
  } catch (err) {
    next(err)
  }
})


router.get('/onePose/:poseId', async (req, res, next) => {
  try {
    let poseId = req.params.poseId
    const pose = await Pose.findAll({
      where: {
        id: poseId
      }
    })
    res.json(pose)
  } catch (err) {
    next(err)
  }
})

router.patch('/onePose/:poseId', async (req, res, next) => {
  try {
    const { poseId } = req.params
    let pose = await Pose.findByPk(poseId)
    await pose.update({
      name: req.body.poseName,
      positions: req.body.positions
    })
    res.json(pose)
  } catch (err) {
    next(err)
  }
})

router.delete('/onePose/:poseId', async (req, res, next) => {
  try {
    const { poseId } = req.params
    const pose = await Pose.findByPk(poseId)
    await pose.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
