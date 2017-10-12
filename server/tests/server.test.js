const expect = require('expect');
const supertest = require('supertest');

const app = require('./../server/');
const {Todo} = require('./../models/todo');

describe('Post /todos', ()=>{
    it('should create a new todo', (done)=>{
        var text = 'Test todo text';

        request(app).post('/todos').send({
            text
        }.expect(200)
        .expect((res.body.text).toBe(text))
    );
    });
});