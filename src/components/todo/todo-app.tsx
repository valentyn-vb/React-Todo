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
              React Todo Coach
            </Typography>
            <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
              Learn the todo flow step by step
            </Typography>
            <Typography color="text.secondary">
              This version keeps the UI small and the React logic explicit: one
              state hook, small components, and predictable event handlers.
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
