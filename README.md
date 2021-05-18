# Keyboard shortcut wrapper Component

This is a React component wrapper build on top of the library [keypress.js](https://www.npmjs.com/package/keypress.js).
This wrapper component helps to bind to a keyboard shortcuts supported by the `keypress.js` library. It takes care of the subscription/un-subscription of events.

## Quick start

A simple usage to subscribe to an event.

```jsx
import {
  KeyboardShortcut,
  KeyboardShortcutProvider,
} from "./keyboard-shortcut";

function App() {
  return (
    <KeyboardShortcutProvider>
      <KeyboardShortcut
        combo="shift k"
        description="awesome description"
        callback={handleCallback}
      />
    </KeyboardShortcutProvider>
  )
}
```

## API details


### KeyboardShortcutProvider

This is a component which keeps tracks of all the registered keyboard shortcuts. All the `<KeyboardShortcut />` components should be used within the `KeyboardShortcutProvider` component as shown in quick start above.


### KeyboardShortcut

Use this compoent to register any keyboard shortcuts. This components receives the following props.

`combo` - The keyboard shortcuts we want to register.

`description` - Description which will be shown in the Keyboard shorcuts list.

`callback` - Function to execute once the shortcut is pressed.

If we need to unresiter we can just un-mount a `KeyboardShortcut` it automatically un subscribes from the keyboard events its subscribed.


## Launch demo

Run the following from the root of this project.

```
yarn
yarn start
```

Navigate to http://localhost:3000/ and see the demo!
