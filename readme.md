Demo of circular dependencies breaking rollup-plugin-commonjs

Just run `yarn` then `yarn test` to see the problem -
`hash.utils` ought to be defined, but isn't.