import React from "react";

interface IShortcut {
  id: number;
  combo: string;
  description: string;
  instance: any; // TODO: update type
}

interface IContext {
  shortcuts: IShortcut[];
  addShortcut: (shortcut: IShortcut) => void;
  removeShortcut: (id: number) => void;
}

interface IProps {
  children: React.ReactNode;
}

const KeyboardShortcutContext = React.createContext<IContext | null>(null);

export const KeyboardShortcutProvider: React.FunctionComponent<IProps> = ({
  children,
}) => {
  const [shortcuts, setShortcuts] = React.useState<IShortcut[]>([]);

  const addShortcut = React.useCallback((sc: IShortcut) => {
    setShortcuts((currentSc) => [...currentSc, sc]);
  }, []);

  const removeShortcut = React.useCallback((id: number) => {
    setShortcuts((currentSc) => {
      const res: IShortcut[] = [];

      currentSc.forEach((sc) => {
        if (sc.id !== id) {
          res.push(sc);
        }
      });

      return res;
    });
  }, []);

  const value = {
    shortcuts,
    addShortcut,
    removeShortcut,
  };

  return (
    <KeyboardShortcutContext.Provider value={value}>
      {children}
    </KeyboardShortcutContext.Provider>
  );
};

export function useKeyboardShortcut() {
  const context = React.useContext(KeyboardShortcutContext);

  if (context === undefined) {
    throw new Error("useCount must be used within a KeyboardShortcutProvider");
  }

  return context as IContext;
}
