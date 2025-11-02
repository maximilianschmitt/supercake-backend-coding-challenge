function checkEnv<T extends string>(requiredVariables: T[]): Record<T, string> {
  const missingVariables = requiredVariables.filter(
    (envVar) => !process.env[envVar],
  );

  if (missingVariables.length > 0) {
    throw new Error(
      `Missing environment variables: ${missingVariables.join(", ")}`,
    );
  }

  return requiredVariables.reduce(
    (acc, envVar) => {
      acc[envVar] = process.env[envVar] as string;
      return acc;
    },
    {} as Record<T, string>,
  );
}

export default checkEnv;
