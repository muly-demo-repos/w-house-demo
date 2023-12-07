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
import { BatchController } from "../batch.controller";
import { BatchService } from "../batch.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  batchActualQty: 42.42,
  batchClass: "exampleBatchClass",
  batchClassId: "exampleBatchClassId",
  batchClassName: "exampleBatchClassName",
  batchId: "exampleBatchId",
  batchPlannedQty: 42.42,
  batchUnits: "exampleBatchUnits",
  id: "exampleId",
};
const CREATE_RESULT = {
  batchActualQty: 42.42,
  batchClass: "exampleBatchClass",
  batchClassId: "exampleBatchClassId",
  batchClassName: "exampleBatchClassName",
  batchId: "exampleBatchId",
  batchPlannedQty: 42.42,
  batchUnits: "exampleBatchUnits",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    batchActualQty: 42.42,
    batchClass: "exampleBatchClass",
    batchClassId: "exampleBatchClassId",
    batchClassName: "exampleBatchClassName",
    batchId: "exampleBatchId",
    batchPlannedQty: 42.42,
    batchUnits: "exampleBatchUnits",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  batchActualQty: 42.42,
  batchClass: "exampleBatchClass",
  batchClassId: "exampleBatchClassId",
  batchClassName: "exampleBatchClassName",
  batchId: "exampleBatchId",
  batchPlannedQty: 42.42,
  batchUnits: "exampleBatchUnits",
  id: "exampleId",
};

const service = {
  createBatch() {
    return CREATE_RESULT;
  },
  batches: () => FIND_MANY_RESULT,
  batch: ({ where }: { where: { id: string } }) => {
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

describe("Batch", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BatchService,
          useValue: service,
        },
      ],
      controllers: [BatchController],
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

  test("POST /batches", async () => {
    await request(app.getHttpServer())
      .post("/batches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /batches", async () => {
    await request(app.getHttpServer())
      .get("/batches")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /batches/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/batches"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /batches/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/batches"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /batches existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/batches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/batches")
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
