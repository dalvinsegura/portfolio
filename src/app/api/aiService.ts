import { getCachedResponse, setCachedResponse } from './cache';
import systemPrompt from './systemPrompt';

export async function getAIResponse(userPrompt: string): Promise<string> {
  const cachedResponse = await getCachedResponse(userPrompt);  
  if (cachedResponse) return cachedResponse;
    
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [
        { role: 'system', content: systemPrompt() },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.6,
      max_tokens: 256,
      top_p: 0.8,
      frequency_penalty: 0.1,
      presence_penalty: 0.0
    }),
  });

  const data = await response.json();
  
  const aiResponse = data.choices[0].message.content;

  await setCachedResponse(userPrompt, aiResponse);
  return aiResponse;
}