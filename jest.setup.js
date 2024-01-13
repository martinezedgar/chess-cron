// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';
const mockAsyncStorage = require('@react-native-async-storage/async-storage/jest/async-storage-mock');

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native-sound', () => {
    class SoundMock {
        constructor(path, type, callback) {}
      }
    
      SoundMock.prototype.setVolume = jest.fn();
      SoundMock.prototype.setNumberOfLoops = jest.fn();
      SoundMock.prototype.play = jest.fn();
      SoundMock.prototype.stop = jest.fn();
      SoundMock.setCategory = jest.fn();
    
      return SoundMock;
})
