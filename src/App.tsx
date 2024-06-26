import {
  Provider as SpectrumProvider,
  defaultTheme,
} from "@adobe/react-spectrum";
import AppRoutes from "./AppRoutes";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SpectrumProvider theme={defaultTheme}>
        <AppRoutes />
      </SpectrumProvider>
    </ReduxProvider>
  );
};

export default App;
