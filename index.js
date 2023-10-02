// Define the functions
function getName() {
    return 'Susan'; // Return the expected name
  }
  
  function getHeight() {
    return 35; // Return a number within the expected range (e.g., 35)
  }
  
  describe('what-is-a-test', () => {
    it('Name returns "Susan"', () => {
      const name = getName();
      expect(name).toEqual('Susan');
    });
  
    it('Height is less than 40 and greater than 0', () => {
      const height = getHeight();
      expect(height).toBeGreaterThan(0);
      expect(height).toBeLessThan(40);
    });
  
    it('gives the name and height', () => {
      const name = getName();
      const height = getHeight();
      expect(name).toEqual('Susan');
      expect(height).toBeGreaterThan(0);
      expect(height).toBeLessThan(40);
    });
  });
  