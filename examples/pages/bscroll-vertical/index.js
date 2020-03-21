import React, { Component } from 'react'
import Scroll from 'src/scroll'

import './main.css'

const Data = []
for (let i = 0; i < 1; i++) {
  Data.push(i)
}
class VerticalScrollPage extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      listData: Data,
      childData: 666
    }
  }

  componentDidMount () {
    for (let i = 10; i < 30; i++) {
      Data.push(i)
    }
  }

  clickItem (item) {
    console.log('clickEvent', item)
  }

  render () {
    return (
      <div>
        <div className="container">
          <Scroll mouseWheel>
            <ul className="content">
              {this.state.listData.map((item, index) =>
                (<li className="content-item"
                  key={index}
                  onClick={this.clickItem.bind(this, item)}
                >
                  item:{item}
                </li>),
              )}
            </ul>
          </Scroll>
        </div>
      </div>
    )
  }
}

export default VerticalScrollPage
