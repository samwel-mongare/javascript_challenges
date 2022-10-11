// https://www.hackerrank.com/challenges/magic-square-forming/problem?isFullScreen=true

// We define a magic square to be an matrix of distinct positive integers from to where the sum of any row, column, or diagonal of length

// is always equal to the same number: the magic constant.

// You will be given a
// matrix of integers in the inclusive range . We can convert any digit to any other digit in the range at cost of . Given

// , convert it into a magic square at minimal cost. Print this cost on a new line.

// Note: The resulting magic square must contain distinct integers in the inclusive range
// .

// solution
function formingMagicSquare(s) {
    
     const squares = ['618753294', '816357492', '834159672', '438951276', '672159834', '276951438',                          '294753618', '492357816'];
     
    let min = 100;
    let cost = (s, squares) => {

        return [...s.map(value => value.join('')).join('')].reduce((target, item, index) => {
            target += Math.abs(+item - +squares[index])

            return target;
        }, 0)
    };

    squares.forEach((item, index) => {
        let value = cost(s, squares[index]);

        (value < min) && (min = value);
    });

    return min;

}
