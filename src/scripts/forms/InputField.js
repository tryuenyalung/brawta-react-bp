import React from 'react'
import {FormGroup, Label, Input} from 'reactstrap'

const renderField = ({ input, inputValue, label, type, meta : { invalid, valid, touched, error} }) => (
    <FormGroup>
      <Label>{label}</Label>

      <Input 
      
        placeholder={inputValue}
        //check valid meta is true
        valid={ valid ? true:false }
        //check if invalid and touch meta are true
        invalid={ invalid && touched  === true ? true:false }
        {...input} 
        type={type}
      />



      {
        //if it is touch and has invalid input display error
        !touched  && !invalid  ? null : 
        <div className="invalid-feedback">{error}</div> 
      }
    </FormGroup>
)

export default renderField
