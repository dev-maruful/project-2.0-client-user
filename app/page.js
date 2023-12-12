import { Button } from "@mui/material";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold">Project 2.0</h1>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </div>
    </main>
  );
}
