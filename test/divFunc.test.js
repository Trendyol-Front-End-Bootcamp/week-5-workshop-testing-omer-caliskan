import { divFunc } from '../src/divFunc';

const DIVIDE_BY_ZERO_ERROR = "DIVIDE_BY_ZERO_ERROR";
const NOT_A_NUMBER_ERROR = "NOT_A_NUMBER_ERROR";

describe("check divide function", () => {
    it('should divide', () => {
        expect(divFunc(10,2)).toBe(5);
    });

    it('should error when 2. parameter zero', () => {
        expect(() => divFunc(10,0)).toThrowError(DIVIDE_BY_ZERO_ERROR);
    });

    it('should error when any parameter NaN', () => {
        expect(() => divFunc(10,'a')).toThrowError(NOT_A_NUMBER_ERROR);
    })
})