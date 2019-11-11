
# Infinite recursive shape

The idea is to create a recursive function to draw boxes inside each other in array from 3 different variables
`width` `height` and `padding` 

## Installation
In the project directory, you can run:

`yarn && yarn start`
  
  ## For Testing
  Test only run on the draw() function matching data from `JSON` file to check the result of the function.

### `yarn test`

## First Solution

The first solution I am using Array.from to create every row in the array 
by checking one by one 

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

![20,40,6](https://picasaweb.google.com/112928014644094121650/6757962420754464129#6757962427490589970)

2.  `(Width: 60, Height:60, padding: 10)`

![60,60,10](https://picasaweb.google.com/112928014644094121650/6757962693717715745#6757962691239103906)

4.  `(Width: 80, Height:100, padding: 20)`

![80,100,20](https://picasaweb.google.com/112928014644094121650/6757962889374425153#6757962890808696818)