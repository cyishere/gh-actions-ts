import { getInput } from "@actions/core";
import { context } from "@actions/github";

type GithubContext = typeof context;

const inputName = getInput("name");

const greet = (name: string, repoUrl?: string) => {
  console.log(`Hello ${name}! Your are running a GH Action in ${repoUrl}`);
};

greet(inputName);
