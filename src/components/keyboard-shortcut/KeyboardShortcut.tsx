import React from "react";
import * as keypress from "keypress.js";

import { useKeyboardShortcut } from "./KeyboardShortcutContext";

interface IProps {
  combo: string;
  callback: () => void;
  description: string;
}

// This id helps to uniquely identifies the event listener instance.
let ctr = 0;

let generateId = () => {
  return ++ctr;
};

export const KeyboardShortcut: React.FunctionComponent<IProps> = ({
  combo,
  callback,
  description,
}) => {
  const { addShortcut, removeShortcut } = useKeyboardShortcut();

  React.useEffect(() => {
    const listener = new keypress.Listener();

    const instance = listener.simple_combo(combo, function () {
      callback();
    });

    const id = generateId();

    addShortcut({ instance, id, combo, description });

    return () => {
      listener.unregister_combo(instance as any); // type error simple_combo() had void as type. So cast to any.
      removeShortcut(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
