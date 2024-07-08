"use client";

import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { useAppContext } from "@/app/provider";

type TabReqHeadersProps = {
  tabValue: string;
};

export function TabReqHeaders({ tabValue }: TabReqHeadersProps) {
  const { addHeader, headers, removeHeader, updateHeader } = useAppContext();

  return (
    <TabsContent value={tabValue}>
      <Card>
        <CardHeader className="block space-y-2">
          {headers.map((header) => (
            <div key={header.id} className="flex gap-1">
              <Input
                placeholder="Key"
                name="key"
                value={header.key}
                onChange={(e) => {
                  updateHeader(header.id, e);
                }}
              />
              <Input
                placeholder="Value"
                name="value"
                value={header.value}
                onChange={(e) => {
                  updateHeader(header.id, e);
                }}
              />
              <Button
                size="icon"
                className="shrink-0"
                variant="destructive"
                onClick={() => removeHeader(header.id)}
              >
                <TrashIcon className="size-4" />
              </Button>
            </div>
          ))}
          <Button onClick={addHeader}>Add</Button>
        </CardHeader>
      </Card>
    </TabsContent>
  );
}
