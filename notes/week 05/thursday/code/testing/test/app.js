var chai = require('chai');
var AppModule = require('../app');
var assert = chai.assert;
var expect = chai.expect;
var sum = AppModule.sum;
var sayHello = AppModule.sayHello;

describe('App Module', function(){
  describe('#sum()', function(){
    it('should return the sum of two numbers', function(){
      assert.equal(sum(2, 2), 4);
      assert.equal(sum(-2, -2), -4);
      assert.equal(sum(5, -2), 3);
    });

    it('should throw an error if we did not give it enough paramaters', function(){
      assert.throws(function(){
        sum(2);
      }, Error);
    });
  })

  describe('#sayHello()', function(){
    it('should return a string with a wonderful greeting', function(){
      assert.equal(sayHello('cookies'), 'Hello to you, cookies, you good person!');
    });
  })
});
