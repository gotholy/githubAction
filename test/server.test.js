import supertest from "supertest";
import {app} from "../app.js"

const request = supertest(app)

test("Gibt Hallo githubAction zurück", async()=>{
    const response = await request.get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hallo githubAction")
})