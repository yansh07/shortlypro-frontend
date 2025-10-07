'use client';

import { useHotkeys } from 'react-hotkeys-hook';

export default function HotKeysHandler() {

  useHotkeys("alt+p", (event) => {
    event.preventDefault();
    
  })

  return null;
}