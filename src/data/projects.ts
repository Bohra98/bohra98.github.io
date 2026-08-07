import type { ProjectEntry } from './types'

export const projects: ProjectEntry[] = [
  {
    id: 'chaptertutor',
    name: 'ChapterTutor',
    company: 'chaptertutor.com',
    period: 'Live',
    emoji: '🎬',
    featured: true,
    description:
      'An end-to-end AI learning platform, live at chaptertutor.com, that transforms textbook PDFs into narrated educational videos through a five-stage AI pipeline.',
    highlights: [
      'Shipped an end-to-end AI learning platform, live at chaptertutor.com, that transforms textbooks into narrated educational videos, built with OpenAI, FastAPI, React, and Google Cloud (GKE).',
      'Designed a five-stage AI pipeline — chapter extraction, topic detection, slide generation, narration, video composition — turning raw textbook PDFs into finished videos.',
      'Reduced OpenAI API call volume by optimizing prompts for consistent, structured outputs.',
      'Engineered PDF-understanding workflows supporting textbooks, reference books, and varied document formats.',
    ],
    tech: ['OpenAI API', 'FastAPI', 'React', 'Google Cloud (GKE)'],
    challenge:
      'Turning a raw textbook PDF into a finished narrated video means chaining several different AI capabilities — extraction, understanding, generation, speech, video — into one reliable pipeline, not just calling a single model.',
    decision:
      'Designed a five-stage pipeline — chapter extraction, topic detection, slide generation, narration, and video composition — with prompts optimized for consistent, structured outputs to keep OpenAI API call volume down.',
    result:
      'ChapterTutor is live at chaptertutor.com, converting textbook PDFs across multiple formats into finished narrated educational videos end to end.',
    metrics: [{ label: 'Pipeline stages', value: '5' }],
    architecture: [
      'Chapter Extraction',
      'Topic Detection',
      'Slide Generation',
      'Narration (TTS)',
      'Video Composition',
    ],
  },
  {
    id: 'phutri',
    name: 'Phutri',
    company: 'phutri.com',
    period: 'In Development',
    emoji: '👗',
    featured: false,
    description:
      'An AI-powered personal styling platform combining Vision LLMs and vector search for wardrobe understanding and outfit recommendations.',
    highlights: [
      'Built an AI-powered personal styling platform combining Vision LLMs, FastAPI, and vector search.',
      'Designed wardrobe embedding and retrieval workflows using pgvector for style-similarity search.',
      'Built AI outfit-recommendation pipelines using Gemini Vision and multimodal reasoning.',
      'Deployed production-ready APIs on Railway and Vercel.',
    ],
    tech: ['FastAPI', 'Gemini Vision', 'pgvector', 'Railway', 'Vercel'],
    challenge:
      "Recommending outfits well requires understanding a user's actual wardrobe visually and matching pieces by style similarity, not just tags or categories — a plain keyword search over clothing items doesn't capture that.",
    decision:
      'Used Gemini Vision for multimodal garment understanding and stored wardrobe items as embeddings in pgvector, so outfit recommendations come from style-similarity search over the vector space instead of rigid category matching.',
    result:
      'APIs are deployed on Railway and Vercel, with wardrobe embedding, retrieval, and outfit-recommendation pipelines running end to end as the platform continues development.',
    metrics: [],
    architecture: ['Vision LLM (Gemini)', 'Wardrobe Embeddings (pgvector)', 'FastAPI Backend', 'Recommendation Engine'],
  },
]
