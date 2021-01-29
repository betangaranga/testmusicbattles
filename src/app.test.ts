import mapValue from './app';
describe('Testing special test cases only', () => { 
      it('3 should output  Music', () => {

        expect(mapValue(3)).toBe("Music");
        
      });
      it('9 should output  Music', () => {
       
        expect(mapValue(9)).toBe("Music");
        
      });
    
        it('5 should output IT', () => {
        
          expect(mapValue(5)).toBe("IT");
        
        });
        it('50 should output IT', () => {
            
              expect(mapValue(50)).toBe("IT");
            
            });
        it('15 should output Musical', () => {
        
            expect(mapValue(15)).toBe("Musical");
          
        });
        it('45 should output Musical', () => {
                expect(mapValue(45)).toBe("Musical");
              
            });
     
       it('1 should output the number itself', () => {

            expect(mapValue(1)).toBe(1);
        
          });
});
