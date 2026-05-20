import TasksItems from "./TasksItems";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";

const pendingTask = {
  id: 1,
  task: "Falar com o ferreiro",
  status: "pending",
  created_at: new Date(Date.now()).toUTCString(),
};

const concludedTask = {
  id: 2,
  task: "Coletar os materiais",
  status: "concluded",
  created_at: new Date(Date.now()).toUTCString(),
};

describe("Testando o componente TasksItems", () => {
  test("Testando a visibilidade do item", () => {
    render(<TasksItems tasks={pendingTask} />);
    expect(screen.getByTestId("task-item")).toBeVisible();
  });

  test("Testando texto", () => {
    render(<TasksItems tasks={pendingTask} />);
    expect(screen.getByTestId("task-item")).toBeVisible();
    expect(screen.getByTestId("title")).toHaveTextContent('Falar com o ferreiro');
  });
});