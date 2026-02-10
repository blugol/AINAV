
import {
    Image, Video, Music, Layout, MessageSquare, Code,
    FileText, Box, PenTool, Globe, Layers, BookOpen
} from 'lucide-react';

export const categories = [
    { id: 'image', name: 'Image', icon: 'Image' },
    { id: 'video', name: 'Video', icon: 'Video' },
    { id: 'audio', name: 'Music/Audio', icon: 'Music' },
    { id: 'documents', name: 'Documents', icon: 'BookOpen' },
    { id: 'editing', name: 'Editing', icon: 'Layers' },
    { id: 'uiux', name: 'UI/UX', icon: 'Layout' },
    { id: 'chat', name: 'Chat', icon: 'MessageSquare' },
    { id: 'coding', name: 'Coding', icon: 'Code' },
    { id: 'writing', name: 'Writing', icon: 'FileText' },
    { id: '3d', name: '3D/VR', icon: 'Box' },
    { id: 'productivity', name: 'Productivity', icon: 'PenTool' },
    { id: 'etc', name: 'Browse/Etc', icon: 'Globe' },
];

export const tools = [
    // --- Image Generation ---
    {
        id: 101,
        name: 'Midjourney',
        category: 'image',
        pricing: 'Paid',
        link: 'https://www.midjourney.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=midjourney.com&sz=128',
        description: 'Advanced AI art generator known for its high-quality, artistic, and photorealistic image synthesis from text prompts.',
        features: ['Text-to-Image', 'Image-to-Image', 'Inpainting', 'High Resolution'],
        description_ko: '텍스트 프롬프트를 통해 고품질의 예술적이고 사실적인 이미지를 생성하는 고급 AI 아트 생성기입니다.',
        features_ko: ['텍스트-이미지 변환', '이미지-이미지 변환', '인페인팅', '고해상도']
    },
    {
        id: 102,
        name: 'DALL-E 3',
        category: 'image',
        pricing: 'Freemium',
        link: 'https://openai.com/dall-e-3',
        iconUrl: 'https://www.google.com/s2/favicons?domain=openai.com&sz=128',
        description: 'OpenAI’s premier image generation model integrated with ChatGPT for conversational prompting and precise control.',
        features: ['Conversational Prompting', 'Integration with ChatGPT', 'High Fidelity'],
        description_ko: 'ChatGPT와 통합되어 대화형 프롬프트와 정밀한 제어가 가능한 OpenAI의 프리미어 이미지 생성 모델입니다.',
        features_ko: ['대화형 프롬프트', 'ChatGPT 통합', '고화질']
    },
    {
        id: 103,
        name: 'Stable Diffusion',
        category: 'image',
        pricing: 'Free',
        link: 'https://stability.ai/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=stability.ai&sz=128',
        description: 'Open-source image generation model offering unparalleled control and flexibility for developers and artists.',
        features: ['Open Source', 'Local Execution', 'Fine-tuning', 'ControlNet Support'],
        description_ko: '개발자와 아티스트에게 최고의 제어권과 유연성을 제공하는 오픈 소스 이미지 생성 모델입니다.',
        features_ko: ['오픈 소스', '로컬 실행', '파인 튜닝', 'ControlNet 지원']
    },
    {
        id: 104,
        name: 'Leonardo.ai',
        category: 'image',
        pricing: 'Freemium',
        link: 'https://leonardo.ai/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=leonardo.ai&sz=128',
        description: 'A comprehensive creative suite for generating game assets, concept art, and detailed illustrations with style consistency.',
        features: ['Game Asset Gen', 'Model Training', 'Canvas Editor', 'Style Consistency'],
        description_ko: '게임 자산, 컨셉 아트 및 스타일 일관성을 갖춘 상세한 일러스트레이션을 생성하기 위한 포괄적인 크리에이티브 제품군입니다.',
        features_ko: ['게임 자산 생성', '모델 학습', '캔버스 에디터', '스타일 일관성']
    },
    {
        id: 105,
        name: 'Ideogram',
        category: 'image',
        pricing: 'Freemium',
        link: 'https://ideogram.ai/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=ideogram.ai&sz=128',
        description: 'Specialized in generating images with coherent and legible typography, logos, and graphic designs.',
        features: ['Typography Generation', 'Logo Design', 'Poster Creation']
    },
    {
        id: 106,
        name: 'Canva Magic Media',
        category: 'image',
        pricing: 'Freemium',
        link: 'https://www.canva.com/ai-image-generator/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=canva.com&sz=128',
        description: 'Easy-to-use AI image generation integrated directly into the Canva design workflow.',
        features: ['Integration with Design', 'Text-to-Image', 'Magic Edit']
    },
    {
        id: 107,
        name: 'Adobe Firefly',
        category: 'image',
        pricing: 'Freemium',
        link: 'https://firefly.adobe.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=adobe.com&sz=128',
        description: 'Adobe’s family of creative generative AI models, designed to be safe for commercial use.',
        features: ['Commercial Safe', 'Generative Fill', 'Text Effects', 'Vector Recolor'],
        description_ko: '상업적 사용에 안전하도록 설계된 Adobe의 크리에이티브 생성형 AI 모델 제품군입니다.',
        features_ko: ['상업적 이용 가능', '생성형 채우기', '텍스트 효과', '벡터 재색상화']
    },

    // --- Video Generation ---
    {
        id: 201,
        name: 'Kling AI',
        category: 'video',
        pricing: 'Freemium',
        link: 'https://kling.kuaishou.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=kling.kuaishou.com&sz=128',
        description: 'Next-generation video generation model capable of creating high-definition, long-duration clips with realistic motion.',
        features: ['High Definition', 'Long Duration', 'Realistic Motion'],
        description_ko: '사실적인 움직임과 고해상도, 긴 길이의 영상을 생성할 수 있는 차세대 비디오 생성 모델입니다.',
        features_ko: ['고화질', '긴 재생 시간', '사실적인 모션']
    },
    {
        id: 202,
        name: 'Sora',
        category: 'video',
        pricing: 'Paid',
        link: 'https://openai.com/sora',
        iconUrl: 'https://www.google.com/s2/favicons?domain=openai.com&sz=128',
        description: 'OpenAI’s text-to-video model that creates realistic and imaginative scenes from text instructions.',
        features: ['Text-to-Video', 'Complex Scenes', 'Physical World Simulation'],
        description_ko: '텍스트 지침만으로 사실적이고 상상력 넘치는 장면을 생성할 수 있는 OpenAI의 텍스트-비디오 모델입니다.',
        features_ko: ['텍스트-비디오 변환', '복잡한 장면 생성', '물리 세계 시뮬레이션']
    },
    {
        id: 203,
        name: 'Runway Gen-3',
        category: 'video',
        pricing: 'Freemium',
        link: 'https://runwayml.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=runwayml.com&sz=128',
        description: 'A leading tool for professional video synthesis, offering advanced control over camera motion and style.',
        features: ['Video Synthesis', 'Motion Brush', 'Gen-2/Gen-3 Alpha'],
        description_ko: '카메라 움직임과 스타일에 대한 고급 제어 기능을 제공하는 전문 비디오 합성 도구입니다.',
        features_ko: ['비디오 합성', '모션 브러시', 'Gen-2/Gen-3 Alpha']
    },
    {
        id: 204,
        name: 'Pika',
        category: 'video',
        pricing: 'Freemium',
        link: 'https://pika.art/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=pika.art&sz=128',
        description: 'An idea-to-video platform that lets you generate and edit videos in 3D animation, anime, or cinematic styles.',
        features: ['Lip Sync', 'Video Inpainting', 'Style Transfer']
    },
    {
        id: 205,
        name: 'Luma Dream Machine',
        category: 'video',
        pricing: 'Freemium',
        link: 'https://lumalabs.ai/dream-machine',
        iconUrl: 'https://www.google.com/s2/favicons?domain=lumalabs.ai&sz=128',
        description: 'Fast and high-quality video generation model built on a comprehensive universal world model.',
        features: ['Fast Generation', 'Realistic Physics', 'Start/End Frame Control']
    },
    {
        id: 206,
        name: 'HeyGen',
        category: 'video',
        pricing: 'Freemium',
        link: 'https://www.heygen.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=heygen.com&sz=128',
        description: 'AI video generation platform for creating professional business videos with realistic AI avatars.',
        features: ['AI Avatars', 'Text-to-Speech', 'Video Translation'],
        description_ko: '사실적인 AI 아바타를 활용하여 전문적인 비즈니스 비디오를 제작할 수 있는 AI 비디오 생성 플랫폼입니다.',
        features_ko: ['AI 아바타', '텍스트-음성 변환', '비디오 번역']
    },

    // --- Audio/Music ---
    {
        id: 301,
        name: 'Suno',
        category: 'audio',
        pricing: 'Freemium',
        link: 'https://suno.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=suno.com&sz=128',
        description: 'Revolutionary AI music generation tool that creates full songs with vocals and lyrics from simple prompts.',
        features: ['Full Song Generation', 'Lyrics & Vocals', 'Multi-Genre Support'],
        description_ko: '간단한 프롬프트만으로 보컬과 가사가 포함된 전체 노래를 생성하는 혁신적인 AI 음악 생성 도구입니다.',
        features_ko: ['전곡 생성', '가사 및 보컬', '다양한 장르 지원']
    },
    {
        id: 302,
        name: 'ElevenLabs',
        category: 'audio',
        pricing: 'Freemium',
        link: 'https://elevenlabs.io/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=128',
        description: 'The industry standard for AI voice synthesis, offering ultra-realistic text-to-speech and voice cloning.',
        features: ['Voice Cloning', 'Text-to-Speech', 'Dubbing Studio'],
        description_ko: '초현실적인 텍스트 음성 변환 및 음성 복제 기술을 제공하는 AI 음성 합성의 업계 표준입니다.',
        features_ko: ['음성 복제', '텍스트-음성 변환', '더빙 스튜디오']
    },
    {
        id: 303,
        name: 'Udio',
        category: 'audio',
        pricing: 'Freemium',
        link: 'https://www.udio.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=udio.com&sz=128',
        description: 'AI music creation platform known for high-fidelity audio and complex musical compositions.',
        features: ['High Fidelity Audio', 'Complex Composition', 'Lyrics Generation'],
        description_ko: '고음질 오디오와 복잡한 음악 작곡으로 잘 알려진 AI 음악 창작 플랫폼입니다.',
        features_ko: ['고음질 오디오', '복잡한 작곡', '가사 생성']
    },

    // --- Chat/LLM ---
    {
        id: 501,
        name: 'ChatGPT',
        category: 'chat',
        pricing: 'Freemium',
        link: 'https://chat.openai.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=openai.com&sz=128',
        description: 'The versatile AI assistant from OpenAI, capable of writing, coding, analysis, and multimodal interaction.',
        features: ['Conversational AI', 'Data Analysis', 'Vision & Voice', 'GPT-4o'],
        description_ko: '글쓰기, 코딩, 데이터 분석 및 멀티모달 상호작용이 가능한 OpenAI의 다재다능한 AI 비서입니다.',
        features_ko: ['대화형 AI', '데이터 분석', '비전 및 음성', 'GPT-4o']
    },
    {
        id: 502,
        name: 'Claude 3.5',
        category: 'chat',
        pricing: 'Freemium',
        link: 'https://claude.ai/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=claude.ai&sz=128',
        description: 'Anthropic’s AI assistant known for its large context window, nuanced writing, and safety features.',
        features: ['Large Context Window', 'Nuanced Writing', 'Code Generation', 'Artifacts'],
        description_ko: '방대한 컨텍스트 윈도우, 섬세한 글쓰기, 강력한 안전 기능으로 잘 알려진 Anthropic의 AI 비서입니다.',
        features_ko: ['대용량 컨텍스트', '섬세한 글쓰기', '코드 생성', '아티팩트']
    },
    {
        id: 503,
        name: 'Gemini',
        category: 'chat',
        pricing: 'Freemium',
        link: 'https://gemini.google.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=google.com&sz=128',
        description: 'Google’s multimodal AI built from the ground up to understand text, images, video, and audio.',
        features: ['Multimodal', 'Integration with Google Workspace', 'Real-time Info']
    },
    {
        id: 504,
        name: 'Microsoft Copilot',
        category: 'chat',
        pricing: 'Freemium',
        link: 'https://copilot.microsoft.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128',
        description: 'Your everyday AI companion integrated into Windows and Microsoft 365, powered by GPT-4.',
        features: ['Web Search', 'Image Generation', 'Microsoft 365 Integration']
    },
    {
        id: 505,
        name: 'Perplexity',
        category: 'chat',
        pricing: 'Freemium',
        link: 'https://www.perplexity.ai/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128',
        description: 'An AI-powered answer engine that provides accurate, cited answers to complex questions using web search.',
        features: ['Real-time Search', 'Citations', 'Pro Search']
    },
    {
        id: 506,
        name: 'Mistral',
        category: 'chat',
        pricing: 'Freemium',
        link: 'https://chat.mistral.ai/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=mistral.ai&sz=128',
        description: 'European open-weight models offering high performance and efficiency, accessible via Le Chat.',
        features: ['Open Weight Options', 'Efficient Inference', 'Code Generation']
    },

    // --- Coding ---
    {
        id: 601,
        name: 'Cursor',
        category: 'coding',
        pricing: 'Freemium',
        link: 'https://cursor.sh/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=cursor.sh&sz=128',
        description: 'An AI-first code editor built on VS Code that understands your entire codebase.',
        features: ['Codebase Awareness', 'Copilot++', 'Natural Language Edit']
    },
    {
        id: 602,
        name: 'GitHub Copilot',
        category: 'coding',
        pricing: 'Paid',
        link: 'https://github.com/features/copilot',
        iconUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=128',
        description: 'The world’s most widely adopted AI developer tool, helping you write code faster with autocomplete and chat.',
        features: ['Autocomplete', 'Chat', 'Pull Request Summaries']
    },
    {
        id: 606,
        name: 'Supermaven',
        category: 'coding',
        pricing: 'Freemium',
        link: 'https://supermaven.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=supermaven.com&sz=128',
        description: 'The fastest AI code completion tool with a 1-million token context window.',
        features: ['Ultra-fast Completion', '1M Token Context', 'Low Latency']
    },

    // --- Documents ---
    {
        id: 801,
        name: 'ChatPDF',
        category: 'documents',
        pricing: 'Freemium',
        link: 'https://www.chatpdf.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=chatpdf.com&sz=128',
        description: 'Chat with any PDF. Provides summaries and answers questions from uploaded documents.',
        features: ['PDF Analysis', 'Q&A', 'Summarization'],
        description_ko: '모든 PDF와 대화하세요. 업로드된 문서의 요약 및 질문에 대한 답변을 제공합니다.',
        features_ko: ['PDF 분석', '질의응답', '요약']
    },
    {
        id: 802,
        name: 'Humata',
        category: 'documents',
        pricing: 'Freemium',
        link: 'https://www.humata.ai/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=humata.ai&sz=128',
        description: 'AI-powered research assistant that helps you read specific files faster.',
        features: ['Research Assistant', 'Citation', 'Fast Processing'],
        description_ko: '특정 파일을 더 빠르게 읽을 수 있도록 도와주는 AI 기반 연구 보조 도구입니다.',
        features_ko: ['연구 보조', '인용', '빠른 처리']
    },

    // --- Editing ---
    {
        id: 851,
        name: 'Descript',
        category: 'editing',
        pricing: 'Freemium',
        link: 'https://www.descript.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=descript.com&sz=128',
        description: 'All-in-one audio and video editor that lets you edit media like a text document.',
        features: ['Text-Based Editing', 'Overdub', 'Studio Sound'],
        description_ko: '텍스트 문서처럼 미디어를 편집할 수 있는 올인원 오디오 및 비디오 편집기입니다.',
        features_ko: ['텍스트 기반 편집', '오버덥', '스튜디오 사운드']
    },
    {
        id: 852,
        name: 'Canva',
        category: 'editing',
        pricing: 'Freemium',
        link: 'https://www.canva.com/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=canva.com&sz=128',
        description: 'Visual suite with AI-powered magic editing tools for photos and designs.',
        features: ['Magic Eraser', 'Magic Edit', 'Design Templates'],
        description_ko: '사진 및 디자인을 위한 AI 기반 매직 편집 도구를 갖춘 비주얼 제품군입니다.',
        features_ko: ['매직 지우개', '매직 편집', '디자인 템플릿']
    },

    // --- Productivity/Writing ---
    {
        id: 901,
        name: 'Gamma',
        category: 'productivity',
        pricing: 'Freemium',
        link: 'https://gamma.app/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=gamma.app&sz=128',
        description: 'A new medium for presenting ideas, powered by AI. Create beautiful presentations, docs, and webpages in seconds.',
        features: ['Presentation Gen', 'One-click Polish', 'Embeds']
    },
    {
        id: 902,
        name: 'Notion AI',
        category: 'productivity',
        pricing: 'Paid',
        link: 'https://www.notion.so/product/ai',
        iconUrl: 'https://www.google.com/s2/favicons?domain=notion.so&sz=128',
        description: 'Access the limitless power of AI, right inside your notes and docs.',
        features: ['Q&A', 'Writing Assistant', 'Autofill Tables']
    },
    {
        id: 701,
        name: 'Jasper',
        category: 'writing',
        pricing: 'Paid',
        link: 'https://www.jasper.ai/',
        iconUrl: 'https://www.google.com/s2/favicons?domain=jasper.ai&sz=128',
        description: 'AI copilot for enterprise marketing teams to create on-brand content.',
        features: ['Brand Voice', 'Marketing Campaigns', 'SEO Optimization']
    },
];

