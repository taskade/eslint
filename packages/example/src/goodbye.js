const goodbye = 'world';

export default goodbye;

// @typescript-eslint/explicit-function-return-type rule is off for JS files
export function getMapping() {
  // @typescript-eslint/camelcase rule is off
  return {
    plan_id: 'planID',
    product_id: 'productID',
    started_at: 'startedAt',
    ended_at: 'endedAt',
    renewed_at: 'renewedAt',
  };
}
