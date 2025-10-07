'use client';

import { useHotkeys } from 'react-hotkeys-hook';
import { useRouter } from 'next/navigation';

export default function HotKeysHandler() {
  const router = useRouter();

  useHotkeys("ctrl+p", (event) => {
    event.preventDefault();
    router.push("/pricing");
  })

  useHotkeys("ctrl+h", (event) => {
    event.preventDefault();
    router.push("/");
  })

  useHotkeys("ctrl+a", (event) => {
    event.preventDefault();
    router.push("/about")
  })

  useHotkeys("ctrl+u", (event) => {
    event.preventDefault();
    router.push("/user")
  })

  return null;
}