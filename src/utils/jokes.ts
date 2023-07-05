export function getViewsColor(numberOfViews: number): string {
	if (numberOfViews > 0 && numberOfViews <= 25) {
		return "red.500";
	}
	if (numberOfViews > 25 && numberOfViews <= 50) {
		return "orange.500";
	}
	if (numberOfViews > 50 && numberOfViews <= 75) {
		return "yellow.500";
	}
	if (numberOfViews > 75 && numberOfViews <= 100) {
		return "green.500";
	}
	return "";
}
