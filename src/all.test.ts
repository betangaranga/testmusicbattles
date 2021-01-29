import mapValue from './app';
describe('Testing all possible scenarios', () => { 
    let i = 1;
    while(i < 100){
      it('multiple of 3 should be Music', () => {
        const consoleLog = console.log;
        console.log = jest.fn();
        if(i%3 == 0){

        expect(mapValue(i)).toBe("Music");
        }
      });
    
        it('multiple of 5 should be IT', () => {
        const consoleLog = console.log;
        console.log = jest.fn();
        if(i%5 == 0){
          expect(mapValue(i)).toBe("IT");
        }
        });
      
        it('multiple of 3 or 5 should be Musical', () => {
        const consoleLog = console.log;
        console.log = jest.fn();
          if(i%15 == 0){
            expect(mapValue(i)).toBe("Musical");
          }
        });
     
       it('Others should be the number itself', () => {
        const consoleLog = console.log;
        console.log = jest.fn();
        if(i%3!=0 && i%5 != 0 && i%15 != 0){
            expect(mapValue(i)).toBe(i);
        }
          });
      
      i++;
    }
});
