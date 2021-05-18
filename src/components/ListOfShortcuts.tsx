import React from "react";
import { useKeyboardShortcut } from "./keyboard-shortcut";

export const ListOfShortcuts: React.FunctionComponent = () => {
  const { shortcuts } = useKeyboardShortcut();

  return (
    <div className="mt-2">
      <h2 className="m-2 text-xl">List of shortcuts subscribed</h2>

      {shortcuts.map((sc, idx) => (
        <div
          key={`${sc.combo}-${sc.description}-${idx}`}
          className="border-b border-gray-200 py-3"
        >
          <span className="p-2">
            {sc.combo}{" "}
            <span className="inline-block ml-2 text-sm text-gray-500">
              {sc.description}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
