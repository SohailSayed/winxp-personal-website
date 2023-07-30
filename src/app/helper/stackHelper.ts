import { appStack } from "../WindowContext";

export const pushToTop = (stack: appStack[], index: number) => {
  if (index !== -1) {
    const updatedStack = [...stack];
    const item = updatedStack[index];
    updatedStack.push(updatedStack.splice(updatedStack.indexOf(item), 1)[0]);
    for (let i = 0; i < updatedStack.length; i++) {
      updatedStack[i].zIndex = i;
    }
    return updatedStack;
  }
  return stack;
};

export const pushToBottom = (stack: appStack[], index: number) => {
  if (index !== -1) {
    const updatedStack = [...stack];
    const item = updatedStack[index];
    updatedStack.unshift(updatedStack.splice(updatedStack.indexOf(item), 1)[0]);
    for (let i = 0; i < stack.length; i++) {
      updatedStack[i].zIndex = i;
    }
    return updatedStack;
  }
  return stack;
};
