import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import YoutubeThumbnails from "@/pages/youtube-thumbnails";
import Posters from "@/pages/posters";
import ProfilePictures from "@/pages/profile-pictures";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/youtube-thumbnails" component={YoutubeThumbnails} />
      <Route path="/posters" component={Posters} />
      <Route path="/profile-pictures" component={ProfilePictures} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
