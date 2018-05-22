import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {Button} from 'reactstrap'
import renderField from './InputField'

let PostForm = props => {
  const { handleSubmit,submitting  } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field name="userId" type="number" component={renderField} label="User ID" />
      <Field name="title" type="text" component={renderField} label="Post Title" />
      <Field name="body" type="text" component={renderField} label="Post Body" />
      <Button className="float-right" color="primary" type="submit">Post</Button>
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
