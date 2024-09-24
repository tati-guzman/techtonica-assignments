// import request from 'supertest';
// import app from './server';
// import {jest} from '@jest/globals';
const request = require('supertest');
const app = require('./server');

//Test all four CRUD operations (GET, POST, PUT, DELETE)

//Testing GET Request for Individuals Table
describe('GET /tracker/individuals', () => {
 
  it('should return status 200 and a list of items', async () => {
    const response = await request(app).get('/tracker/individuals');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    const firstIndividual = response.body[0];
    expect(firstIndividual).toHaveProperty('animal_id');
     });
  });

//Testing POST request for Individuals Table
describe('POST /tracker/individuals/:animal_id', () => {
 
    it('should return a new individual', async () => {
        const newIndividual = {
           animalID: 420,
           nickname: "Boo",
           commonName: "tiger",
           scientistName: "Cameron"
        };
      const response = await request(app)
      .post("/tracker/individuals/420")
      .send(newIndividual)
      .then(async (response) => {
        console.log(response.body)
          expect(response.body.animal_id).toBe(newIndividual.animalID)
          expect(response.body.nickname).toBe(newIndividual.nickname)
          expect(response.body.common_name).toBe(newIndividual.commonName)
          expect(response.body.scientist_name).toBe(newIndividual.scientistName)     
    });
  });
})

//Testing PUT request for Individuals Table
describe('PUT /tracker/individuals/:animal_id', () => {
    it('should update an individual', async () => {
  
      const updatedIndividual = {
            animalID: 420,
            nickname: "Boo",
            commonName: "eagle",
            scientistName: "Cameron"
      };
  
      
      const response = await request(app)
        .put('/tracker/individuals/420') 
        .send(updatedIndividual);
  
      expect(response.statusCode).toBe(200);
      expect(response.body.common_name).toBe(updatedIndividual.commonName); 
    });
  });

//Testing DELETE Request from Individuals Table
 describe('DELETE /tracker/individuals/420', () => {
    it("should delete animalID 420", async () => {
        await request(app)
            .delete("/tracker/individuals/420")
            .expect(200)
    })

 });
