import jwt from "jwt-simple";

describe("Routes: Tasks", () => {
  const Users = app.db.models.Users;
  const Tasks = app.db.models.Tasks;
  const jwtSecret = app.libs.config.jwtSecret;
  let token;
  let fakeTask;

  beforeEach(done => {
    done();
  });

  describe("GET /tasks", () => {
    describe("status 200", () => {
      it("returns a list of tasks", done => {
        done();
      });
    });
  });

  describe("POST /tasks", () => {
    describe("status 200", () => {
      it("creates a new task", done => {
        done();
      });
    });
  });

  describe("GET /tasks/:id", () => {
    describe("status 200", () => {
      it("returns one task", done => {
        done();
      });
    });

    describe("status 404", () => {
      it("throws error when task not exist", done => {
        done();
      });
    });
  });

  describe("PUT /tasks/:id", () => {
    describe("status 200", () => {
      it("updates a task", done => {
        done();
      });
    });
  });

  describe("DELETE /tasks/:id", () => {
    describe("status 204", () => {
      it("removes a task", done => {
        done();
      });
    });
  });
});
