/* eslint-disable no-console */
import baseClient from "part:@sanity/base/client";
import ConfigStore from "configstore";
const authToken = new ConfigStore("sanity", {}, { globalConfigPath: true }).get(
  "authToken"
);
const client = baseClient.config({ token: authToken });

export default client;
