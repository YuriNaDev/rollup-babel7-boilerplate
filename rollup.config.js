import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default {
	input: './src/index.js',
	output: {
		file: './dist/bundle.js',
		name: 'myRollupBundle',
		format: 'umd',
	},
	plugins: [
		resolve(), // resolve({ jsnext: true, main: true })
		commonjs(),
		babel({
			exclude: ['node_modules/**'],
			runtimeHelpers: true,
		}),
		uglify(),
	],
}
