import { StoryFn } from "@storybook/react";
import { BootstrapTableProps } from "..";
import "./BootstrapTable.css";
interface Person {
    id: number;
    name: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    address: string;
    income: number;
    height: number;
    weight: number;
    hobbies: string[];
    active: boolean;
}
type BootstrapTableStory = StoryFn<BootstrapTableProps<Person>>;
export declare const Default: BootstrapTableStory;
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, import("@storybook/types").Args>;
export default _default;
