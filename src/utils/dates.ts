import moment from "moment";

export function formatDate(date = "", format = "DD MMM YYYY"): string {
	if (date.trim() === "") {
		return "";
	}
	return moment(date).format(format);
}
