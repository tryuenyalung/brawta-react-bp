import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {Button,Label} from 'reactstrap'
import renderField from './InputField'

let PostForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Label>ID : {props.id} </Label>
      <Field inputValue={props.userId} name="userId" type="number" component={renderField} label="User ID" />
      <Field inputValue={props.title} name="title" type="text" component={renderField} label="Post Title" />
      <Field inputValue={props.body} name="body" type="text" component={renderField} label="Post Body" />
      <Button className="float-right btn-outline-success" type="submit" >Submit</Button>
    </form>
  )

}//@end

const validate = values => {

  const errors = {}

  if (!values.userId)
    errors.userId = 'Required'

  if (!values.title)
    errors.title = 'Required'

  if (!values.body)
    errors.body = 'Required'

  return errors

}

const createReduxForm = reduxForm({
    form: 'PostForm',
    destroyOnUnmount: true,
    validate
})

PostForm = createReduxForm(PostForm)

export default PostForm
