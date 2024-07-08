import { ChangeEvent, useState } from "react";

type ParamsState = Array<{ id: number; key: string; value: string }>;

export function useParamsState() {
  const [params, setParams] = useState<ParamsState>([
    { id: 1, key: "", value: "" },
  ]);

  function addParam() {
    setParams((prevParams) => [
      ...prevParams,
      { id: (prevParams.at(-1)?.id || 0) + 1, key: "", value: "" },
    ]);
  }

  function removeParam(id: number) {
    setParams((prevParams) => prevParams.filter((param) => param.id !== id));
  }

  function updateParam(id: number, e: ChangeEvent<HTMLInputElement>) {
    setParams((prevParams) =>
      prevParams.map((param) => {
        if (param.id === id) {
          return { ...param, [e.target.name]: e.target.value };
        }
        return param;
      })
    );
  }

  const paramsObject = params.reduce((acc, param) => {
    if (param.key === "") {
      return acc;
    }
    return { ...acc, [param.key]: param.value };
  }, {});

  return {
    params,
    addParam,
    removeParam,
    updateParam,
    paramsObject,
  };
}
