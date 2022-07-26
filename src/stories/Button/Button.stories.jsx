import React from "react";
import Button from "../../Component/Buttons/Button";

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
      color: {
          control: {
              type: 'select',
              options: [
                  "primary", "primaryLight",
                  "secondary", "success", "successLight",
                  "secondaryLight", "warning", "waringLight", "info",
                  "infoLight", "dark", "darkLight", "light", "link"
              ]
          }
      },
      variant: {
          control: {
              type: 'select',
              options: ['contained', 'outlined','text']
          }
      }
  },
};


const Template = (args) => <Button {...args} >Button</Button>;

export const Buttons = Template.bind({});

Buttons.args = {
    color: 'primary',
    variant: 'contained',
    disabled: true
};




