import React, { Component } from "react";
import Router from "next/router";

import Layout from "../components/Layout";
import Heading2 from "../components/Heading2";
import Button from "../components/Button";
import Select from "../components/Select";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Label from "../components/Label";

import Form from "../components/Form";

class WriteSomething extends Component {
  state = {
    form: {
      name: "",
      title: "",
      body: "",
      avatar: "bunny",
    },
  }

  handleChange = (event) => {
    let { name, value } = event.target;

    this.setState({
      form : {
        ...this.state.form,
        [name]: value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.form)
    };

    fetch("/api/writesomething", options)
      .then(Router.push("/readsomething"));
  }

  render() {
    return (
      <Layout>
        <section>
          <Heading2>Write Something</Heading2>
          <Form onSubmit={this.handleSubmit}>
            <Label>What's your name?:</Label>
            <Input type="text" name="name" onChange={this.handleChange} />
            <Label>Write a title (max 100 characters):</Label>
            <Input type="text" name="title" onChange={this.handleChange} />
            <Label>Share your message:</Label>
            <Textarea type="text" name="body" onChange={this.handleChange} />
            <Label>Select an avatar:</Label>
            <Select name="avatar" onChange={this.handleChange}>
              <option value="bunny">A cute bunny</option>
              <option value="elephant">A fierce elephant</option>
              <option value="hippo">A loud hippo</option>
              <option value="hyena">A laughing hyena</option>
              <option value="kitty">A rofl-ing kitty</option>
              <option value="puppy">A bashful puppy</option>
              <option value="sheep">The master race</option>
            </Select>
            <Button type="submit">Submit</Button>
          </Form>
        </section>
      </Layout>
    );
  }
}

export default WriteSomething;
