import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import type { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
};

export function TodoItem({ todo, onDeleteTodo, onToggleTodo }: TodoItemProps) {
  return (
    <ListItem
      disablePadding
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        mb: 1.5,
        overflow: "hidden",
        transition: "background-color 120ms ease, border-color 120ms ease",
        "&:hover": {
          backgroundColor: "rgba(138, 75, 47, 0.04)",
          borderColor: "rgba(138, 75, 47, 0.28)"
        }
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          gap: 1,
          px: 1,
          py: 1,
          width: "100%"
        }}
      >
        <Box sx={{ alignItems: "center", display: "flex", minWidth: 44 }}>
          <Checkbox
            checked={todo.completed}
            disableRipple
            onChange={() => onToggleTodo(todo.id)}
            slotProps={{
              input: {
                "aria-label": `Mark ${todo.text} as completed`
              }
            }}
          />
        </Box>
        <ListItemText
          onClick={() => onToggleTodo(todo.id)}
          primary={
            <Typography
              sx={{
                cursor: "pointer",
                fontWeight: 500,
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </Typography>
          }
          secondary={
            <Typography
              color="text.secondary"
              sx={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none"
              }}
              variant="body2"
            >
              {new Date(todo.createdAt).toLocaleString()}
            </Typography>
          }
          sx={{ my: 0 }}
        />
        <IconButton
          aria-label={`Delete ${todo.text}`}
          edge="end"
          onClick={() => onDeleteTodo(todo.id)}
          sx={{ color: "text.secondary", flexShrink: 0, mr: 0.5 }}
        >
          <DeleteOutlineRoundedIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
}
