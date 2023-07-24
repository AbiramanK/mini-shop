import Toast, {ToastType} from 'react-native-toast-message';

export interface ShowToastInterface {
  type: ToastType;
  text1?: string;
  text2?: string;
}

function showToast({type, text1, text2}: ShowToastInterface) {
  Toast?.show({
    type,
    text1,
    text2,
  });
}

export {showToast};
