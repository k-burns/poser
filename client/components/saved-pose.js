import React from 'react'
// import * as THREE from 'three'
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { editPose, deletePose } from '../store'
import { connect } from 'react-redux'
// import loader from './3dLoaderFunc'

class SavedPose extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // name: this.props.location.state.name,
      // positions: this.props.location.state.positions,
      // saved: false,
      // deleted: false
    }
    // this.scene = new THREE.Scene()
    // this.objLoader = new OBJLoader()
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.updateDuck = this.updateDuck.bind(this)
    // this.deleteDuck = this.deleteDuck.bind(this)
  }

  componentDidMount() {
    // loader(this.state.positions, this.scene, this.objLoader)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    //reload duck based off of color change
    evt.preventDefault()
    // const color = this.state.positions
    // let scene = this.scene
    // this.objLoader.load('./duck.obj', function (object) {
    //   object.traverse(function (child) {
    //     if (child.isMesh) {
    //       const oldMat = child.material

    //       child.material = new THREE.MeshPhongMaterial({
    //         color: color,
    //         map: oldMat.map
    //       })
    //     }
    //   })
    //   scene.add(object)
    // })
  }

  updatePose(evt) {
    evt.preventDefault()

    // if (this.state.name === '') {
    //   window.alert('Please name your pose')
    // } else {
    //   this.props.editPose(
    //     this.state.name,
    //     this.state.positions,
    //     this.props.location.state.id
    //   )
    //   this.setState({ saved: true })
    // }
  }

  deletePose(evt) {
    evt.preventDefault()
    // this.props.removePose(this.props.location.state.id)
    // this.setState({ deleted: true })
  }

  render() {
    return (
      <div className='construct-container'>
        {/* <div className='canvas-container'>
          <canvas id='c'></canvas>
        </div>
        <div className='picker-container'>
          <div ref={(ref) => (this.mount = ref)} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='colorPicker'>Pick your color!</label>
            <input
              type='color'
              name='colorPicker'
              onChange={this.handleChange}
            />
            <button>Try</button>
          </form>
          <form onSubmit={this.updateDuck}>
            <label htmlFor='name'>Update my Duck</label>
            <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
            <button>Save</button>
          </form>
          <button className='delete-button' onClick={this.deleteDuck}>
            Delete This Duck
          </button>
          {/* loads after duck is deleted */}
          {/* <div>{this.state.deleted && <div>Duck Removed From Nest!</div>}</div>
          {/* loads after duck is updated */}
          {/* <div>{this.state.saved && <div>Duck Updated!</div>}</div> */}
        {/* </div> */}
      </div>
    )
  }
}

const mapState = (state) => ({
  state: state,
})
const mapDispatch = (dispatch) => ({
  editPose: (poseName, positions, poseId) =>
    dispatch(editPose(poseName, positions, poseId)),
  removePose: (poseId) => dispatch(deletePose(poseId))
})

export default connect(mapState, mapDispatch)(SavedPose)

