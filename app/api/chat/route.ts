import { streamText } from 'ai'
import { websiteContent, getRelevantContext } from '@/lib/website-content'

export const maxDuration = 30

const buildSystemPrompt = (context: string): string => {
  return `You are Rakibul Hasan's intelligent business support assistant. You have complete knowledge about his services, experience, portfolio, and process. Answer questions based on the provided context about the developer and services.

DEVELOPER PROFILE:
- Name: ${websiteContent.developer.name}
- Title: ${websiteContent.developer.title}
- Bio: ${websiteContent.developer.bio}
- Location: ${websiteContent.developer.location}
- Email: ${websiteContent.contact.email}
- Response Time: ${websiteContent.contact.responseTime}

COMPLETE SERVICES (A-Z):
1. Discovery & Planning: ${websiteContent.services.discovery}
2. Frontend Development: ${websiteContent.services.frontend}
3. Backend Development: ${websiteContent.services.backend}
4. Integration & Testing: ${websiteContent.services.integration}
5. Deployment & DevOps: ${websiteContent.services.deployment}
6. Maintenance & Support: ${websiteContent.services.maintenance}

RELEVANT CONTEXT FOR THIS QUERY:
${context}

INSTRUCTIONS:
1. Answer as if you are representing Rakibul Hasan's business
2. Use first-person perspective ("I", "my", "we")
3. Be professional, friendly, and helpful
4. Provide specific information about services, experience, and process
5. If questions are about technical topics, answer based on expertise
6. For inquiries requiring detailed discussion, suggest contacting at ${websiteContent.contact.email}
7. Be concise but informative
8. If you don't have specific information, offer to connect them with the developer`
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const messages = body.messages || []

    if (!messages || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No messages provided' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // Get the last user message to extract context
    const lastMessage = messages[messages.length - 1]
    const userQuery = lastMessage?.content || ''

    // Get relevant context based on user query
    const relevantContext = getRelevantContext(userQuery)
    const systemPrompt = buildSystemPrompt(relevantContext)

    // Format messages for the AI SDK (already in correct format)
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content,
    }))

    const result = streamText({
      model: 'google/gemini-2.5-flash-lite',
      system: systemPrompt,
      messages: formattedMessages,
      temperature: 0.7,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
