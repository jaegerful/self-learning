export default {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": "svelte-jester"
  },
  "moduleFileExtensions": ["js", "svelte"],
  testEnvironment: "jsdom",
  "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
}