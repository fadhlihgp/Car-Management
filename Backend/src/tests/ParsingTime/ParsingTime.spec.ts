import { parsingTime } from "../../helpers/ParsingTime";

describe("parsingTime function", () => {
	test("Should parse time correctly", () => {
		const inputDate = new Date("2023-01-01T00:00:00Z");
		const result = parsingTime(inputDate);
		const expectedDate = new Date("2023-01-01T07:00:00Z");
		expect(result.getTime()).toEqual(expectedDate.getTime());
	});

	test("Should not mutate the original date object", () => {
		const inputDate = new Date("2023-01-01T00:00:00Z");
		const originalDate = new Date(inputDate);
		parsingTime(inputDate);
		expect(inputDate.getTime()).toEqual(originalDate.getTime());
	});
});
