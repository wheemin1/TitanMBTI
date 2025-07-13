# 진격의 거인 MBTI 테스트

React + TypeScript + Vite로 구축된 진격의 거인 캐릭터 매칭 MBTI 테스트입니다.

## 로컬 개발

```bash
npm install
npm run dev
```

## 배포 (Netlify)

1. 이 레포지토리를 GitHub에 푸시
2. Netlify에서 GitHub 레포지토리 연결
3. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `dist`

또는 Netlify CLI 사용:
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## 기술 스택

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Framer Motion