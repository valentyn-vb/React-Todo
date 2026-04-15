import { Stack, Typography } from "@mui/material";

export function EmptyState() {
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
      <Typography variant="h6">No todos yet</Typography>
      <Typography color="text.secondary">
        Add a task to get your list started.
      </Typography>
    </Stack>
  );
}
