const regexpSingleLine = /^.*$/;
/**
 * Determine whether the string is single line.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 * @example 1
 * ```ts
 * isStringSingleLine(`Wisi sed et at vero eos nostrud volutpat sed stet dignissim sit sanctus in eros.
 * Et laoreet odio sanctus ea.
 * Sea in dolores diam tincidunt labore sea stet vero dolor ut est.
 * At aliquyam diam facilisis lorem et takimata et volutpat eros erat ipsum velit labore sed ea illum.
 * Dolor lorem sed et volutpat exerci gubergren gubergren tempor quis ea eirmod eos ut dolor autem ipsum accumsan.`);
 * //=> false
 * ```
 * @example 2
 * ```ts
 * isStringSingleLine("Hello, world!");
 * //=> true
 * ```
 */
export function isStringSingleLine(item: string): boolean {
	return regexpSingleLine.test(item);
}
export default isStringSingleLine;
