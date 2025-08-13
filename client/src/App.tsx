import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import Welcome from "./pages/Welcome";
import Onboarding from "./pages/Onboarding";
import Analysis from "./pages/Analysis";
import Results from "./pages/Results";
import Diet from "./pages/Diet";
import Schedule from "./pages/Schedule";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Welcome />} />
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="analysis" element={<Analysis />} />
            <Route path="results" element={<Results />} />
            <Route path="diet" element={<Diet />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="progress" element={<Progress />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
