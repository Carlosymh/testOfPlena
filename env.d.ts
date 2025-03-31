declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MONGODB_URI: string;
        SQUEDULES_FILE_PATH: string
      }
    }
  }
  
  export {};