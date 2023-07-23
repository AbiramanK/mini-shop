type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  Home: HomeBottomTabParamList;
};

type ProductStackParamList = {
  ProductHome: undefined;
  ProductDetail: {
    pet: string;
  };
};

type HomeBottomTabParamList = {
  About: undefined;
  Product: ProductStackParamList;
};

export {
  type RootStackParamList,
  type HomeBottomTabParamList,
  type ProductStackParamList,
};
