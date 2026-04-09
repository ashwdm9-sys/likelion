---
name: fix issue template 
about: fix 템플릿입니다.
title: '[Prefix] 제목 작성'
labels: feat
assignees: ''
---

## 🧩 Issue 요약
- 어떤 버그를 수정하고 싶은지

---

## 🎯 수정 목적 (Why)
- 왜 이 수정이 필요한지
- 어떤 문제를 해결하는지



---

## 🧱 작업 범위 (Scope)
- 어디까지 구현하는지 명확히 작성 (과도한 확장 방지)

ex)
- 상품 생성 API (POST /items)
- DB 저장까지 포함
- 응답 DTO 반환까지

❌ 제외
- 상품 수정 기능
- 이미지 업로드

---

## 🛠️ 구현 상세 (How)

### 1. API 설계
- Method: POST
- URL: /items

### 2. Request
```json
{
  "name": "상품명",
  "price": 10000
}

### 3. Response (선택)
{
  "id": 1,
  "name": "상품명",
  "price": 10000
}

---

## 🔗 참고 자료 (Optional)
<!-- 참고 링크, 문서 -->

---

## ⚠️ 고려 사항 (Optional)
<!-- 주의할 점 -->
ex) 
- price는 0 이상
- name은 null 불가