export const news = [
    {
        id: 1,
        title: 'OpenAI, GPT-6 "Insight" 모델 사전 공개 (2026.02.08)',
        summary: '인간 수준의 추론 능력을 넘어선 GPT-6 Insight 모델이 제한된 사용자에게 공개되었습니다. 실시간 비디오 처리와 복합적 문제 해결 능력이 획기적으로 향상되었습니다.',
        date: '2026-02-08',
        relatedToolName: 'GPT-6 Preview',
        relatedToolUrl: 'https://openai.com/blog',
        newsUrl: 'https://openai.com/blog',
    },
    {
        id: 2,
        title: 'Midjourney v7: 3D 모델링 생성 기능 출시 (2026.02.05)',
        summary: '이제 텍스트 프롬프트만으로 완벽한 3D 오브젝트와 텍스처를 생성하고 내보낼 수 있습니다. 게임 개발 파이프라인의 혁신이 예상됩니다.',
        date: '2026-02-05',
        relatedToolName: 'Midjourney v7',
        relatedToolUrl: 'https://www.midjourney.com/',
        newsUrl: 'https://docs.midjourney.com/docs/models',
    },
    {
        id: 3,
        title: 'Apple "Siri Intelligence" 전면 배포 시작 (2026.02.01)',
        summary: '아이폰 17과 함께 공개된 차세대 Siri가 모든 애플 기기에 배포되었습니다. 온디바이스 AI로 앱 간의 복잡한 작업을 자연어로 수행합니다.',
        date: '2026-02-01',
        relatedToolName: 'Apple AI',
        relatedToolUrl: 'https://www.apple.com/siri/',
        newsUrl: 'https://www.apple.com/newsroom/',
    }
];
