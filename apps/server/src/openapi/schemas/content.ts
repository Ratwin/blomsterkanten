/**
 * Wrapper for OpenAPI response content with description.
 * @param content A content object.
 * @param description A description of the response.
 * @returns An object containing content and description.
 */
export const content = <T>(content: T, description: string) => {
  return {
    content,
    description,
  };
};

/**
 * Creates a standard error response structure.
 * @param title The title of the error.
 * @param details Optional detailed error message.
 * @returns An object representing the error response.
 */
export const error = (title: string, details?: string) => {
  return {
    title,
    details,
  };
};
