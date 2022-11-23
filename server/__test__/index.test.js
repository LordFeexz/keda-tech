const request = require("supertest");
const { sequelize, Vehicle } = require("../models");
const app = require("../app");
const { queryInterface } = sequelize;

afterEach(async () => {
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
    checkinDate: "2022-11-19T08:15:27.207Z",
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

beforeEach(async () => {
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
    expect(result.body[0].checkoutDate).toEqual(null);
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
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
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
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
    expect(result.body[0]).toHaveProperty("plat", expect.any(String));
    expect(result.body[0]).toHaveProperty("checkinDate", expect.any(String));
    expect(result.body[0].price).toBeLessThan(20000);
    expect(result.body[0]).toHaveProperty("status", expect.any(String));
  });
});

describe("get all data", () => {
  it("get / => success test status with minPrice & maxPrice(200)", async () => {
    const result = await request(app)
      .get("/")
      .send({ maxPrice: 20000, minPrice: 10000 });
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
    expect(result.body[0]).toHaveProperty("plat", expect.any(String));
    expect(result.body[0]).toHaveProperty("checkinDate", expect.any(String));
    expect(result.body[0].price).toBeGreaterThan(10000);
    expect(result.body[0].price).toBeLessThan(20000);
    expect(result.body[0]).toHaveProperty("status", expect.any(String));
  });
});

describe("get all data", () => {
  it("get / => success test status with checkinDate(200)", async () => {
    const result = await request(app)
      .get("/")
      .send({ checkinDate: "2022-11-22T00:20:31.975Z", status: "On going" });
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
    expect(result.body[0]).toHaveProperty("plat", expect.any(String));
    expect(result.body[0]).toHaveProperty("checkinDate", expect.any(String));
    expect(result.body[0].price).toEqual(0);
    expect(result.body[0]).toHaveProperty("status", expect.any(String));
  });
});

describe("get all data", () => {
  it("get / => success test status with checkinDate(200)", async () => {
    const result = await request(app)
      .get("/")
      .send({ checkinDate: "2022-11-22T00:00:00.000Z", status: "On going" });
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
    expect(result.body[0]).toHaveProperty("plat", expect.any(String));
    expect(result.body[0].checkinDate).toEqual("2022-11-22T08:20:09.927Z");
    expect(result.body[0].price).toEqual(0);
    expect(result.body[0]).toHaveProperty("status", expect.any(String));
  });
});

describe("get all data", () => {
  it("get / => success test status with checkinDate(200)", async () => {
    const result = await request(app)
      .get("/")
      .send({ checkinDate: "2022-11-22T00:00:00.000Z", status: "On going" });
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
    expect(result.body[0]).toHaveProperty("plat", expect.any(String));
    expect(result.body[0]).toHaveProperty("checkinDate", expect.any(String));
    expect(result.body[0].price).toEqual(0);
    expect(result.body[0]).toHaveProperty("status", expect.any(String));
  });
});

