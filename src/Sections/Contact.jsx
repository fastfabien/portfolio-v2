import React from "react";
import { FormContainer, Input, SubmitButton, Textarea } from "../Styles";

const Contact = () => {
  return (
    <FormContainer id="contact">
      <Input type="text" placeholder="Votre Nom" />
      <Input type="email" placeholder="Votre Email" />
      <Textarea placeholder="Votre message" />
      <SubmitButton type="submit" value="Me contacter" />
    </FormContainer>
  );
};

export { Contact };
