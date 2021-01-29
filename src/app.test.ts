import mapValue from './app';
describe('Unit testing', () => { 
    let i = 1;
    while(i < 100){
      it('multiple of 3 should be Music', () => {
        if(i%3 == 0){

        expect(mapValue(i)).toBe("Music");
        }
      });
    
        it('multiple of 5 should be IT', () => {
        if(i%5 == 0){
          expect(mapValue(i)).toBe("IT");
        }
        });
      
        it('multiple of 3 or 5 should be Musical', () => {
          if(i%15 == 0){
            expect(mapValue(i)).toBe("Musical");
          }
        });
     
       it('Others should be the number itself', () => {
        if(i%3!=0 && i%5 != 0 && i%15 != 0){
            expect(mapValue(i)).toBe(i);
        }
          });
      
      i++;
    }
});
