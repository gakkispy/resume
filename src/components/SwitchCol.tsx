// import React from 'react'
import { COL } from '../types'

// export function SwitchCol({setCol}: {setCol: (col: COL) => void}) {
//   return (
//     <div className='col-btn-container'>
//         <button  className='print-btn color-btn' onClick={() => setCol(COL.ONE)}>单列</button>
//         <button  className='print-btn' onClick={() => setCol(COL.TWO)}>两列</button>
//     </div>
//   )
// }
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class SwitchCol extends Component<{setCol: (col: COL) => void}> {
  constructor(props: {setCol: (col: COL) => void}){
    super(props)
  }
  render() {
    const { setCol } = this.props
    return ReactDOM.createPortal(
      (
        <div className='col-btn-container'>
          <button  className='print-btn color-btn' onClick={() => setCol(COL.ONE)}>单列</button>
          <button  className='print-btn' onClick={() => setCol(COL.TWO)}>两列</button>
      </div>
      ),
      document.body
    );
  }
}
