import { List } from "@mui/material";
import { EmptyState } from "@/components/todo/empty-state";
import { TodoItem } from "@/components/todo/todo-item";
import type { Todo, TodoFilter } from "@/types/todo";

type TodoListProps = {
  activeFilter: TodoFilter;
  hasTodos: boolean;
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
};

export function TodoList({
  activeFilter,
  hasTodos,
  todos,
  onDeleteTodo,
  onToggleTodo
}: TodoListProps) {
  if (todos.length === 0) {
    if (!hasTodos) {
      return <EmptyState />;
    }

    if (activeFilter === "open") {
      return (
        <EmptyState
          description="All tasks are currently completed."
          title="No open tasks"
        />
      );
    }

    if (activeFilter === "completed") {
      return (
        <EmptyState
          description="Complete a task and it will appear here."
          title="No completed tasks"
        />
      );
    }
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