describe("get all data", () => {
  it("get / => success test status with checkoutDate(200)", async () => {
    const result = await request(app)
      .get("/")
      .send({ checkoutDate: "2022-11-22T14:28:25.817Z" });
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
  it("get / => failed test status with false type(404)", async () => {
    const result = await request(app).get("/").send({ type: "moooo" });
    expect(result.status).toBe(404);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Data not found");
  });
});

describe("get all data", () => {
  it("get / => failed test status with false status(404)", async () => {
    const result = await request(app).get("/").send({ status: "moooo" });
    expect(result.status).toBe(404);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Data not found");
  });
});

describe("get all data", () => {
  it("get / => failed test status with minPrice(404)", async () => {
    const result = await request(app).get("/").send({ minPrice: 100000 });
    expect(result.status).toBe(404);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Data not found");
  });
});

describe("get all data", () => {
  it("get / => failed test status with maxPrice(404)", async () => {
    const result = await request(app).get("/").send({ maxPrice: -1 });
    expect(result.status).toBe(404);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Data not found");
  });
});

describe("get all data", () => {
  it("get / => failed test status with minPrice & maxPrice(404)", async () => {
    const result = await request(app)
      .get("/")
      .send({ maxPrice: 10000, minPrice: 2000 });
    expect(result.status).toBe(404);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Data not found");
  });
});

describe("get all data", () => {
  it("get / => failed test status with checkinDate(404)", async () => {
    const result = await request(app)
      .get("/")
      .send({ checkinDate: new Date() });
    expect(result.status).toBe(404);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Data not found");
  });
});

describe("get all data", () => {
  it("get / => failed test status with checkoutDate(404)", async () => {
    const result = await request(app)
      .get("/")
      .send({ checkoutDate: "2022-11-19T14:28:25.817Z" });
    expect(result.status).toBe(404);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Data not found");
  });
});

describe("get all data", () => {
  it("get / => failed test status with checkinDate & checkoutDate(404)", async () => {
    const result = await request(app)
      .get("/")
      .send({ checkinDate: new Date(), checkoutDate: new Date() });
    expect(result.status).toBe(404);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Data not found");
  });
});

describe("get one data", () => {
  it("get /:id => success test status(200)", async () => {
    const result = await request(app).get("/1");
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("id", expect.any(Number));
    expect(result.body).toHaveProperty("type", expect.any(String));
    expect(result.body).toHaveProperty("plat", expect.any(String));
    expect(result.body).toHaveProperty("checkinDate", expect.any(String));
    expect(result.body).toHaveProperty("checkoutDate", expect.any(String));
    expect(result.body).toHaveProperty("price", expect.any(Number));
    expect(result.body).toHaveProperty("status", expect.any(String));
  });
});

describe("get one data", () => {
  it("get /:id => failed test status(404)", async () => {
    const result = await request(app).get("/100");
    expect(result.status).toBe(404);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Data not found");
  });
});

describe("post data", () => {
  it("post / => success test status(201)", async () => {
    await queryInterface.bulkDelete("Vehicles", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
    const result = await request(app).post("/").send({
      type: "mobil",
      plat: "BK 1243 XY",
      checkinDate: "2022-11-22T08:20:31.975Z",
      checkoutDate: null,
      price: 0,
      status: "On going",
      createdAt: "2022-11-22T08:20:31.975Z",
      updatedAt: "2022-11-22T08:20:31.975Z",
    });

    expect(result.status).toBe(201);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "success checkin");
  });
});

describe("post data", () => {
  it("post / => success test status(201)", async () => {
    await queryInterface.bulkDelete("Vehicles", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
    const result = await request(app).post("/").send({
      type: "motor",
      plat: "BK 1243 XY",
      checkinDate: "2022-11-22T08:20:31.975Z",
      checkoutDate: null,
      price: 0,
      status: "On going",
      createdAt: "2022-11-22T08:20:31.975Z",
      updatedAt: "2022-11-22T08:20:31.975Z",
    });

    expect(result.status).toBe(201);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "success checkin");
  });
});

describe("post data", () => {
  it("post / => failed test status(400)", async () => {
    const result = await request(app).post("/").send({
      type: "mobil",
      plat: "BK 1243 XY",
    });

    expect(result.status).toBe(400);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "id must be unique");
  });
});

describe("post data", () => {
  it("post / => failed test status(400)", async () => {
    await queryInterface.bulkDelete("Vehicles", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
    const result = await request(app).post("/").send({
      type: "mobil",
      // plat: "BK 1244 XY",
    });

    expect(result.status).toBe(400);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "plat is required");
  });
});

describe("post data", () => {
  it("post / => failed test status(400)", async () => {
    await queryInterface.bulkDelete("Vehicles", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
    const result = await request(app).post("/").send({
      // type: "mobil",
      plat: "BK 1244 XY",
    });

    expect(result.status).toBe(400);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "type is required");
  });
});

describe("checkout", () => {
  it("put /:id => success test status(201)", async () => {
    const result = await request(app).put(`/12`);
    expect(result.status).toBe(201);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "success checkout");
  });
});

describe("checkout", () => {
  it("put /:id => success test status(201)", async () => {
    const result = await request(app).put(`/7`);
    expect(result.status).toBe(201);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "success checkout");
  });
});

describe("checkout", () => {
  it("put /:id => success test status(201)", async () => {
    const result = await request(app).put(`/9`);
    expect(result.status).toBe(201);

    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "success checkout");
  });
});
