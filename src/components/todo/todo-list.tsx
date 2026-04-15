import { List } from "@mui/material";
import { EmptyState } from "@/components/todo/empty-state";
import { TodoItem } from "@/components/todo/todo-item";
import type { Todo } from "@/types/todo";

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
};

export function TodoList({
  todos,
  onDeleteTodo,
  onToggleTodo
}: TodoListProps) {
  if (todos.length === 0) {
    return <EmptyState />;
  }

  return (
    <List disablePadding>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </List>
  );
}
