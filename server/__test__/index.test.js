const request = require("supertest");
const { sequelize } = require("../models");
const app = require("../app");
const { queryInterface } = sequelize;

afterAll(async () => {
  await queryInterface.bulkDelete("Vehicles", null, {
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });
});

const seedData = [
  {
    id: 5,
    type: "motor",
    plat: "BK 1238 XY",
    checkinDate: "2022-11-22T08:20:00.330Z",
    checkoutDate: "2022-11-22T14:00:57.061Z",
    price: 0,
    status: "done",
    createdAt: "2022-11-22T08:20:00.329Z",
    updatedAt: "2022-11-22T14:00:57.063Z",
  },
  {
    id: 6,
    type: "motor",
    plat: "BK 1239 XY",
    checkinDate: "2022-11-22T08:20:05.606Z",
    checkoutDate: "2022-11-22T14:02:07.842Z",
    price: 12000,
    status: "done",
    createdAt: "2022-11-22T08:20:05.605Z",
    updatedAt: "2022-11-22T14:02:08.158Z",
  },
  {
    id: 3,
    type: "motor",
    plat: "BK 1236 XY",
    checkinDate: "2022-11-21T08:19:48.981Z",
    checkoutDate: "2022-11-22T14:02:52.285Z",
    price: 16000,
    status: "done",
    createdAt: "2022-11-22T08:19:48.981Z",
    updatedAt: "2022-11-22T14:02:52.376Z",
  },
  {
    id: 4,
    type: "motor",
    plat: "BK 1237 XY",
    checkinDate: "2022-11-22T08:19:54.984Z",
    checkoutDate: "2022-11-22T14:28:25.817Z",
    price: 14000,
    status: "done",
    createdAt: "2022-11-22T08:19:54.984Z",
    updatedAt: "2022-11-22T14:28:25.918Z",
  },
  {
    id: 1,
    type: "mobil",
    plat: "BK 1234 XY",
    checkinDate: "2022-11-22T08:19:08.735Z",
    checkoutDate: "2022-11-22T14:40:02.556Z",
    price: 35000,
    status: "done",
    createdAt: "2022-11-22T08:19:08.733Z",
    updatedAt: "2022-11-22T14:40:02.845Z",
  },
];

const onGoingSeedData = [
  {
    id: 7,
    type: "motor",
    plat: "BK 1240 XY",
    checkinDate: "2022-11-22T08:20:09.927Z",
    checkoutDate: null,
    price: 0,
    status: "On going",
    createdAt: "2022-11-22T08:20:09.926Z",
    updatedAt: "2022-11-22T08:20:09.926Z",
  },
  {
    id: 8,
    type: "mobil",
    plat: "BK 1241 XY",
    checkinDate: "2022-11-22T08:20:22.039Z",
    checkoutDate: null,
    price: 0,
    status: "On going",
    createdAt: "2022-11-22T08:20:22.038Z",
    updatedAt: "2022-11-22T08:20:22.038Z",
  },
  {
    id: 9,
    type: "mobil",
    plat: "BK 1242 XY",
    checkinDate: "2022-11-22T08:20:27.207Z",
    checkoutDate: null,
    price: 0,
    status: "On going",
    createdAt: "2022-11-22T08:20:27.207Z",
    updatedAt: "2022-11-22T08:20:27.207Z",
  },
  {
    id: 10,
    type: "mobil",
    plat: "BK 1243 XY",
    checkinDate: "2022-11-22T08:20:31.975Z",
    checkoutDate: null,
    price: 0,
    status: "On going",
    createdAt: "2022-11-22T08:20:31.975Z",
    updatedAt: "2022-11-22T08:20:31.975Z",
  },
  {
    id: 11,
    type: "mobil",
    plat: "BK 1244 XY",
    checkinDate: "2022-11-22T08:20:36.894Z",
    checkoutDate: null,
    price: 0,
    status: "On going",
    createdAt: "2022-11-22T08:20:36.894Z",
    updatedAt: "2022-11-22T08:20:36.894Z",
  },
  {
    id: 12,
    type: "mobil",
    plat: "BK 1245 XY",
    checkinDate: "2022-11-22T08:20:41.649Z",
    checkoutDate: null,
    price: 0,
    status: "On going",
    createdAt: "2022-11-22T08:20:41.648Z",
    updatedAt: "2022-11-22T08:20:41.648Z",
  },
  {
    id: 2,
    type: "motor",
    plat: "BK 1235 XY",
    checkinDate: "2022-11-22T08:19:40.743Z",
    checkoutDate: "2022-11-22T08:24:33.437Z",
    price: 0,
    status: "On going",
    createdAt: "2022-11-22T08:19:40.742Z",
    updatedAt: "2022-11-22T08:24:33.438Z",
  },
];

