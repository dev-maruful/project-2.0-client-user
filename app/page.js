"use client";

import { Button } from "keep-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold">Project 2.0</h1>
        <Button size="md" type="dashed">
          Get started
        </Button>
      </div>
    </main>
  );
}
