import React, {Component} from 'react'
import './KnowledgeListHeader.styl'
class knowledgeListHeader extends Component {
  componentDidMount(){


  }
  render() {
    const {title} = this.props
    return (
      <div className="headerList">
        {title}
      </div>
    )
  }
}

export default knowledgeListHeader