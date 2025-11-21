import { Component} from "react"
import balloon1 from './example/풍선/01.png'
import balloon2 from './example/풍선/02.png'
import balloon3 from './example/풍선/03.png'
import balloon4 from './example/풍선/04.png'
import balloon5 from './example/풍선/05.png'
import balloon6 from './example/풍선/06.png'
import balloon7 from './example/풍선/07.png'
import balloon8 from './example/풍선/08.png'

class ClassRef extends Component {

  // boxRef0 = createRef();
  // boxRef1 = createRef();
  // boxRef2 = createRef();
  // boxRef3 = createRef();

  state = {
    state1 = '',
    state2 = '',
    state3 = '',
    state4 = ''
  }

  fn1 = () => { this.setState({ state1: 'orange' })};
  fn2 = () => { this.setState({ state2: '10px 10px 5px gray'})};
  fn3 = () => { this.setState({ state3: '0.5' })};
  fn4 = () => { this.setState({ state4: 'rotate(90deg)'})}

  componentDidMount() {
    this.boxRef.current.addEventListener('clicks', this.fn1)
    this.boxRef.current.addEventListener('mouseOver', this.fn2)
    this.boxRef.current.addEventListener('mouseOut', this.fn3)
    this.boxRef.current.addEventListener('mouse', this.fn4)
  }

  componentWillUnmount() {
    this.boxRef.current.removeEventListener('clicks', this.fn1)
    this.boxRef.current.removeEventListener('mouseOver', this.fn2)
    this.boxRef.current.removeEventListener('mouseOut', this.fn3)
    this.boxRef.current.removeEventListener('mouseup', this.fn4)
  }
}

  render() {
    return(
      <>
        <div style={{ display: 'inline-flex' }}>
          <div>
            <img src={balloon1} onClick={clicks} alt="풍선1" />
            <img style={{ backgroundColor: state1 }} src={balloon5} alt="풍선5" />
          </div>
          <div>
            <img src={balloon2} onMouseUp={mouseOver} alt="풍선2" />
            <img style={{ transform: state2 }} src={balloon6} alt="풍선6" />
          </div>
          <div>
            <img src={balloon3} onMouseDown={mouseOut} alt="풍선3" />
            <img style={{ opacity: state3 }} src={balloon7} alt="풍선7" />
          </div>
          <div>
            <img src={balloon4} onMouseUp={mouseUp} alt="풍선4" />
            <img style={{ rotate: state4 }} src={balloon8} alt="풍선8" />
          </div>
        </div>
      </>
    )
  }

export default ClassRef

