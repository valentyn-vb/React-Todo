import { Stack, Typography } from "@mui/material";

type EmptyStateProps = {
  description?: string;
  title?: string;
};

export function EmptyState({
  description = "Add a task to get your list started.",
  title = "No todos yet"
}: EmptyStateProps) {
  return (
    <Stack
      spacing={1}
      sx={{
        alignItems: "center",
        border: "1px dashed",
        borderColor: "divider",
        borderRadius: 3,
        justifyContent: "center",
        minHeight: 160,
        px: 3,
        py: 4,
        textAlign: "center"
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography color="text.secondary">{description}</Typography>
    </Stack>
  );
}
