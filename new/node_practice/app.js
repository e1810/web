'use strict';

const mp = new Map();
mp.set(0, 0);
mp.set(1, 1);

function fib(n){
	if(!mp.has(n)) mp.set(n, fib(n-2)+fib(n-1));
	return mp.get(n);
}

const n = process.argv[2] || 0;
console.log(fib(n));
