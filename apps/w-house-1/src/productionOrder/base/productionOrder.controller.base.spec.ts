import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ProductionOrderController } from "../productionOrder.controller";
import { ProductionOrderService } from "../productionOrder.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  className: "exampleClassName",
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  editedAt: new Date(),
  editedBy: "exampleEditedBy",
  endDate: new Date(),
  firmed: "true",
  id: "exampleId",
  released: "true",
  schemaVersion: "exampleSchemaVersion",
  startDate: new Date(),
  state: "exampleState",
};
const CREATE_RESULT = {
  className: "exampleClassName",
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  editedAt: new Date(),
  editedBy: "exampleEditedBy",
  endDate: new Date(),
  firmed: "true",
  id: "exampleId",
  released: "true",
  schemaVersion: "exampleSchemaVersion",
  startDate: new Date(),
  state: "exampleState",
};
const FIND_MANY_RESULT = [
  {
    className: "exampleClassName",
    createdAt: new Date(),
    createdBy: "exampleCreatedBy",
    editedAt: new Date(),
    editedBy: "exampleEditedBy",
    endDate: new Date(),
    firmed: "true",
    id: "exampleId",
    released: "true",
    schemaVersion: "exampleSchemaVersion",
    startDate: new Date(),
    state: "exampleState",
  },
];
const FIND_ONE_RESULT = {
  className: "exampleClassName",
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  editedAt: new Date(),
  editedBy: "exampleEditedBy",
  endDate: new Date(),
  firmed: "true",
  id: "exampleId",
  released: "true",
  schemaVersion: "exampleSchemaVersion",
  startDate: new Date(),
  state: "exampleState",
};

const service = {
  createProductionOrder() {
    return CREATE_RESULT;
  },
  productionOrders: () => FIND_MANY_RESULT,
  productionOrder: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ProductionOrder", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProductionOrderService,
          useValue: service,
        },
      ],
      controllers: [ProductionOrderController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /productionOrders", async () => {
    await request(app.getHttpServer())
      .post("/productionOrders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        editedAt: CREATE_RESULT.editedAt.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
      });
  });

  test("GET /productionOrders", async () => {
    await request(app.getHttpServer())
      .get("/productionOrders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          editedAt: FIND_MANY_RESULT[0].editedAt.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
        },
      ]);
  });

  test("GET /productionOrders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productionOrders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /productionOrders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productionOrders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        editedAt: FIND_ONE_RESULT.editedAt.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
      });
  });

  test("POST /productionOrders existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/productionOrders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        editedAt: CREATE_RESULT.editedAt.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/productionOrders")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
