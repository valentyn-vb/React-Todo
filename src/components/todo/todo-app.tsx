"use client";

import { Chip, Container, Paper, Stack, Typography } from "@mui/material";
import { TodoInput } from "@/components/todo/todo-input";
import { TodoList } from "@/components/todo/todo-list";
import { useTodos } from "@/hooks/use-todos";

export function TodoApp() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 4, md: 8 } }}>
      <Paper
        elevation={0}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 5,
          overflow: "hidden"
        }}
      >
        <Stack spacing={4} sx={{ p: { xs: 3, md: 4 } }}>
          <Stack spacing={2}>
            <Typography component="p" variant="overline" color="primary.main">
              FocusList
            </Typography>
            <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
              Keep today&apos;s tasks in one clear place
            </Typography>
            <Typography color="text.secondary">
              Built with Next.js, TypeScript, Material UI, and local storage,
              using small components around a single todo state hook.
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              <Chip label={`${todos.length} total`} color="primary" variant="outlined" />
              <Chip label={`${completedCount} completed`} variant="outlined" />
            </Stack>
          </Stack>

          <TodoInput onAddTodo={addTodo} />

          <TodoList
            todos={todos}
            onDeleteTodo={deleteTodo}
            onToggleTodo={toggleTodo}
          />
        </Stack>
      </Paper>
    </Container>
  );
}
