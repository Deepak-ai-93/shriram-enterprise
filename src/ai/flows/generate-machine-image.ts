'use server';

/**
 * @fileOverview A flow to generate appealing placeholder images for T-shirt printing machines.
 *
 * - generateMachineImage - A function that generates an image for a T-shirt printing machine.
 * - GenerateMachineImageInput - The input type for the generateMachineImage function.
 * - GenerateMachineImageOutput - The return type for the generateMachineImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMachineImageInputSchema = z.object({
  machineType: z.string().describe('The type of T-shirt printing machine.'),
});
export type GenerateMachineImageInput = z.infer<typeof GenerateMachineImageInputSchema>;

const GenerateMachineImageOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated image.'),
});
export type GenerateMachineImageOutput = z.infer<typeof GenerateMachineImageOutputSchema>;

export async function generateMachineImage(input: GenerateMachineImageInput): Promise<GenerateMachineImageOutput> {
  return generateMachineImageFlow(input);
}

const generateMachineImagePrompt = ai.definePrompt({
  name: 'generateMachineImagePrompt',
  input: {schema: GenerateMachineImageInputSchema},
  output: {schema: GenerateMachineImageOutputSchema},
  prompt: `Generate a visually appealing image of a T-shirt printing machine of type: {{{machineType}}}. The image should be suitable for use as a placeholder in a product showcase. Focus on making the machine look modern, high-quality, and professional.`,
});

const generateMachineImageFlow = ai.defineFlow(
  {
    name: 'generateMachineImageFlow',
    inputSchema: GenerateMachineImageInputSchema,
    outputSchema: GenerateMachineImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: await generateMachineImagePrompt(input),
    });
    return {imageUrl: media.url!};
  }
);
