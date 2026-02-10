
import {
    Image, Video, Music, Layout, MessageSquare, Code,
    FileText, Box, PenTool, Globe
} from 'lucide-react';

export const categories = [
    { id: 'image', name: 'Image', icon: 'Image' },
    { id: 'video', name: 'Video', icon: 'Video' },
    { id: 'audio', name: 'Audio', icon: 'Music' },
    { id: 'uiux', name: 'UI/UX', icon: 'Layout' },
    { id: 'chat', name: 'Chat', icon: 'MessageSquare' },
    { id: 'coding', name: 'Coding', icon: 'Code' },
    { id: 'writing', name: 'Writing', icon: 'FileText' },
    { id: '3d', name: '3D/VR', icon: 'Box' },
    { id: 'productivity', name: 'Productivity', icon: 'PenTool' },
    { id: 'etc', name: 'Browse/Etc', icon: 'Globe' },
];

export const tools = [
    // Image
    { id: 101, name: 'Midjourney v7', category: 'image', link: 'https://www.midjourney.com/', iconUrl: 'https://www.google.com/s2/favicons?domain=midjourney.com&sz=128' },
    { id: 102, name: 'DALL-E 4', category: 'image', link: 'https://openai.com/dall-e-3', iconUrl: 'https://www.google.com/s2/favicons?domain=openai.com&sz=128' },
    // Video
    { id: 201, name: 'Kling 4.0', category: 'video', link: 'https://kling.kuaishou.com/', iconUrl: 'https://www.google.com/s2/favicons?domain=kling.kuaishou.com&sz=128' },
    { id: 202, name: 'Sora Public', category: 'video', link: 'https://openai.com/sora', iconUrl: 'https://www.google.com/s2/favicons?domain=openai.com&sz=128' },
    // Audio
    { id: 301, name: 'Suno v5', category: 'audio', link: 'https://suno.com/', iconUrl: 'https://www.google.com/s2/favicons?domain=suno.com&sz=128' },
    { id: 302, name: 'ElevenLabs Turbo', category: 'audio', link: 'https://elevenlabs.io/', iconUrl: 'https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=128' },
    // UI/UX
    { id: 401, name: 'Figma AI', category: 'uiux', link: 'https://www.figma.com/', iconUrl: 'https://www.google.com/s2/favicons?domain=figma.com&sz=128' },
    { id: 402, name: 'Galileo 3', category: 'uiux', link: 'https://www.usegalileo.ai/', iconUrl: 'https://www.google.com/s2/favicons?domain=usegalileo.ai&sz=128' },
    // Chat
    { id: 501, name: 'GPT-6 Preview', category: 'chat', link: 'https://chat.openai.com/', iconUrl: 'https://www.google.com/s2/favicons?domain=openai.com&sz=128' },
    { id: 502, name: 'Claude 4 Opus', category: 'chat', link: 'https://claude.ai/', iconUrl: 'https://www.google.com/s2/favicons?domain=claude.ai&sz=128' },
    // Coding
    { id: 601, name: 'Cursor Pro', category: 'coding', link: 'https://cursor.sh/', iconUrl: 'https://www.google.com/s2/favicons?domain=cursor.sh&sz=128' },
    { id: 602, name: 'Gemini Code', category: 'coding', link: 'https://deepmind.google/technologies/gemini/', iconUrl: 'https://www.google.com/s2/favicons?domain=deepmind.google&sz=128' },
    // Writing
    { id: 701, name: 'Jasper', category: 'writing', link: 'https://www.jasper.ai/', iconUrl: 'https://www.google.com/s2/favicons?domain=jasper.ai&sz=128' },
    { id: 702, name: 'Wordtune', category: 'writing', link: 'https://www.wordtune.com/', iconUrl: 'https://www.google.com/s2/favicons?domain=wordtune.com&sz=128' },
    // 3D
    { id: 801, name: 'Spline AI', category: '3d', link: 'https://spline.design/', iconUrl: 'https://www.google.com/s2/favicons?domain=spline.design&sz=128' },
    // Productivity
    { id: 901, name: 'Gamma', category: 'productivity', link: 'https://gamma.app/', iconUrl: 'https://www.google.com/s2/favicons?domain=gamma.app&sz=128' },
    // Etc
    { id: 1001, name: 'Perplexity Pro', category: 'etc', link: 'https://www.perplexity.ai/', iconUrl: 'https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128' },
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
    },
    {
        id: 4,
        title: 'Figure 03 휴머노이드, 가정용 출시 확정 (2026.01.28)',
        summary: 'OpenAI와의 협력으로 탄생한 Figure 03 로봇이 올해 하반기 가정용으로 출시될 예정입니다. 가사 노동과 돌봄 서비스에 특화되었습니다.',
        date: '2026-01-28',
        relatedToolName: 'Figure AI',
        relatedToolUrl: 'https://www.figure.ai/',
        newsUrl: 'https://www.figure.ai/',
    },
    {
        id: 5,
        title: 'Suno v5, 작곡가들과의 저작권 협약 체결 (2026.01.20)',
        summary: 'AI 음악 생성 플랫폼 Suno가 주요 음반사들과 역사적인 저작권 협약을 맺으며, 생성된 음악의 상업적 이용 범위를 대폭 확대했습니다.',
        date: '2026-01-20',
        relatedToolName: 'Suno v5',
        relatedToolUrl: 'https://suno.com/',
        newsUrl: 'https://suno.com/blog',
    },
    {
        id: 6,
        title: 'Claude 4 Opus, 코딩 벤치마크 신기록 경신 (2026.01.15)',
        summary: '앤쓰로픽의 최신 모델이 복잡한 시스템 아키텍처 설계와 보안 취약점 분석에서 인간 전문가 수준을 넘어섰다는 평가를 받았습니다.',
        date: '2026-01-15',
        relatedToolName: 'Claude 4 Opus',
        relatedToolUrl: 'https://claude.ai/',
        newsUrl: '#',
    },
];
