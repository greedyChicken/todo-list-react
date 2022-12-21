import { useState } from "react";
import { FormElement, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim()) {
      addNewTask(newTaskContent);
      setNewTaskContent("");
    }
  };

  return (
    <FormElement onSubmit={onFormSubmit}>
      <FormInput
        type="text"
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => {
          setNewTaskContent(target.value);
        }}
      />
      <FormButton>Dodaj zadanie</FormButton>
    </FormElement>
  );
};

export default Form;
