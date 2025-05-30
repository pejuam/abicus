import Decimal from "decimal.js";

const MAX_SIGNIFICANT_DIGITS = 21;
const MAX_DECIMAL_PLACES = 200;

export function formatResult(result: Decimal) {
	return result
		.toDecimalPlaces(MAX_DECIMAL_PLACES)
		.toSignificantDigits(MAX_SIGNIFICANT_DIGITS)
		.toString()
		.replace(".", ",")
		.replace("-", "-");
}
