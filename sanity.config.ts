import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import project from "./sanity/schemas/project-schema";
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'ejcm8mzo',
  dataset: 'production',
  title: 'Ogogo Blog',
  apiVersion: '2023-06-17',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
})



export default config;