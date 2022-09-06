import { TypePolicies } from "@apollo/client";
export const typePolicies: TypePolicies = {
  Launch: {
    keyFields: ["flight_number"],
  },
};
