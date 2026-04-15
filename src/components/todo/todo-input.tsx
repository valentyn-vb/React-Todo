"use client";

import { FormEvent, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

type TodoInputProps = {
  onAddTodo: (text: string) => void;
};

export function TodoInput({ onAddTodo }: TodoInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return;
    }

    onAddTodo(trimmedValue);
    setValue("");
  };

  return (
    <Stack
      component="form"
      direction={{ xs: "column", sm: "row" }}
      onSubmit={handleSubmit}
      spacing={2}
    >
      <TextField
        fullWidth
        label="Add a new todo"
        onChange={(event) => setValue(event.target.value)}
        placeholder="Example: Prepare project notes"
        value={value}
      />
      <Button size="large" type="submit" variant="contained">
        Add
      </Button>
    </Stack>
  );
}
