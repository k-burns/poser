import axios from 'axios'

//action types

const GET_POSES = 'GET_POSES'
const GET_SELECTED_POSE = 'GET_SELECTED_POSE'
const ADD_POSE = 'ADD_POSE'
const EDIT_POSE = 'EDIT_POSE'
const REMOVE_POSE = 'REMOVE_POSE'

//default state

const defaultPoses = []

//action creators

export const getPoses = (poses) => ({
  type: GET_POSES,
  poses
})

export const getSinglePose = (pose) => ({
  type: GET_SELECTED_POSE,
  pose
})

export const addPose = (poseName, positions, userId) => ({
  type: ADD_POSE,
  poseName,
  positions,
  userId
})

export const changePose = (poseName, positions, poseId) => ({
  type: EDIT_POSE,
  poseName,
  positions,
  poseId
})

export const removePose = (poseId) => ({
  type: REMOVE_POSE,
  poseId
})


//thunks

export const fetchPoses = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/poses/${userId}`)
    dispatch(getPoses(data))
  } catch (err) {
    console.error('Error fetching poses: ', err)
  }
}

export const fetchSinglePose = (poseId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`api/poses/onePose/${poseId}`)
    dispatch(getSinglePose(data))
  } catch (err) {
    console.error('Error fetching single pose')
  }
}



export const createPose = (poseName, positions, userId) => async (dispatch) => {
  try {
    const data = await axios.post('/api/poses', {
      name: poseName,
      positions,
      userId,
    })
  } catch (err) {
    console.error('Error adding pose', err)
  }
}

export const editPose = ( poseName, positions, poseId) => async (dispatch) => {
  try {
    const update = await axios.patch(`/api/poses/onePose/${poseId}`, {
      poseName,
      positions,
    })
    dispatch(changePose(poseName, positions, poseId))
  } catch (err) {
    console.error('Error changing pose', err)
  }
}

export const deletePose = (poseId) => async (dispatch) => {
  try {
    await axios.delete(`/api/poses/onePose/${poseId}`)
    dispatch(removePose(poseId))
  } catch (err) {
    console.error('Error deleting pose from gallery', err)
  }
}

//reducer

export default function (state = defaultPoses, action) {
  switch (action.type) {
    case GET_POSES:
      return action.poses
    case GET_SELECTED_POSE:
      return action.pose
    case ADD_POSE:
      return [...state, action.poseName]
    case EDIT_POSE:
      return [
        state.map((pose) => {
          if (pose.id === action.poseId) {
            return {
              ...pose,
              name: action.poseName,
              positions: action.positions
            }
          } else {
            return pose
          }
        }),
      ]
    case REMOVE_POSE:
      return [
        ...state.filter((pose) => {
          if (pose.id !== action.poseId) {
            return pose
          }
        })
      ]
    default:
      return state
  }
}
