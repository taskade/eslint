/* global console */

// simple-import-sort/imports rule
import goodbye from './goodbye';
import hello from './hello';
import type { HumanDesc } from './Human';

// eqeqeq rule, always for all, never for null
if (hello == null) {
  console.log(goodbye);
}

// no-param-reassign rule, allow any param that begin with `draft`
type ReassignParamOptions = {
  value?: string;
};
function reassignParam(draft: ReassignParamOptions): void {
  draft.value = 'true';
}
reassignParam({});

export function printHumanDesc(humanDesc: HumanDesc) {
  console.log(humanDesc);
}

if (hello != null) {
  console.log('TRUE');
}
