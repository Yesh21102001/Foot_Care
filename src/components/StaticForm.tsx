"use client";

import type { ComponentProps } from "react";

// A form that does not reload the page when submitted. The forms do not send anything yet;
// replace this with a Server Action or an API route when the backend is ready.
export function StaticForm(props: ComponentProps<"form">) {
  return <form {...props} onSubmit={(event) => event.preventDefault()} />;
}
