export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600 px-4">
      <div className="w-full max-w-md text-center space-y-8">
        {/* Logo / wordmark */}
        <div className="space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-white"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Store Manager
          </h1>
          <p className="text-brand-200 text-sm font-medium uppercase tracking-widest">
            Clothing Store Management System
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 text-left">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-gray-900">
              Staff Sign In
            </h2>
            <p className="text-sm text-gray-500">
              Sign in with your store credentials to access inventory, sales,
              customers, and reports.
            </p>
          </div>

          {/* Placeholder — auth form will replace this */}
          <div className="space-y-3">
            <a
              href="/login"
              className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-150"
            >
              Go to Login
            </a>
          </div>

          <div className="border-t border-gray-100 pt-4 grid grid-cols-3 gap-3 text-center">
            {[
              { label: "Inventory", icon: "📦" },
              { label: "Sales", icon: "🧾" },
              { label: "Reports", icon: "📊" },
            ].map(({ label, icon }) => (
              <div key={label} className="space-y-1">
                <span className="text-2xl">{icon}</span>
                <p className="text-xs text-gray-500 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Role badges */}
        <div className="flex justify-center gap-2 flex-wrap">
          {["Sales Associate", "Store Manager", "Admin"].map((role) => (
            <span
              key={role}
              className="inline-block text-xs font-medium bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/20"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
