/** The scroll ruler replaces the native scrollbar only where a mouse and room for a side rail exist. */
export const RULER_QUERY = '(pointer: fine) and (hover: hover) and (min-width: 1024px)';
export const RULER_RAIL_PX = 44;

/** Runs before first paint so the gutter exists from the start and the page never shifts. */
export const rulerBootScript = `try{if(matchMedia(${JSON.stringify(RULER_QUERY)}).matches)document.documentElement.dataset.ruler='on'}catch(e){}`;
