import React from "react";
import { Meta, Story } from "@storybook/react";
import Hello from "./index";

export default {
  title: "Components/Hello",
  component: Hello,
  argTypes: {},
} as Meta;

const Template: Story = () => {
  return <Hello />;
};

export const HelloTemplate = Template.bind({});

HelloTemplate.parameters = {};
HelloTemplate.args = {};
