import { HomeArea } from "./areas/home.area.ts";
import { App } from "https://deno.land/x/alosaur/mod.ts";

const app = new App({
  areas: [HomeArea],
  logging: true,
});

app.listen();