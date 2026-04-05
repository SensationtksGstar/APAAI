import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--surface)] px-6">
      <div className="max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-4xl text-[var(--ink)]">Página não encontrada</h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          O conteúdo que procura não está disponível nesta rota. Pode voltar à página inicial em português e continuar a partir daí.
        </p>
        <Link href="/pt" className="button button-primary mt-8 inline-flex">
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}

