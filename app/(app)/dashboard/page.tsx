// app/(app)/dashboard/page.tsx

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur-xl shadow-sm p-6">
        <h1 className="text-xl font-medium text-slate-900">Dashboard</h1>
        <p className="mt-2 text-slate-600">
          Platzhalter – hier kommt später das Backend/Dashboard rein.
        </p>
      </div>
    </main>
  );
}
