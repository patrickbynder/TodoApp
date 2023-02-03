import React, { useContext, useState } from "react";
import { StyledButton } from "./StyledButton";
import { StyledInput } from "./StyledInput";
import { ThemeContext, useTheme } from "../themeProvider";

type Props = { onAdd: (value: string) => void };

function AddTasks({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  // const { theme } = useContext(ThemeContext);
  const { theme } = useTheme();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onAdd(title);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StyledInput
          placeholder="Add your Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StyledButton theme={theme}> Add Task </StyledButton>
      </form>
    </div>
  );
}

export default AddTasks;
