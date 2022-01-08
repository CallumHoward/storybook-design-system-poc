/**
 * Helper to set markdown (or plain text) formatted description for Stories.
 * Intended to be spread into a `ComponentStoryObj` in a
 * `<component>.stories.tsx` file.
 */
export const storyDoc = (markdownText: string) => ({
  parameters: {
    docs: {
      description: {
        story: markdownText,
      },
    },
  },
});
