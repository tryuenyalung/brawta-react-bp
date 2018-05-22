import React from 'react'
import {FormGroup, Button, Label, Input} from 'reactstrap'

const renderField = ({ input, label, type, meta : { invalid, valid, touched, error} }) => (
    <FormGroup>
      <Label>{label}</Label>
      <Input 
        //check valid meta is true
        valid={ valid ? true:false }
        //check if invalid and touch meta are true
        invalid={ invalid && touched  === true ? true:false }
        {...input} 
        type={type}
      />

      {
        //if it is touch and has invalid input
        !touched  && !invalid  ? null : 
        <div className="invalid-feedback">{error}</div> 
      }
    </FormGroup>
)

export default renderField
