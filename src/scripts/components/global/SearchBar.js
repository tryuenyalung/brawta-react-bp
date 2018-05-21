import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup,
        InputGroupAddon,
        Input } from 'reactstrap'

const SearchBar = (props) => {
  return (
    <div>
      <InputGroup>
        <Input placeholder={props.search_placeholder}/>
        <InputGroupAddon addonType={props.search_btn_location}>
            {props.search_btn}
        </InputGroupAddon>
      </InputGroup><br/>
    </div>//@end
  )
}

SearchBar.propTypes = {
    search_placeholder: PropTypes.string,
    search_btn_location: PropTypes.string,
    search_btn: PropTypes.element,
}

export default SearchBar
