"use client";

import dynamic from "next/dynamic";

const TodoApp = dynamic(
  () => import("@/components/todo/todo-app").then((module) => module.TodoApp),
  {
    ssr: false
  }
);

export function TodoAppShell() {
  return <TodoApp />;
}
