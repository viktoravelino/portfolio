"use client";

import { useHeaderState } from "@/hooks/use-headers-state";
import { useParamsState } from "@/hooks/use-params-state";
import axios, { AxiosError } from "axios";
import prettyBytes from "pretty-bytes";
import {
  ChangeEvent,
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type AppContextType = {
  params: Array<{ id: number; key: string; value: string }>;
  addParam: () => void;
  removeParam: (id: number) => void;
  updateParam: (id: number, e: ChangeEvent<HTMLInputElement>) => void;
  headers: Array<{ id: number; key: string; value: string }>;
  addHeader: () => void;
  removeHeader: (id: number) => void;
  updateHeader: (id: number, e: ChangeEvent<HTMLInputElement>) => void;
  handleRequest: ({
    url,
    method,
  }: {
    url: string;
    method: "get" | "post" | "put" | "patch" | "delete";
  }) => Promise<any>;
  response: any;
};

const AppContext = createContext<AppContextType>({} as AppContextType);

export function AppProvider({ children }: PropsWithChildren) {
  const { params, addParam, removeParam, updateParam, paramsObject } =
    useParamsState();
  const { headers, addHeader, removeHeader, updateHeader, headersObject } =
    useHeaderState();

  const [response, setResponse] = useState<any>(null);

  async function handleRequest({
    url,
    method,
  }: {
    url: string;
    method: "get" | "post" | "put" | "patch" | "delete";
  }) {
    setResponse(null);

    const time = {
      start: new Date().getTime(),
      end: 0,
    };

    try {
      const response = await axios.request({
        method,
        url,
        params: paramsObject,
        headers: headersObject,
      });

      setResponse({
        data: response.data,
        status: response.status,
        time: new Date().getTime() - time.start,
        size: prettyBytes(
          JSON.stringify(response.data).length +
            JSON.stringify(response.headers).length
        ),
        headers: response.headers,
      });
    } catch (error: any) {
      if (error instanceof AxiosError) {
        setResponse({
          data: error.response?.data,
          status: error.response?.status,
          message: error.message,
          time: new Date().getTime() - time.start,
          size: prettyBytes(
            JSON.stringify(error.response?.data)?.length +
              JSON.stringify(error.response?.headers)?.length || 0
          ),
          headers: error.response?.headers,
        });
      }
    }
  }

  return (
    <AppContext.Provider
      value={{
        params,
        addParam,
        removeParam,
        updateParam,
        headers,
        addHeader,
        removeHeader,
        updateHeader,
        handleRequest,
        response,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
