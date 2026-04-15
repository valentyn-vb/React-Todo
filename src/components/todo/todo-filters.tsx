import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import type { TodoFilter } from "@/types/todo";

type TodoFiltersProps = {
  completedCount: number;
  currentFilter: TodoFilter;
  onFilterChange: (nextFilter: TodoFilter) => void;
  openCount: number;
  totalCount: number;
};

export function TodoFilters({
  completedCount,
  currentFilter,
  onFilterChange,
  openCount,
  totalCount
}: TodoFiltersProps) {
  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      fullWidth
      onChange={(_, nextFilter: TodoFilter | null) => {
        if (nextFilter) {
          onFilterChange(nextFilter);
        }
      }}
      value={currentFilter}
    >
      <ToggleButton value="all">Alle ({totalCount})</ToggleButton>
      <ToggleButton value="open">Offen ({openCount})</ToggleButton>
      <ToggleButton value="completed">Erledigt ({completedCount})</ToggleButton>
    </ToggleButtonGroup>
  );
}
