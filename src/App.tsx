import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { QuizProvider } from "./context/QuizProvider";

import MainLayout from "./layouts/MainLayout";
import QuizPage from "./pages/Quiz/QuizPage";
import NoPage from "./pages/NoPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QuizProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<QuizPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </QueryClientProvider>
  );
}

export default App;
