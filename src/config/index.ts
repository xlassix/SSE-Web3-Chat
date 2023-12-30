import dotenv from "dotenv";
import Joi from "joi";

const env = process.env.NODE_ENV || "development";
dotenv.config({ path: env === "development" ? ".env.dev" : ".env" });

const baseConfig = {
  env,
  port: process.env.PORT_NUM,
  environment: process.env.NODE_ENV,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: "1d",
  },
};

const envVarsSchema = Joi.object({
  port: Joi.number().default(3000),
  environment: Joi.string(),
}).unknown();

const { value: envVars, error } = envVarsSchema.validate(baseConfig);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default envVars as typeof baseConfig;
