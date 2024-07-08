import { Card, CardHeader } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { TabQueryParams } from "./tab-query-params";
import { TabReqHeaders } from "./tab-req-headers";

export function RequestContainer() {
  return (
    <Tabs defaultValue="query-params" className="mt-10">
      <TabsList className="w-full [&>*]:flex-1 md:w-auto">
        <TabsTrigger value="query-params">Query Params</TabsTrigger>
        <TabsTrigger value="headers">Headers</TabsTrigger>
        <TabsTrigger value="json-body">Json Body</TabsTrigger>
      </TabsList>

      <TabQueryParams tabValue="query-params" />

      <TabReqHeaders tabValue="headers" />

      <TabsContent value="json-body">
        <Card>
          <CardHeader>JSON Body</CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
