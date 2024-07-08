import { ChangeEvent, useState } from "react";

type HeaderState = Array<{ id: number; key: string; value: string }>;

export function useHeaderState() {
  const [headers, setHeaders] = useState<HeaderState>([
    { id: 1, key: "", value: "" },
  ]);

  function addHeader() {
    setHeaders((prevHeaders) => [
      ...prevHeaders,
      { id: (prevHeaders.at(-1)?.id || 0) + 1, key: "", value: "" },
    ]);
  }

  function removeHeader(id: number) {
    setHeaders((prevHeaders) =>
      prevHeaders.filter((header) => header.id !== id)
    );
  }

  function updateHeader(id: number, e: ChangeEvent<HTMLInputElement>) {
    setHeaders((prevHeaders) =>
      prevHeaders.map((header) => {
        if (header.id === id) {
          return { ...header, [e.target.name]: e.target.value };
        }
        return header;
      })
    );
  }

  const headersObject = headers.reduce((acc, header) => {
    if (header.key === "") {
      return acc;
    }
    return { ...acc, [header.key]: header.value };
  }, {});

  return {
    headers,
    addHeader,
    removeHeader,
    updateHeader,
    headersObject,
  };
}
