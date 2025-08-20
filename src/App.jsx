import { useEffect, useRef, useState } from "react";

const THEMES = [
  "light", "dark"
];

export default function App() {
  // --- 테마 상태 (로컬스토리지 기억)
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // --- DaisyUI dialog 모달
  const modalRef = useRef(null);
  const openModal = () => modalRef.current?.showModal();

  return (
    <div className="min-h-screen bg-base-200">
      {/* 상단 네비 + 테마 스위처 */}
      <div className="navbar bg-base-100 text-base-content shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">DaisyUI 체험하기</a>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="btn btn-sm"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            title="라이트/다크 토글"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>

          <select
            className="select select-sm select-bordered"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            title="DaisyUI 테마 선택"
          >
            {THEMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 본문 */}
      <main className="container mx-auto p-6">
        {/* 카드 그리드 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Cards</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="card bg-base-100 text-base-content shadow-xl">
              <figure className="h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1080&auto=format&fit=crop"
                  alt="Banner"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">첫 번째 카드</h3>
                <p className="text-sm opacity-80">
                  DaisyUI의 카드 컴포넌트 예시입니다.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">자세히</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100 text-base-content shadow-xl">
              <figure className="h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1080&auto=format&fit=crop"
                  alt="People"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">두 번째 카드</h3>
                <p className="text-sm opacity-80">
                  Tailwind와 100% 호환돼요.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn">보통 버튼</button>
                  <button className="btn btn-outline">아웃라인</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 text-base-content shadow-xl">
              <figure className="h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080&auto=format&fit=crop"
                  alt="Code"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">세 번째 카드</h3>
                <p className="text-sm opacity-80">
                  테마를 바꿔도 자동으로 색이 변경됩니다.
                </p>
                <div className="card-actions justify-between">
                  <div className="badge badge-neutral">new</div>
                  <button className="btn btn-secondary" onClick={openModal}>
                    모달 열기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 기타 컴포넌트 맛보기 */}
        <section className="space-y-4">
          <h2 className="text-2xl text-base-content font-bold">Etc.</h2>

          <div className="join">
            <button className="btn join-item btn-outline text-base-content">Prev</button>
            <button className="btn join-item btn-primary ">Now</button>
            <button className="btn join-item btn-outline text-base-content">Next</button>
          </div>

          <div className="tabs tabs-boxed">
            <a className="tab tab-active text-base-content">탭1</a>
            <a className="tab text-base-content">탭2</a>
            <a className="tab text-base-content">탭3</a>
          </div>

          <div className="flex flex-wrap gap-2">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              className="input input-bordered w-full max-w-xs text-base-content"
            />
            <button className="btn btn-accent">검색</button>
          </div>
        </section>
      </main>

      {/* DaisyUI Modal (dialog) */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box bg-base-100 text-base-content">
          <h3 className="font-bold text-lg">DaisyUI 모달</h3>
          <p className="py-2 text-sm opacity-80">
            React에서도 기본 <code>&lt;dialog&gt;</code>로 깔끔하게 동작해유.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* 아무 버튼이나 클릭하면 닫혀유~ */}
              <button className="btn">닫기</button>
            </form>
          </div>
        </div>
        {/* 바깥 클릭 닫기 */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}