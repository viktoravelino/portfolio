"use client";

import { useAppContext } from "@/app/provider";
import { Card, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ResponseContainer() {
  const { response } = useAppContext();

  if (!response) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col mt-10">
        <h2 className="text-2xl font-bold">Response</h2>
        <div className="flex gap-2 items-center">
          <span>Status Code: {response.status}</span>
          <span>Time: {response.time} ms</span>
          <span>Size: {response.size}</span>
        </div>
      </div>

      <Tabs defaultValue="body" className="mt-2">
        <TabsList className="w-full [&>*]:flex-1  md:w-auto">
          <TabsTrigger value="body">Body</TabsTrigger>
          <TabsTrigger value="headers">Headers</TabsTrigger>
        </TabsList>

        <TabsContent value="body">
          <Card className="overflow-auto ">
            <CardHeader>
              {response.message && <span>{response.message}</span>}
              <pre>{JSON.stringify(response.data, null, 2)}</pre>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="headers">
          <Card>
            <CardHeader>
              <pre>{JSON.stringify(response.headers, null, 2)}</pre>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
