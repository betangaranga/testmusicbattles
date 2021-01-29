import mapValue from './app';
let i = 1;
let multiplesThree = []
let multiplesFive = []
let multiplesBoth = []
let others = []
while(i<100){
    if(i%3==0){
        multiplesThree.push(i);
    }
    if(i%5==0){
        multiplesFive.push(i);
    }
    if(i%15==0){
        multiplesBoth.push(i);
    }
    else {
        others.push(i);
    }
    i++;

}
[
    { input: multiplesThree, output: "Music"},
    { input: multiplesFive, output: "IT"},
    { input: multiplesBoth, output: "Musical"},
    { input: others, output: "number"},

  ]
  .forEach(({ input, output }) => {
    it(`works correctly for ${input}`, () => {
      // ...
  
      expect(mapValue).toBe(output);
    });
  })
/*describe('Unit testing', () => { 
    let i = 1;
    while(i<100){
    if(i%3==0){
      it('multiple of 3 should be Music', () => {
        expect(mapValue(i)).toBe("Music");
      });
    }
    if(i%5==0){
        it('multiple of 5 should be IT', () => {
          expect(mapValue(i)).toBe("IT");
        });
      }
      if(i%15==0){
        it('multiple of 3 or 5 should be Musical', () => {
          expect(mapValue(i)).toBe("Musical");
        });
      }
      else{
        it('Others should be the number itself', () => {
            expect(mapValue(i)).toBe(i);
          });
      }
      i++;
    }
});*/
