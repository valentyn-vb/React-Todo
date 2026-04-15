import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
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
      secondaryAction={
        <IconButton
          aria-label={`Delete ${todo.text}`}
          edge="end"
          onClick={() => onDeleteTodo(todo.id)}
        >
          <DeleteOutlineRoundedIcon />
        </IconButton>
      }
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        mb: 1.5
      }}
    >
      <ListItemButton onClick={() => onToggleTodo(todo.id)} sx={{ py: 1.5 }}>
        <ListItemIcon sx={{ minWidth: 44 }}>
          <Checkbox
            checked={todo.completed}
            edge="start"
            disableRipple
            slotProps={{
              input: {
                "aria-label": `Mark ${todo.text} as completed`
              }
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              sx={{
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
              sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
              variant="body2"
            >
              {new Date(todo.createdAt).toLocaleString()}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
