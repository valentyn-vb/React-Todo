"use client";

import { useEffect, useState } from "react";
import type { Todo } from "@/types/todo";

const STORAGE_KEY = "react-todo.todos";

function readStoredTodos() {
  if (typeof window === "undefined") {
    return [];
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(rawValue) as Todo[];

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue;
  } catch {
    return [];
  }
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => readStoredTodos());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    setTodos((currentTodos) => [
      {
        id: crypto.randomUUID(),
        text: trimmedText,
        completed: false,
        createdAt: Date.now()
      },
      ...currentTodos
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  };
}
