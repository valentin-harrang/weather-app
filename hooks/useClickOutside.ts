import { RefObject, useEffect, useCallback } from "react";

export const useClickOutside = (
  refs: RefObject<HTMLElement>[],
  onClickOutside: () => void
) => {
  const stableOnClickOutside = useCallback(onClickOutside, [onClickOutside]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      for (let i = 0; i < refs.length; i++) {
        const ref = refs[i];
        if (ref.current && ref.current.contains(event.target as Node)) {
          return;
        }
      }

      stableOnClickOutside();
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, stableOnClickOutside]);
};
