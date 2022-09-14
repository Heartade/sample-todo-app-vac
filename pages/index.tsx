import type { NextPage } from "next";
import { TodoContextProvider } from "contexts/TodoContext";
import RegisterItem from "components/RegisterItem";
import ListView from "components/ListView";

const Home: NextPage = () => {
  return (
    <TodoContextProvider>
      <div className={"container mx-auto px-4 py-8"}>
        <h1 className={"text-4xl font-bold mb-4"}>Todo App</h1>
        <RegisterItem />
        <div className={"container mx-auto px-4 py-8"}>
          <div className="flex flex-col gap-4 mt-8">
            <ListView />
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default Home;
