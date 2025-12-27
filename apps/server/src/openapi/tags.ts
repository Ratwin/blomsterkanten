// export as const
export const ResourceTags = {
  // Dropzone: 'Dropzone',
} as const;

export type ResourceType = keyof typeof ResourceTags;
