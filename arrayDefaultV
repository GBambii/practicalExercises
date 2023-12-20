function prefill(n, v) {
  if (!Number.isInteger(Number(n)) || Number(n) < 0) {
    throw new TypeError(`${n} is invalid`);
  }

  return Array.from({ length: Number(n) }, () => v);
}
console.log(prefill(3, 1));         
console.log(prefill(2, "abc"));      
console.log(prefill("1", 1));        
console.log(prefill(3, prefill(2, '2d')));
console.log(prefill("xyz", 1));
