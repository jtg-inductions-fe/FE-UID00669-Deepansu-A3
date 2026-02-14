import { useRef } from 'react';

/**
 * Anchor ref for a combobox
 */
export const useComboboxAnchor = () => useRef<HTMLDivElement | null>(null);
