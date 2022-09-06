import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // schema: " https://spacexdata.herokuapp.com/graphql",
  documents: "./src/**/*.{ts,tsx}",

  generates: {
    "src/generated/graphql.tsx": {
      schema: " https://spacexdata.herokuapp.com/graphql",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "src/generated/local-graphql.tsx": {
      schema: "./src/data/schema/local-schema.ts",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
