declare global {
	namespace React {
		/** Fixes React 18 compatibility issues with formik: https://github.com/jaredpalmer/formik/issues/3546#issuecomment-1127014775 */
		// eslint-disable-next-line no-unused-vars
		type StatelessComponent<P> = React.FunctionComponent<P>;
	}
}

// Fixes TS2669
export {};
