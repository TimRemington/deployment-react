import React, {Component} from 'react'
import { Col, Input } from 'react-materialize'

class FilterBy extends Component {
  render(){
    const { options, filtering } = this.props
    return(
      <Col>
        <Input id="filterSel2" type='select' label='Filter by:' defaultValue='' onChange={()=>filtering(document.getElementById('filterSel2'))}>
          <option value='' disabled>{options.length === 2 ? "Publisher" : "Author"}</option>
          {options.map((item, idx)=>(
            <option key={idx} value={item}>{item}</option>
          ))}
        </Input>
      </Col>
    )
  }
}

export default FilterBy
