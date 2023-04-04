import React, { useEffect, useState } from "react";

interface DebouncedInputProps {
  className?: string;
  debounce?: number;
  list?: string;
  onChange: (value: unknown) => void;
  style?: React.CSSProperties;
  type?: string;
  value: string | number | readonly string[] | undefined;
}

function DebouncedInput({
  debounce = 500,
  onChange,
  value: initialValue,
  ...props
}: DebouncedInputProps): JSX.Element {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input {...props} value={value} onChange={e => setValue(e.target.value)} />
  );
}

export default DebouncedInput;
