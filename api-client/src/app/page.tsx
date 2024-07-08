"use client";

import { RequestContainer } from "@/components/request-container/request-container";
import { ResponseContainer } from "@/components/response-container/response-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormEvent } from "react";
import { useAppContext } from "./provider";

export default function Home() {
  const { handleRequest } = useAppContext();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formObject = Object.fromEntries(formData) as Record<string, string>;
    await handleRequest({
      url: formObject.url,
      method: formObject.method as "get" | "post" | "put" | "patch" | "delete",
    });
  }

  return (
    <main className="max-w-7xl mx-auto py-10 px-4 xl:px-0">
      <form className="flex gap-1" onSubmit={handleSubmit}>
        <Select defaultValue="get" name="method">
          <SelectTrigger className="w-[130px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="get">GET</SelectItem>
              <SelectItem value="post">POST</SelectItem>
              <SelectItem value="put">PUT</SelectItem>
              <SelectItem value="patch">PATCH</SelectItem>
              <SelectItem value="delete">DELETE</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          placeholder="https://example.com"
          name="url"
          defaultValue="https://jsonplaceholder.typicode.com/todos/1"
        />

        <Button type="submit">Send</Button>
      </form>

      <RequestContainer />

      <ResponseContainer />
    </main>
  );
}
