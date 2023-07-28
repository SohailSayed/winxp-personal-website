import { appStack } from "../WindowContext";

export const pushToEnd = (stack: appStack[], index: number) => {
  if (index !== -1) {
    const updatedStack = [...stack];
    const item = updatedStack[index];
    stack.push(stack.splice(stack.indexOf(item), 1)[0]);
    for (let i = 0; i < stack.length; i++) {
      stack[i].zIndex = i;
    }
    return updatedStack;
  }
  return stack;
};
