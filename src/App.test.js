import React from 'react';
import ReactDOM from 'react-dom';
import draw from './draw'
import data from './test.data'

test('draw function exists', () => {
  expect(draw.init).toBeDefined();
});

data.forEach(function(test){
  it(test.input + ' to give correct result',  () => {
    const mock = jest.spyOn(draw, 'init');
    var input = test.input.split(',');
    const result = draw.init(Number(input[0]),Number(input[1]),Number(input[2]));
    expect(result).toEqual(JSON.parse(test.pixelArrayJson));
    mock.mockRestore();
    }
  )
});