beforeAll(async () => {
  await queryInterface.bulkInsert("Vehicles", seedData);
  await queryInterface.bulkInsert("Vehicles", onGoingSeedData);
});

describe("get all data", () => {
  it("get / => success test status(200)", async () => {
    const result = await request(app).get("/");
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
    expect(result.body[0]).toHaveProperty("plat", expect.any(String));
    expect(result.body[0]).toHaveProperty("checkinDate", expect.any(String));
    expect(result.body[0]).toHaveProperty("checkoutDate", expect.any(String));
    expect(result.body[0]).toHaveProperty("price", expect.any(Number));
    expect(result.body[0]).toHaveProperty("status", expect.any(String));
  });
});

describe("get all data", () => {
  it("get / => success test status with status(200)", async () => {
    const result = await request(app).get("/").send({ status: "On going" });
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
    expect(result.body[0]).toHaveProperty("plat", expect.any(String));
    expect(result.body[0]).toHaveProperty("checkinDate", expect.any(String));
    expect(result.body[0]).toHaveProperty("price", expect.any(Number));
    expect(result.body[0]).toHaveProperty("status", expect.any(String));
  });
});

describe("get all data", () => {
  it("get / => success test status with status(200)", async () => {
    const result = await request(app).get("/").send({ status: "On going" });
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
    expect(result.body[0]).toHaveProperty("plat", expect.any(String));
    expect(result.body[0]).toHaveProperty("checkinDate", expect.any(String));
    expect(result.body[0]).toHaveProperty("price", expect.any(Number));
    expect(result.body[0]).toHaveProperty("status", expect.any(String));
  });
});

describe("get all data", () => {
  it("get / => success test status with type mobil(200)", async () => {
    const result = await request(app).get("/").send({ type: "mobil" });
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0].type).toMatch(new RegExp("mobil"));
    expect(result.body[0]).toHaveProperty("plat", expect.any(String));
    expect(result.body[0]).toHaveProperty("checkinDate", expect.any(String));
    expect(result.body[0]).toHaveProperty("price", expect.any(Number));
    expect(result.body[0]).toHaveProperty("status", expect.any(String));
  });
});

describe("get all data", () => {
  it("get / => success test status with type motor(200)", async () => {
    const result = await request(app).get("/").send({ type: "motor" });
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0].type).toMatch(new RegExp("motor"));
    expect(result.body[0]).toHaveProperty("plat", expect.any(String));
    expect(result.body[0]).toHaveProperty("checkinDate", expect.any(String));
    expect(result.body[0]).toHaveProperty("price", expect.any(Number));
    expect(result.body[0]).toHaveProperty("status", expect.any(String));
  });
});

describe("get all data", () => {
  it("get / => success test status with minPrice(200)", async () => {
    const result = await request(app).get("/").send({ minPrice: 12000 });
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0].type).toMatch(new RegExp("motor"));
    expect(result.body[0]).toHaveProperty("plat", expect.any(String));
    expect(result.body[0]).toHaveProperty("checkinDate", expect.any(String));
    expect(result.body[0].price).toBeGreaterThan(12000);
    expect(result.body[0]).toHaveProperty("status", expect.any(String));
  });
});

describe("get all data", () => {
  it("get / => success test status with maxPrice(200)", async () => {
    const result = await request(app).get("/").send({ maxPrice: 20000 });
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0].type).toMatch(new RegExp("motor"));
    expect(result.body[0]).toHaveProperty("plat", expect.any(String));
    expect(result.body[0]).toHaveProperty("checkinDate", expect.any(String));
    expect(result.body[0].price).toBeLessThan(20000);
    expect(result.body[0]).toHaveProperty("status", expect.any(String));
  });
});
