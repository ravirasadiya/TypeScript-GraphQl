import { registerEnumType } from "type-graphql";
import { TaskStateEnum } from "./const";

registerEnumType(TaskStateEnum, {
    name: "TaskStateEnum", // this one is mandatory
    description: "The basic directions", // this one is optional
});