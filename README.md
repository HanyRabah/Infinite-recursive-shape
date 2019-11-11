
# Infinite recursive shape

The idea is to create a recursive function to draw boxes inside each other in array from 3 different variables
`width` `height` and `padding` 

## Technology used 
I used `create react app` for the UI and I used `Jest` for testing the function and `travis` for CI/CD
I created 2 function for draw function in `draw.js` file I used different techniques for that one is recursion and the second solution is AB|CD or mirroring the array.

## Installation
cd project directory, and run:

`yarn && yarn start`
  
## Testing
Test only run on the draw() function matching data from `JSON` file to check the value given toward the result of the function.

I created the function inside an `object` so I can run deep testing on it as recursive function calls itself directly it is not possible to spy on those calls since they refer directly to the function.

In order to spy on recursive calls they must refer to functions that can be spied on. Fortunately, this is possible by two ways either by wrapping the function inside object or by importing a recursive function back into its own module and use the imported function for the recursion

so I chooses the first option to run the jest.

to run the testing 
`yarn test`

## First Solution

The first solution I used Array.from to get the  `width` of the array and the `height` of the array and then create every row in the array separately.

so the idea in any recursion function is to put the base case so my main base case is to check if the width and height less than or equal to zero then stop the function.

then checking on the height if it less than 2 draw the last row

then I have 2 returns after than the main one which will have the recursion after subtracting the padding after adding 2 to it to count the edges.

the the second return is happen only to draw the last box inside the array.
you can see more details on the `draw.js` file.


### The Big O 


## Second Solution

AB | CD  which respects the quadrants

The Idea is to split the box to 4 parts ( A,B,C,D )
and to start drawing every side alone.
Like below drawing
by using only the left upper A quadrant.
````
1 1 1 1 1 1 1 1 1 1 . . . . . . . . . .
2 0 0 0 0 0 0 0 0 0 . . . . . . . . . .
2 0 0 0 0 0 0 0 0 0 . . . . . . . . . .
2 0 0 1 1 1 1 1 1 1 . . . . . . . . . .
2 0 0 2 0 0 0 0 0 0 . . . . . . . . . .
2 0 0 2 0 0 0 0 0 0 . . . . . . . . . .
2 0 0 2 0 0 1 1 1 1 . . . . . . . . . .
2 0 0 2 0 0 2 0 0 0 . . . . . . . . . .
2 0 0 2 0 0 2 0 0 0 . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
````

All other index position are calculated, if greater than the half of  `width`  or  `height`. Then it takes the count from the right/bottom side.

The final calculation is done with a delta of the size of a line (1) and the half of the padding. For getting if a line/dot is found, you could take the remainder and check if the value is zero and if the direction is right.

A small look to the result of direction check
```
row <= col // 1
col <= row // 2
```
shows,
```
1 1 1 1 1 1 1 1 1 1 . . . . . . . . . .
2 1 1 1 1 1 1 1 1 1 . . . . . . . . . .
2 2 1 1 1 1 1 1 1 1 . . . . . . . . . .
2 2 2 1 1 1 1 1 1 1 . . . . . . . . . .
2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
2 2 2 2 2 1 1 1 1 1 . . . . . . . . . .
2 2 2 2 2 2 1 1 1 1 . . . . . . . . . .
2 2 2 2 2 2 2 1 1 1 . . . . . . . . . .
2 2 2 2 2 2 2 2 1 1 . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . 
```

which is exactly the shape, we need to get the right values which are like shining from the center of the array.
Together with the pattern check and the direction check
```
if (row % delta === 0 && row <= col) return 1;
if (col % delta === 0 && col <= row) return 2;
```

### Screen shots 

1.  `Width: 20, Height:40, padding: 6)`

![](https://lh3.googleusercontent.com/QmwcjSKo9bmjIohy8TcKbxU4w-PL1mQUpNnE5Gey422bUrE8lo9ghRnB4ZO5bRVdHet3wsPISYOhmQ=s500)

2.  `(Width: 60, Height:60, padding: 10)`

![](https://lh3.googleusercontent.com/qX4C23dp9LGFNUF53IZ6JmQA2OcJhFp8EwprwuamopsSUENT8odO1JQX1LGAmMGxgpAEISq1TAyNzg=s600)

4.  `(Width: 80, Height:100, padding: 20)`

![](https://lh3.googleusercontent.com/WgT8WJ89i1tTRXUyISyRahAx6ZNCJD_BJ8skDSgqfvR5rqewbhV_xtY82dmj5f0MvCe3nYaCuC4pRQ=s720)
