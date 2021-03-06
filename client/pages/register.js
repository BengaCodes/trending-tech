import React, { Fragment, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import Layout from '../components/layout/Layout'

const Register = () => {
  const [formText, setFormText] = useState({
    name: '',
    email: '',
    password: '',
    error: ''
  })

  const { name, email, password } = formText

  const handleChange = e => {
    setFormText({ ...formText, [e.target.name]: e.target.value })
  }


  const handleSubmit = e => {
    e.preventDefault()
    if (name.length !== 3) {
      console.assert('Must be 3 letters long')
    }
    console.log(name.length)
    setFormText({
      name: '',
      email: '',
      password: '',
      error: ''
    })
  }



  return (
    <Fragment>
      <Layout>
        <Col className="m-auto" md="6">
          <h1 className="mb-4">Register</h1>
          {formText.error && <p>{formText.error}</p>}
          <Form onSubmit={handleSubmit} className="w-75 reg-form p-5">
            <FormGroup>
              <Label>Name</Label>
              <Input onChange={handleChange} value={name} name="name" type="text" placeholder="Type your name" />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input onChange={handleChange} value={email} name="email" type="email" placeholder="Type your email" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input onChange={handleChange} value={password} name="password" type="password" placeholder="Type your password" />
            </FormGroup>
            <Button color="outline-danger">Register</Button>
          </Form>
        </Col>
      </Layout>
    </Fragment>
  )
}

export default Register
