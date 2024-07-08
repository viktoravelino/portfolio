"use client";

import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { useAppContext } from "@/app/provider";

type TabQueryParamsProps = {
  tabValue: string;
};

export function TabQueryParams({ tabValue }: TabQueryParamsProps) {
  const { params, addParam, removeParam, updateParam } = useAppContext();

  return (
    <TabsContent value={tabValue}>
      <Card>
        <CardHeader className="block space-y-2">
          {params.map((param) => (
            <div className="flex gap-1 w-full" key={param.id}>
              <Input
                placeholder="Key"
                name="key"
                value={param.key}
                onChange={(e) => {
                  updateParam(param.id, e);
                }}
              />
              <Input
                placeholder="Value"
                name="value"
                value={param.value}
                onChange={(e) => {
                  updateParam(param.id, e);
                }}
              />
              <Button
                size="icon"
                className="shrink-0"
                variant="destructive"
                onClick={() => removeParam(param.id)}
              >
                <TrashIcon className="size-4" />
              </Button>
            </div>
          ))}

          <Button onClick={addParam}>Add</Button>
        </CardHeader>
      </Card>
    </TabsContent>
  );
}
