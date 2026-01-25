import MainNavLeft from "./components/MainNavLeft";
import MainContentCenter from "./components/MainContentCenter";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNavLeft />
      <MainContentCenter />
    </div>
  );
};

export default App;
