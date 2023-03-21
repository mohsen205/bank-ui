import { faker } from "@faker-js/faker";

const CardData = [
  {
    id: faker.datatype.uuid(),
    description: "salary",
    amount: faker.datatype.number({ precision: 0.01 }),
    creditCardNumber: faker.finance.creditCardNumber(),
    startColor: "#EAEAEA",
    endColor: "#B2D0CE",
  },
  {
    id: faker.datatype.uuid(),
    description: "saving account",
    amount: faker.datatype.number({ precision: 0.01 }),
    creditCardNumber: faker.finance.creditCardNumber(),
    startColor: "#F2EFF4",
    endColor: "#B8A9C6",
  },
  {
    id: faker.datatype.uuid(),
    description: "salary",
    amount: faker.datatype.number({ precision: 0.01 }),
    creditCardNumber: faker.finance.creditCardNumber(),
    startColor: "#EDFC74",
    endColor: "#F5FFA8",
  },
  {
    id: faker.datatype.uuid(),
    description: "salary",
    amount: faker.datatype.number({ precision: 0.01 }),
    creditCardNumber: faker.finance.creditCardNumber(),
    startColor: "#EAEAEA",
    endColor: "#B2D0CE",
  },
  {
    id: faker.datatype.uuid(),
    description: "salary",
    amount: faker.datatype.number({ precision: 0.01 }),
    creditCardNumber: faker.finance.creditCardNumber(),
    startColor: "#F7FFC9",
    endColor: "#88E8C6",
  },
];

export default CardData;
