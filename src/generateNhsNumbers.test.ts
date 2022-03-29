import { faker } from "@faker-js/faker"
import { generateInvalidNhsNumbers, generateNhsNumber, generateValidNhsNumbers } from "./generateNhsNumber"
import { validateNhsNumber } from "./validateNhsNumber"

describe("generateInvalidNumbers", () => {
    it("should generate X invalid nhs numbers", () => {
        const expectedNumberOfResults = faker.datatype.number({ min: 5, max: 10 })
        const result = generateInvalidNhsNumbers(expectedNumberOfResults)
        
        expect(result.length).toBe(expectedNumberOfResults)
        expect(result.every(number => validateNhsNumber(number) === false)).toBeTruthy()
    })
})

describe("generateValidNumbers", () => {
    it("should generate X valid nhs numbers", () => {
        const expectedNumberOfResults = faker.datatype.number({ min: 5, max: 10 })
        const result = generateValidNhsNumbers(expectedNumberOfResults)

        expect(result.length).toBe(expectedNumberOfResults)
        expect(result.every(validateNhsNumber)).toBeTruthy()
    })
})

describe("generateNhsNumber", () => {
    it("should return a single valid nhs number", () => {
        const result = generateNhsNumber()
        expect(result).toHaveLength(10)
        expect(validateNhsNumber(result)).toBeTruthy()
    })
})