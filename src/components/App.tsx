import React from "react";

import {
  KeyboardShortcut,
  KeyboardShortcutProvider,
} from "./keyboard-shortcut";
import { ListOfShortcuts } from "./ListOfShortcuts";

export const App: React.FunctionComponent = () => {
  const [toggleSubs, setToggleSubs] = React.useState(true);

  const [eventOne, setEventOne] = React.useState("green");
  const [eventTwo, setEventTwo] = React.useState("red");

  const handleEvenOne = React.useCallback(() => {
    setEventOne((current) => (current === "green" ? "yellow" : "green"));
  }, []);

  const handleEvenTwo = React.useCallback(() => {
    setEventTwo((current) => (current === "red" ? "blue" : "red"));
  }, []);

  const handleToggleSubs = React.useCallback(() => {
    setToggleSubs((flag) => !flag);
  }, []);

  return (
    <KeyboardShortcutProvider>
      <main className="m-2">
        <h2 className="text-2xl mb-5">Keyboard Shortcut Wrapper Component</h2>

        <div className="flex mx-10">
          <div className="w-5/12 mr-10">
            <div className={`my-4 p-4 bg-${eventOne}-100`}>
              Press shift + K toggles between color green/yellow
            </div>

            <div className={`my-4 p-4 bg-${eventTwo}-100`}>
              Press ctrl + K toggles between color red/blue
            </div>

            <button
              className="w-72 py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
              onClick={handleToggleSubs}
            >
              {toggleSubs ? "Un Subscribe shift + k" : "Subscribe shift + k"}
            </button>
          </div>

          <ListOfShortcuts />

          {toggleSubs && (
            <KeyboardShortcut
              combo="shift k"
              description="Press shift + K toggles between color green/yellow"
              callback={handleEvenOne}
            />
          )}

          <KeyboardShortcut
            combo="ctrl k"
            description="Press ctrl + K toggles between color red/blue"
            callback={handleEvenTwo}
          />
        </div>
      </main>
    </KeyboardShortcutProvider>
  );
};
