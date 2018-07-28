import React, { Component } from "react";

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

  render() {
    return (
      <Layout>
        <section>
          <Heading2>Write Something</Heading2>
          <Form>
            <Label>What's your name?:</Label>
            <Input type="text" name="name" />
            <Label>Write a title (max 100 characters):</Label>
            <Input type="text" name="title" />
            <Label>Share your message:</Label>
            <Textarea type="text" name="body" />
            <Label>Select an avatar:</Label>
            <Select>
              <option value="bunny">A cute bunny</option>
              <option value="elephant">A fierce elephant</option>
              <option value="hippo">A loud hippo</option>
              <option value="hyena">A laughing hyena</option>
              <option value="kitty">A rofl-ing kitty</option>
              <option value="puppy">A bashful puppy</option>
              <option value="sheep">The master race</option>
            </Select>
            <Button>Submit</Button>
          </Form>
        </section>
      </Layout>
    );
  }
}

export default WriteSomething;
