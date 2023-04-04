import React from "react";
interface DebouncedInputProps {
    className?: string;
    debounce?: number;
    list?: string;
    onChange: (value: unknown) => void;
    style?: React.CSSProperties;
    type?: string;
    value: string | number | readonly string[] | undefined;
}
declare function DebouncedInput({ debounce, onChange, value: initialValue, ...props }: DebouncedInputProps): JSX.Element;
export default DebouncedInput;
